// app.js
document.getElementById('year').innerText = new Date().getFullYear();

function switchView(id) {
  document.querySelectorAll('main > section').forEach(sec => {
    sec.classList.add('hidden');
  });
  document.getElementById(id).classList.remove('hidden');

  // Render relevant view
  if (id === 'donor-view') renderDonor();
  if (id === 'volunteer-view') renderVolunteer();
  if (id === 'shelter-view') renderShelter();
}

function mockLogin() {
  const role = document.getElementById('auth-role').value;
  showLoading();
  setTimeout(() => switchView(role + '-view'), 1200);
}