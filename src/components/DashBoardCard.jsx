function DashboardCard({ title, count }) {
  return (
    <div
  style={{
    width: "220px",
    background: "white",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    textAlign: "center",
    cursor: "pointer",
  }}
    >
    
      <h3>{title}</h3>

      <h1 style={{ color: "#2563eb" }}>
        {count}
      </h1>
    </div>
  );
}

export default DashboardCard;