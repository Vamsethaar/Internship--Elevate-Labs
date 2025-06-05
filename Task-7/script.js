const userContainer = document.getElementById("user-container");

function fetchUserData() {
  userContainer.innerHTML = "Loading...";

  fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then(users => {
      userContainer.innerHTML = ""; // Clear previous data
      users.forEach(user => {
        const card = document.createElement("div");
        card.className = "user-card";
        card.innerHTML = `
          <h3>${user.name}</h3>
          <p>Email: ${user.email}</p>
          <p>Address: ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(card);
      });
    })
    .catch(error => {
      userContainer.innerHTML = `<p style="color: red;">Failed to load users: ${error.message}</p>`;
    });
}

// Fetch data on page load
fetchUserData();
