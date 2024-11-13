import React, { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/doctors.css";
import fetchData from "../helper/apiCall";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/reducers/rootSlice";
import Empty from "../components/Empty";


const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);

 // Replace the fetchAllDocs function with the sample code below
 const fetchAllDocs = async () => {
  dispatch(setLoading(true));
  const sampleDoctors = [
    {
      _id: "1",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      experience: "10 years",
      bio: "Expert in heart-related ailments and treatments.",
    },
    {
      _id: "2",
      name: "Dr. Rajesh Gupta",
      specialty: "Dermatologist",
      experience: "7 years",
      bio: "Specializes in skin care and cosmetic procedures.",
    },
    {
      _id: "3",
      name: "Dr. Emily Wong",
      specialty: "Pediatrician",
      experience: "5 years",
      bio: "Caring for children's health from birth through adolescence.",
    },
  ];
  setDoctors(sampleDoctors); // Temporarily set sample data
  console.log("Doctors after setting:", sampleDoctors); // Check if data is set correctly
  dispatch(setLoading(false));
};



  useEffect(() => {
    fetchAllDocs();
  }, []);

  return (
    <>
      <Navbar />
      {loading && <Loading />}
      {!loading && (
        <section className="container doctors">
          <h2 className="page-heading">Our Doctors</h2>
          {doctors.length > 0 ? (
            <div className="doctors-card-container">
              {doctors.map((ele) => {
                return (
                  <DoctorCard
                    ele={ele}
                    key={ele._id}
                  />
                );
              })}
            </div>
          ) : (
            <Empty />
          )}
        </section>
      )}
      <Footer />
    </>
  );
};

export default Doctors;
