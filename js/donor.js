// donor.js
let donorListings = [
  { food: 'Pizza', qty: 50, expiry: '2025-10-08T18:00', status: 'Pending Pickup' }
];

function renderDonor() {
  const c = document.getElementById('donor-container');
  c.innerHTML = `
    <form class="space-y-3">
      <input id="food" class="input" placeholder="Food Type (e.g. Rice)" />
      <input id="qty" class="input" type="number" placeholder="Quantity (servings)" />
      <input id="exp" class="input" type="datetime-local" />
      <button type="button" class="btn-primary w-full" onclick="createListing()">Create Listing</button>
    </form>

    <h3 class="mt-6 text-teal-700 font-semibold">My Listings</h3>
    <div id="my-list" class="space-y-3 mt-2"></div>
  `;
  renderMyListings();
}

function renderMyListings() {
  const container = document.getElementById('my-list');
  container.innerHTML = donorListings.map(
    (l,i)=>`<div class="border p-3 rounded-lg flex justify-between">
      <div>${l.food} — ${l.qty} servings</div>
      <div class="text-xs text-gray-500">${l.status}</div>
    </div>`
  ).join('');
}

function createListing() {
  showLoading();
  const food = document.getElementById('food').value || 'Unknown';
  const qty = document.getElementById('qty').value || 0;
  const exp = document.getElementById('exp').value || '';
  donorListings.push({ food, qty, expiry: exp, status: 'Pending Pickup' });
  setTimeout(renderMyListings, 1200);
}

function exportDonorListings() {
  let csv = 'food,qty,expiry,status\n';
  donorListings.forEach(l => csv += ${l.food},${l.qty},${l.expiry},${l.status}\n);
  downloadCSV('donor-listings', csv);
}