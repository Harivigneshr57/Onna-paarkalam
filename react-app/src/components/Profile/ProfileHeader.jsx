import StatsBar from "./StatsBar.jsx";
import Button from "../Login-SignIn/Button.jsx";

export default function ProfileHeader() {
  return (
    <section className="profile-header">
      <div className="profile-info">
        <div className="profile-section">
        <div className="avatar" >
            <div className="imageholder"></div>
        </div>
        {/* <span className="pro-badge">PRO</span> */}
        <h3>Vijxy_R_7</h3>

        </div>

        <div className="Biodetails">
          <p className="tagline">
            Curating the finest cinematic experiences.
          </p>
          <StatsBar />
        </div>
      </div>
      <div>
           <Button>Edit Hub</Button>
      </div>
    </section>
  );
}