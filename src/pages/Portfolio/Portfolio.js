import React, { useEffect, useState } from 'react';
import './Portfolio.css';

function Portfolio() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); // New state for search input

  useEffect(() => {
    fetch('https://api.github.com/users/Ryan-Shrestha/repos')
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
        setLoading(false); // Stop loading once data is fetched
      })
      .catch((error) => {
        console.error('Error fetching GitHub repos:', error);
        setLoading(false); // Stop loading even on error
      });
  }, []);

  // Filter repositories based on search term
  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="portfolio-page">
      <h2>My Projects</h2>
      <p>Here are some of my GitHub projects showcasing my skills in development.</p>

      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {loading ? (
        <p>Loading projects...</p>
      ) : (
        <div className="portfolio-grid">
          {filteredRepositories.length > 0 ? (
            filteredRepositories.map((repo) => (
              <div className="portfolio-item" key={repo.id}>
                <img src="https://random-image-pepebigotes.vercel.app/api/random-image" alt={repo.name} />
                <h3>{repo.name}</h3>
                <p>{repo.description ? repo.description : 'No description available.'}</p>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="view-repo-link">
                  View Repository
                </a>
              </div>
            ))
          ) : (
            <p>Cannot Connect to Source. Please check your connection to Internet</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Portfolio;
