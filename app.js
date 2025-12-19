import { developments, rentals } from "./data.js";

function $(sel){ return document.querySelector(sel); }
function getParam(name){
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function unique(list, key){
  return [...new Set(list.map(x => x[key]).filter(Boolean))].sort();
}

function fillSelect(selectEl, values, placeholder){
  selectEl.innerHTML = "";
  const opt0 = document.createElement("option");
  opt0.value = "";
  opt0.textContent = placeholder;
  selectEl.appendChild(opt0);

  values.forEach(v=>{
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    selectEl.appendChild(opt);
  });
}

function renderCards({items, container, type}){
  container.innerHTML = items.map(item => {
    const badges = [
      `<span class="badge gold">${item.status}</span>`,
      item.county ? `<span class="badge">${item.county} County</span>` : "",
      item.acreage ? `<span class="badge">${item.acreage}</span>` : ""
    ].join("");

    const href = type === "development"
      ? `land-detail.html?id=${encodeURIComponent(item.id)}`
      : `rental-detail.html?id=${encodeURIComponent(item.id)}`;

    return `
      <a class="listing" href="${href}" aria-label="${item.name}">
        <div class="thumb">
          <img src="${item.heroImage}" alt="${item.name}">
        </div>
        <div class="meta">
          <h3 class="name">${item.name}</h3>
          <p class="addr">${item.address}</p>
          <div class="badges">${badges}</div>
        </div>
      </a>
    `;
  }).join("");
}

function setupListingsPage({type}){
  const items = type === "development" ? developments : rentals;

  const cardsEl = $("#cards");
  const countyEl = $("#filterCounty");
  const statusEl = $("#filterStatus");
  const searchEl = $("#search");

  fillSelect(countyEl, unique(items, "county"), "All Counties");
  fillSelect(statusEl, unique(items, "status"), "All Status");

  function apply(){
    const county = countyEl.value.trim();
    const status = statusEl.value.trim();
    const q = searchEl.value.trim().toLowerCase();

    const filtered = items.filter(x=>{
      const matchesCounty = !county || (x.county === county);
      const matchesStatus = !status || (x.status === status);
      const blob = `${x.name} ${x.address} ${x.county} ${x.status}`.toLowerCase();
      const matchesSearch = !q || blob.includes(q);
      return matchesCounty && matchesStatus && matchesSearch;
    });

    renderCards({items: filtered, container: cardsEl, type});
    $("#count").textContent = `${filtered.length} result${filtered.length===1?"":"s"}`;
  }

  countyEl.addEventListener("change", apply);
  statusEl.addEventListener("change", apply);
  searchEl.addEventListener("input", apply);

  apply();
}

function setupDetailPage({type}){
  const id = getParam("id");
  const items = type === "development" ? developments : rentals;
  const item = items.find(x => x.id === id);

  if(!item){
    $("#detailTitle").textContent = "Not Found";
    $("#detailBody").innerHTML = `<p class="muted">This listing could not be found.</p>`;
    return;
  }

  $("#detailTitle").textContent = item.name;
  $("#detailAddress").textContent = item.address;

  const badges = [
    `<span class="badge gold">${item.status}</span>`,
    item.county ? `<span class="badge">${item.county} County</span>` : "",
    item.acreage ? `<span class="badge">${item.acreage}</span>` : ""
  ].join("");

  $("#detailBadges").innerHTML = badges;

  // main image
  $("#detailHero").src = item.heroImage;
  $("#detailHero").alt = item.name;

  // overview / vision
  $("#overview").textContent = item.overview || "";
  $("#vision").textContent = item.vision || "";

  // timeline
  const tl = item.timeline || [];
  $("#timeline").innerHTML = tl.length
    ? `<ul>${tl.map(x=>`<li>${x}</li>`).join("")}</ul>`
    : `<p class="muted">Timeline updates will be posted as the project progresses.</p>`;

  // gallery
  const gal = item.gallery || [];
  $("#gallery").innerHTML = gal.length
    ? gal.map(src => `<img src="${src}" alt="${item.name} photo">`).join("")
    : "";

  // map embed (optional)
  const mapWrap = $("#mapWrap");
  if(item.mapUrl){
    mapWrap.innerHTML = `
      <iframe
        title="Map for ${item.name}"
        src="${item.mapUrl}"
        width="100%" height="280"
        style="border:0; border-radius:14px; border:1px solid rgba(250,248,244,.12);"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;
  } else {
    mapWrap.innerHTML = `<p class="muted">Map will be added when available.</p>`;
  }

  // email link
  const mailto = "mailto:leeholdingsbiz@gmail.com?subject=" + encodeURIComponent(`${item.name} — Inquiry`);
  $("#emailLink").href = mailto;
}

function setActiveNav(){
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a=>{
    const href = a.getAttribute("href");
    if(href === path) a.classList.add("active");
  });
}

document.addEventListener("DOMContentLoaded", ()=>{
  setActiveNav();

  // listings
  if($("#cards") && $("#pageType")){
    const type = $("#pageType").value;
    setupListingsPage({type});
  }

  // details
  if($("#detailPageType")){
    const type = $("#detailPageType").value;
    setupDetailPage({type});
  }
});
