const catalyst = require("zcatalyst-sdk-node");
const bcrypt = require("bcryptjs");

module.exports = async (req, res) => {

  let body = "";

  req.on("data", chunk => {
    body += chunk;
  });

  req.on("end", async () => {
    try {
      const data = JSON.parse(body || "{}");
      const { password, username } = data;

      const app = catalyst.initialize(req);
      const zcql = app.zcql();
      const usersTable = app.datastore().table("users");

      /* ================= SIGNUP ================= */
      if (req.url === "/signup") {

        if (!password || !username) {
          res.writeHead(400, { "Content-Type": "application/json" });
          return res.end(JSON.stringify({ message: "All fields required" }));
        }

        const check = await zcql.executeZCQLQuery(
          `SELECT ROWID FROM users WHERE username='${username}'`
        );

        if (check.length > 0) {
          res.writeHead(409, { "Content-Type": "application/json" });
          return res.end(JSON.stringify({ message: "User already exists" }));
        }

        const hashed = await bcrypt.hash(password, 10);

        await usersTable.insertRow({
          password: hashed,
          username
        });

        res.writeHead(201, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "Signup successful" }));
      }

      /* ================= SIGNIN ================= */
      if (req.url === "/signin") {

        if (!username || !password) {
          res.writeHead(400, { "Content-Type": "application/json" });
          return res.end(JSON.stringify({ message: "username & password required" }));
        }

        const result = await zcql.executeZCQLQuery(
          `SELECT ROWID , password, username , bio FROM users WHERE username='${username}'`
        );

        if (result.length === 0) {
          res.writeHead(401, { "Content-Type": "application/json" });
          return res.end(JSON.stringify({ message: "User not found" }));
        }

        const user = result[0].users;
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
          res.writeHead(401, { "Content-Type": "application/json" });
          return res.end(JSON.stringify({ message: "Invalid password" }));
        }

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({
          message: "Login successful",
          username: user.username,
		      id: user.ROWID,
          bio:user.bio
        }));
      }

    } catch (err) {
      console.error("Auth error:", err);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Server error" }));
    }
  });
};
