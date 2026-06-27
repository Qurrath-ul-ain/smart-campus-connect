import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import AdminStaffCard from "../components/AdminStaffCard";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  onSnapshot,
} from "firebase/firestore";
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
    availableTime: "",
  });
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [staffList, setStaffList] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(formData);
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
        availableTime: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error adding staff");
    }
  };
  const getStaff = () => {
    return onSnapshot(collection(db, "staff"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setStaffList(data);
    });
  };
  const updateStatus = async () => {
    try {
      const staffRef = doc(db, "staff", selectedStaff.id);

      await updateDoc(staffRef, {
        status: selectedStaff.status,
        availableTime: selectedStaff.availableTime,
      });

      alert("Status Updated Successfully!");

      setSelectedStaff(null);
    } catch (error) {
      console.log(error);
      alert("Error updating status");
    }
  };
  useEffect(() => {
    const unsubscribe = getStaff();

    return () => unsubscribe();
  }, []);
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
        <input
          type="text"
          placeholder="Available Until / Around"
          value={formData.availableTime}
          onChange={(e) =>
            setFormData({
              ...formData,
              availableTime: e.target.value,
            })
          }
        />
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        >
          {" "}
          <option>Available</option> <option>Busy</option>{" "}
          <option>In Meeting</option> <option>On Leave</option>{" "}
        </select>{" "}
        <button type="submit">Add Staff</button>
      </form>{" "}
      <h2>Staff Members</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {staffList.map((staff) => (
          <AdminStaffCard
            key={staff.id}
            staff={staff}
            onEdit={setSelectedStaff}
          />
        ))}
      </div>
      {selectedStaff && (
        <>
          <h2>Edit Staff Details</h2>

          <select
            value={selectedStaff.status}
            onChange={(e) =>
              setSelectedStaff({
                ...selectedStaff,
                status: e.target.value,
              })
            }
          >
            <option>Available</option>
            <option>Busy</option>
            <option>In Meeting</option>
            <option>On Leave</option>
          </select>
          <br />
          <br />
          <input
            type="text"
            placeholder="Next Available Time"
            value={selectedStaff.availableTime || ""}
            onChange={(e) =>
              setSelectedStaff({
                ...selectedStaff,
                availableTime: e.target.value,
              })
            }
          />
          <br />
          <button onClick={updateStatus}>Save</button>
        </>
      )}
    </Layout>
  );
}
export default Admin;
