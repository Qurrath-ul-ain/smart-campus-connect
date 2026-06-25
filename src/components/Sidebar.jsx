import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        background: "#1e293b",
        color: "white",
        padding: "20px",
        marginBottom: "15px",
      }}
    >
      <h2>NEXUS</h2>

      <hr />

      <p>
        <Link
          to="/dashboard"
          style={{ color: "white", textDecoration: "none" }}
        >
          🏠 Dashboard
        </Link>
      </p>

      <p>
        <Link
          to="/availability"
          style={{ color: "white", textDecoration: "none" }}
        >
          👨‍🏫 Staff Availability
        </Link>
      </p>

      <p>
        <Link
          to="/appointment"
          style={{ color: "white", textDecoration: "none" }}
        >
          📅 Appointments
        </Link>
      </p>

      <p>
        <Link
          to="/certificate"
          style={{ color: "white", textDecoration: "none" }}
        >
          📄 Certificates
        </Link>
      </p>

      <p>
        <Link
          to="/complaint"
          style={{ color: "white", textDecoration: "none" }}
        >
          🛠 Complaints
        </Link>
      </p>

      <p>
        <Link
          to="/profile"
          style={{ color: "white", textDecoration: "none" }}
        >
          👤 Profile
        </Link>
      </p>

      <p>
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none" }}
        >
          🚪 Logout
        </Link>
      </p>
    </div>
  );
}

export default Sidebar;