
import ProfileHeader from "../components/ProfileHeader";
import RecentlyWatched from "../components/RecentlyWatched";
import './profile.css'

export default function Profile() {
  return (
    <main className="page">
      <ProfileHeader />
      <RecentlyWatched />
    </main>
  );
}