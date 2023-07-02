import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import svg from "../assets/office.png";
import Logo from "../assets/logo.png";
import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
import company5 from "../assets/company5.png";
import company6 from "../assets/company6.png";
import CardSlider from "./CardSlider";

const App = () => {
  const [typedText, setTypedText] = useState("");
  const targetText = "Efficient. Streamlined. Effective.";
  const [location, setLocation] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [isRolling, setIsRolling] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < targetText.length) {
        currentText += targetText[currentIndex];
        setTypedText(currentText);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleJobRoleChange = (event) => {
    setJobRole(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSearch = () => {
    if (location && jobRole) {
      // Perform the search operation using location and jobRole
      const searchQuery = {
        location: location,
        jobRole: jobRole,
      };

      // Make an API call to fetch candidates based on searchQuery
      fetch("/api/candidates", {
        method: "POST",
        body: JSON.stringify(searchQuery),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Candidates found:", data);
          // Update state or perform further actions with the fetched candidates
        })
        .catch((error) => {
          console.log("Error occurred while searching for candidates:", error);
          // Handle the error gracefully
        });
    } else {
      console.log(
        "Please enter both location and job role to perform the search."
      );
    }
  };

  const companies = [
    { logo: company1 },
    { logo: company2 },
    { logo: company3 },
    { logo: company4 },
    { logo: company5 },
    { logo: company6 },
    // Add more company objects as needed
  ];

  const companyLogoRef = useRef(null);

  useEffect(() => {
    const companyLogo = companyLogoRef.current;

    const startRolling = () => {
      setIsRolling(true);
    };

    const stopRolling = () => {
      setIsRolling(false);
    };

    companyLogo.addEventListener("mouseenter", startRolling);
    companyLogo.addEventListener("mouseleave", stopRolling);

    return () => {
      companyLogo.removeEventListener("mouseenter", startRolling);
      companyLogo.removeEventListener("mouseleave", stopRolling);
    };
  }, []);

  const handleSubscribe = () => {
    if (email) {
      // Perform subscription operation using the email
      console.log("Subscribed with email:", email);
      // You can make an API call here to subscribe the email
    } else {
      console.log("Please enter your email to subscribe.");
    }
  };

  return (
    <div className="App">
      <header className="navbar">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Company Logo" />
            <h1>HireWave</h1>
          </a>
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="#">Contact Us</a>
          <a href="/Login">Login/Register</a>
          <a href="/search">Search</a>
        </div>
      </header>
      <section className="company-description" style={{ paddingTop: "80px" }}>
        <div className="description-text">
          <div>
            <h2 className="animated-text" style={{ fontWeight: "bold" }}>
              {typedText}
            </h2>
            <p>
              Are you tired of sifting through stacks of resumes and spending
              hours on manual hiring processes? Look no further! Our online
              recruitment solution is here to revolutionize your hiring
              experience.
            </p>
          </div>
        </div>
        <div className="description-image">
          <img src={svg} alt="Office" />
        </div>
      </section>
      {/* <div className="rectangular-box"> */}
      <section className="search-section">
        <div className="search-form">
          <h2>Find Candidates</h2>
          <div className="input-group">
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={handleLocationChange}
              list="locationOptions"
            />
            <datalist id="locationOptions">
              <option value="Mumbai" />
              <option value="Delhi" />
              <option value="Bangalore" />
            </datalist>
            <input
              type="text"
              placeholder="Job Role"
              value={jobRole}
              onChange={handleJobRoleChange}
              list="jobRoleOptions"
            />
            <datalist id="jobRoleOptions">
              <option value="Software Engineer" />
              <option value="Product Manager" />
              <option value="Graphic Designer" />
            </datalist>
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </section>
      {/* </div> */}
      <div className="company-bar">
        {companies.map((company, index) => (
          <div
            key={index}
            className={`company-logo ${isRolling ? "rolling" : ""}`}
            ref={companyLogoRef}
          >
            <img src={company.logo} alt={company.name} />
          </div>
        ))}
      </div>
      <CardSlider />
    </div>
  );
};

export default App;
