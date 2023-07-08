import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CandidateProfileCard from "./CandidateProfileCard";
import Logo from "../assets/logo.png";

const candidates = [
  {
    id: 1,
    name: "Andrew Neil",
    location: "Bangalore",
    role: "Web Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    socialLinks: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-github", url: "#" },
      { icon: "fab fa-youtube", url: "#" },
    ],
  },
  {
    id: 2,
    name: "Rohit Singh",
    location: "Delhi",
    role: "Web Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    socialLinks: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-github", url: "#" },
      { icon: "fab fa-youtube", url: "#" },
    ],
  },

  {
    id: 3,
    name: "Rohit Singh",
    location: "Delhi",
    role: "Web Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    socialLinks: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-github", url: "#" },
      { icon: "fab fa-youtube", url: "#" },
    ],
  },

  {
    id: 4,
    name: "Rohit Singh",
    location: "Delhi",
    role: "Web Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    socialLinks: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-github", url: "#" },
      { icon: "fab fa-youtube", url: "#" },
    ],
  },

  {
    id: 5,
    name: "Rohit Singh",
    location: "Delhi",
    role: "Web Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    socialLinks: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-github", url: "#" },
      { icon: "fab fa-youtube", url: "#" },
    ],
  },

  {
    id: 6,
    name: "Rohit Singh",
    location: "Delhi",
    role: "Web Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    socialLinks: [
      { icon: "fab fa-facebook-f", url: "#" },
      { icon: "fab fa-twitter", url: "#" },
      { icon: "fab fa-instagram", url: "#" },
      { icon: "fab fa-github", url: "#" },
      { icon: "fab fa-youtube", url: "#" },
    ],
  },
  // Add more candidate objects as needed
];


const CandidateSearch = () => {
  const location = useLocation();
  const searchQuery = location.state?.searchQuery || {}; // Access search filter from location.state
  const { location: searchLocationProp, jobRole: searchRoleProp } = searchQuery;

  const [searchLocation, setSearchLocation] = useState(searchLocationProp || "");
  const [searchRole, setSearchRole] = useState(searchRoleProp || "");
  const [searchResults, setSearchResults] = useState(candidates);

  useEffect(() => {
    applySearchFilter();
  }, []);

  const applySearchFilter = () => {
    const filteredResults = candidates.filter(
      (candidate) =>
        candidate.location
          .toLowerCase()
          .includes(searchLocation.toLowerCase()) &&
        candidate.role.toLowerCase().includes(searchRole.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  const handleLocationChange = (e) => {
    setSearchLocation(e.target.value);
  };

  const handleRoleChange = (e) => {
    setSearchRole(e.target.value);
  };

  const handleSearch = () => {
    applySearchFilter();
  };

  return (
    <div>
      <header className="navbar">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="Company Logo" />
            <h1>HireWave</h1>
          </a>
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/Login">Login/Register</a>
          <a href="CandidateSearch">Search</a>
        </div>
      </header>
      <section className="search-candidate">
        <div className="search-form">
          <h2>Find Candidates</h2>
          <div className="input-group">
            <input
              type="text"
              placeholder="Location"
              value={searchLocation}
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
              value={searchRole}
              onChange={handleRoleChange}
              list="jobRoleOptions"
            />
            <datalist id="jobRoleOptions">
              <option value="Software Engineer" />
              <option value="Product Manager" />
              <option value="Web Developer" />
            </datalist>
      <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </section>
      <div className="candidate-grid">
        {searchResults.map((candidate) => (
          <CandidateProfileCard
            key={candidate.id}
            name={candidate.name}
            location={candidate.location}
            role={candidate.role}
            imageUrl={candidate.imageUrl}
            socialLinks={candidate.socialLinks}
          />
        ))}
      </div>
    </div>
  );
};

export default CandidateSearch;