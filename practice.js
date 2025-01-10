async function fetchGitHubProfile() {
  const username = "Tushar1up"; // Replace with your GitHub username
  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
  }
}

fetchGitHubProfile();
