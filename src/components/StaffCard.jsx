function StaffCard({ staff }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Available":
        return "#16a34a";

      case "Busy":
        return "#f59e0b";

      case "In Meeting":
        return "#2563eb";

      case "On Leave":
        return "#6b7280";

      default:
        return "#000";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Available":
        return "🟢";

      case "Busy":
        return "🟡";

      case "In Meeting":
        return "🔵";

      case "On Leave":
        return "⚫";

      default:
        return "⚪";
    }
  };

  return (
    <div
      style={{
        width: "300px",
        backgroundColor: "#ffffff",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        transition: "0.3s",
      }}
    >
      {/* Profile Icon */}

      <div
        style={{
          fontSize: "60px",
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        👨‍🏫
      </div>

      {/* Name */}

      <h2 style={{ textAlign: "center", marginBottom: "5px" }}>{staff.name}</h2>

      {/* Designation */}

      <p
        style={{
          textAlign: "center",
          color: "#555",
          marginBottom: "15px",
        }}
      >
        {staff.designation}
      </p>

      {/* Department */}

      <p>
        <strong>🏢 Department:</strong> {staff.department}
      </p>

      {/* Status */}

      <p
        style={{
          color: getStatusColor(staff.status),
          fontWeight: "bold",
        }}
      >
        {getStatusIcon(staff.status)} {staff.status}
      </p>
      {staff.status === "Available" ? (
        <p>
          ⏰ <strong>Available Until:</strong> {staff.availableTime}
        </p>
      ) : (
        <p>
          ⏰ <strong>Available Around:</strong> {staff.availableTime}
        </p>
      )}
      {/* Office */}

      <p>
        <strong>📍 Office:</strong> {staff.office}
      </p>

      {/* Working Hours */}

      <p>
        <strong>🕒 Working Hours:</strong> {staff.workingHours}
      </p>

      <button
        style={{
          width: "100%",
          padding: "10px",
          marginTop: "15px",
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#2563eb",
          color: "white",
          cursor: "pointer",
        }}
      >
        Book Appointment
      </button>
    </div>
  );
}

export default StaffCard;
