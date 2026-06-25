function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
      }}
    >
      {/* Left Side */}
      <div>
        <h2 style={{ margin: 0 }}>NEXUS</h2>
        <p style={{ margin: 0, color: "gray" }}>
          Campus, Sorted.
        </p>
      </div>

      {/* Right Side */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <h3>Welcome, Syeda 👋</h3>

        <img
          src="https://i.pravatar.cc/50"
          alt="Profile"
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        />
      </div>
    </div>
  );
}

export default Navbar;