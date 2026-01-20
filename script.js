const usersContainer = document.getElementById("users");
const statusText = document.getElementById("status");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    statusText.style.display = "none";

    users.forEach(user => {
      const div = document.createElement("div");
      div.className = "user-card";
      div.innerHTML = `
        <h3>${user.name}</h3>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
      `;
      usersContainer.appendChild(div);
    });
  })
  .catch(error => {
    statusText.textContent = "Failed to load users. Please try again.";
  });
