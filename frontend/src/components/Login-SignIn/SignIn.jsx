import bgImage from "../../assets/image.png";
import logo from "../../assets/logo.png";
import Button from "./Button";

export default function SignIn() {
    return (
        <main className="login-page flex" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="top-logo">
                <img src={logo} alt="Onna Paarkalam Logo" /><span>Onna <b>Paarkalam</b></span>
            </div>
            <div className="login-card">
                <div className="center-logo">
                    <img src={logo} alt="logo" />
                </div>
                <h2>Welcome Back</h2>
                <p>Sign in to join the watch party</p>
                <div className="input-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="name@example.com" />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" placeholder="********" />
                </div>
                <Button className="login-btn">Sign In</Button>
                <p className="new-user">New here? <span>Join the club</span></p>
            </div>
        </main>
    );
}
