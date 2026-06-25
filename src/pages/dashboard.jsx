import Layout from "../components/Layout";
import DashboardCard from "../components/DashboardCard";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <Layout>
      <h1>Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "30px",
        }}
      >
        <DashboardCard
          title="Staff Available"
          count="5"
        />

        <DashboardCard
          title="Appointments"
          count="2"
        />

        <DashboardCard
          title="Certificates"
          count="1"
        />

        <DashboardCard
          title="Complaints"
          count="0"
        />
      </div>

      <h2 style={{ marginTop: "40px" }}>
        Quick Actions
      </h2>

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
        }}
      >
        <Link to="/appointment">
          <button
        style={{
          padding: "10px 18px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#2563eb",
          color: "white",
          cursor: "pointer",
          fontWeight: "bold",
        }}
>
  Book Appointment
</button>
        </Link>

        <Link to="/certificate">
          <button
  style={{
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  Request Certificate
</button>
        </Link>

        <Link to="/complaint">
          <button
  style={{
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  Raise Complaint
</button>
        </Link>

        <Link to="/availability">
          <button
  style={{
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  View Staff
</button>
        </Link>
      </div>
    </Layout>
  );
}

export default Dashboard;