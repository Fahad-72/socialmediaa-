import { FaHome, FaUserFriends, FaFacebookMessenger, FaBell } from "react-icons/fa";
import { useAuth } from "../../context/authcontext";
import Dropdown from "../../components/dropdown";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h2 className="logo">Social Media</h2>
      <div className="nav-icons">
        <FaHome size={22} />
        <FaUserFriends size={22} />

        <Dropdown
          icon={<FaFacebookMessenger size={22} />}
          title="Messages"
          items={["Sarah: Hi there!", "Ali: Let's play cricket"]}
        />

        <Dropdown
          icon={<FaBell size={22} />}
          title="Notifications"
          items={["John liked your photo", "Sarah commented on your post"]}
        />
      </div>
      <div className="user-section">
        <span>{user?.name}</span>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
