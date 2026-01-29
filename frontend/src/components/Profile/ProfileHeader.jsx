import StatsBar from "./StatsBar.jsx";

export default function ProfileHeader() {
  return (
    <section className="profile-header">
      <div className="profile-info">
        <div>
        <div className="avatar" >
            <div className="imageholder"></div>
        </div>
        <span className="pro-badge">PRO</span>
        <h3>Alex Rivera</h3>
        </div>

        <div>
          <p className="tagline">
            Curating the finest cinematic experiences.
          </p>
          <StatsBar />
        </div>
      </div>

      <button className="edit-btn">Edit Hub</button>
    </section>
  );
}