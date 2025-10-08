// shelter.js
let claimed = [
  { food: 'Rice Meal', qty: 40, status: 'Claimed' }
];
let coupons = [
  { title: '10% off at Local Cafe', redeemed: false },
  { title: 'Free Drink Coupon', redeemed: false }
];

function renderShelter() {
  const c = document.getElementById('shelter-container');
  c.innerHTML = `
    <h3 class="font-semibold text-teal-700 mb-2">Claimed Food</h3>
    <div id="claimed-list" class="space-y-2 mb-4"></div>
    <h3 class="font-semibold text-teal-700 mb-2">Coupon Wallet</h3>
    <div id="coupon-list" class="space-y-2"></div>
  `;
  renderClaimedAndCoupons();
}

function renderClaimedAndCoupons() {
  document.getElementById('claimed-list').innerHTML = claimed.map(c=>
    <div class="border p-2 rounded-lg">${c.food} — ${c.qty} servings (${c.status})</div>
  ).join('');
  document.getElementById('coupon-list').innerHTML = coupons.map(c=>
    <div onclick="redeemCoupon('${c.title}')" class="border p-3 rounded-lg cursor-pointer hover:bg-green-50">${c.title}</div>
  ).join('');
}

function redeemCoupon(title) {
  showLoading();
  const c = coupons.find(x => x.title === title);
  if (c) c.redeemed = true;
  setTimeout(()=>alert(${title} redeemed!), 1200);
}