function AdminStaffCard({ staff, onEdit }) {
  return (
    <div
      style={{
        width: "300px",
        background: "#fff",
        borderRadius: "12px",
        padding: "20px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
      }}
    >
      <h2>{staff.name}</h2>

      <h3>{staff.designation}</h3>

      <p>Status: {staff.status}</p>

      <button onClick={() => onEdit(staff)}>Edit</button>
    </div>
  );
}

export default AdminStaffCard;
