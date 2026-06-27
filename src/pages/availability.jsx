import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import StaffCard from "../components/StaffCard";

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";

function Availability() {
  const [staffList, setStaffList] = useState([]);
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All Departments");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "staff"),
      (snapshot) => {
        const staffData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setStaffList(staffData);
      },
      (error) => {
        console.log(error);
      },
    );

    return () => unsubscribe();
  }, []);

  // Filter staff based on search
  const filteredStaff = staffList.filter((staff) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      staff.name.toLowerCase().includes(searchText) ||
      staff.designation.toLowerCase().includes(searchText) ||
      staff.department.toLowerCase().includes(searchText);

    const matchesDepartment =
      department === "All Departments" || staff.department === department;

    return matchesSearch && matchesDepartment;
  });

  return (
    <Layout>
      <h1>Staff Availability</h1>

      <h3>Search Staff</h3>

      <input
        type="text"
        placeholder="Search Staff..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "300px",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid gray",
          marginBottom: "20px",
        }}
      />

      <h3>Department</h3>

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        style={{
          width: "320px",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid gray",
          marginBottom: "20px",
        }}
      >
        <option>All Departments</option>
        <option>Administration</option>
        <option>Computer Science</option>
        <option>Mechanical</option>
        <option>Civil</option>
        <option>ISE</option>
      </select>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        {filteredStaff.length === 0 ? (
          <div
            style={{
              width: "100%",
              textAlign: "center",
              padding: "40px",
              border: "2px dashed #ccc",
              borderRadius: "12px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h2>🔍 No Staff Found</h2>

            <p>No staff matched your search or selected department.</p>
          </div>
        ) : (
          filteredStaff.map((staff) => (
            <StaffCard key={staff.id} staff={staff} />
          ))
        )}
      </div>
    </Layout>
  );
}

export default Availability;
