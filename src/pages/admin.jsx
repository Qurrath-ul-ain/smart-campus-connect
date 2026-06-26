import { useState } from "react";
import Layout from "../components/Layout";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
function Admin() {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    department: "",
    office: "",
    email: "",
    phone: "",
    workingHours: "",
    status: "Available",
  });
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await addDoc(collection(db, "staff"), formData);

    alert("Staff Added Successfully!");

    setFormData({
      name: "",
      designation: "",
      department: "",
      office: "",
      email: "",
      phone: "",
      workingHours: "",
      status: "Available",
    });

  } catch (error) {
    console.log(error);
    alert("Error adding staff");
  }
};
  return (
    <Layout>
      {" "}
      <h2>Add Staff</h2>{" "}
      <form onSubmit={handleSubmit}>
        {" "}
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />{" "}
        <input
          type="text"
          placeholder="Designation"
          value={formData.designation}
          onChange={(e) =>
            setFormData({ ...formData, designation: e.target.value })
          }
        />{" "}
        <input
          type="text"
          placeholder="Department"
          value={formData.department}
          onChange={(e) =>
            setFormData({ ...formData, department: e.target.value })
          }
        />{" "}
        <input
          type="text"
          placeholder="Office"
          value={formData.office}
          onChange={(e) => setFormData({ ...formData, office: e.target.value })}
        />{" "}
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />{" "}
        <input
          type="text"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />{" "}
        <input
          type="text"
          placeholder="Working Hours"
          value={formData.workingHours}
          onChange={(e) =>
            setFormData({ ...formData, workingHours: e.target.value })
          }
        />{" "}
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        >
          {" "}
          <option>Available</option> <option>Busy</option>{" "}
          <option>In Meeting</option> <option>On Leave</option>{" "}
        </select>{" "}
        <button type="submit">Add Staff</button>{" "}
      </form>{" "}
    </Layout>
  );
}
export default Admin;
