// volunteer.js
let volunteerPoints = 450;
let nearbyPickups = [
  { food: 'Sandwiches', qty: 30, dist: 2.5, urgency: 'High - 4h' },
  { food: 'Fruit Boxes', qty: 20, dist: 1.8, urgency: 'Medium - 12h' }
];

function renderVolunteer() {
  const c = document.getElementById('volunteer-container');
  c.innerHTML = `
    <div class="p-4 bg-gray-50 rounded-lg mb-4">
      <div class="text-sm text-gray-500">Points</div>
      <div class="text-3xl font-bold text-green-600">${volunteerPoints}</div>
    </div>
    <h3 class="font-semibold text-teal-700 mb-2">Nearby Pickups</h3>
    <div id="pickup-list" class="space-y-3"></div>
  `;
  renderNearbyList();
}

function renderNearbyList() {
  const list = document.getElementById('pickup-list');
  list.innerHTML = nearbyPickups.map(p=>`
    <div class="border p-3 rounded-lg flex justify-between items-center">
      <div>
        <div class="font-semibold">${p.food} (${p.qty})</div>
        <div class="text-xs text-gray-500">${p.dist} km • ${p.urgency}</div>
      </div>
      <button onclick="acceptPickup('${p.food}')" class="btn-primary text-xs px-3 py-1">Accept</button>
    </div>
  `).join('');
}

function acceptPickup(food) {
  showLoading();
  volunteerPoints += 10;
  setTimeout(()=>renderVolunteer(), 1200);
}