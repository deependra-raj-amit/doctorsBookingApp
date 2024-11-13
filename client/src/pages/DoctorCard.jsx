import React from "react";

const DoctorCard = ({ ele }) => {
  console.log("Doctor data in DoctorCard:", ele); // Check what data is received
  return (
    <div className="doctor-card">
      <h3>{ele.name}</h3>
      <p><strong>Specialty:</strong> {ele.specialty}</p>
      <p><strong>Experience:</strong> {ele.experience}</p>
      <p>{ele.bio}</p>
    </div>
  );
};

export default DoctorCard;
