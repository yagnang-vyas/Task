import React, { useState,useEffect } from "react"

import axios from "axios"
// import Heading from "../../common/Heading"
// import { useHistory } from "react-router-dom";
import "./hero.css"

function Hero() {
  const [searchText, setSearchText] = useState('');
  const [userData, setUserData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch data from the Random User API
    axios.get('https://randomuser.me/api/?results=10').then((response) => {
      setUserData(response.data.results);
    });
  }, []);

  useEffect(() => {
    // Filter data based on search text
    const filteredData = userData.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`;
      return fullName.toLowerCase().includes(searchText.toLowerCase());
    });
    setSearchResults(filteredData);
  }, [searchText, userData]);

  return (
    <div>
        <h1>User Search</h1>
              <input
                type="text"
                placeholder="Search by first name or last name"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="bordered-input"
              />
              <div>
              {searchResults.map((user) => (
          <div key={user.login.uuid} className="card">
            <div className="img">
              <img src={user.picture.medium} alt={user.name.first} />
            </div>
            <p>
              Name: {user.name.first} {user.name.last}
            </p>
            <p>Email: {user.email}</p>
          </div>
        ))}
 </div>

    
    </div>
  );
}

export default Hero;

