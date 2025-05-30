let users = [];

const form = document.getElementById('registerForm');
const nameInput = document.getElementById('nameInput');
const tableBody = document.querySelector('#userTable tbody');
const counter = document.getElementById('counter');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = nameInput.value.trim();
  if (name === '') return;

  users.push(name);
  updateTable();
  nameInput.value = '';
});

function updateTable() {
  tableBody.innerHTML = '';
  users.forEach((user, index) => {
    const row = `<tr>
      <td>${index + 1}</td>
      <td>${user}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
  counter.innerText = users.length;
}
