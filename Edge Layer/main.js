// Initialize and add the map
function initMap() {
  // Your location
  const loc = { lat: 42.361145, lng: -71.057083 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc,
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

//   You Can Change Your Latitude And Longitude By Searching For Latitude ANd Longitude Change In Html //
//I used another person Api and the person deleted it so thats why It isnt Working //

// Sticky menu background
window.addEventListener("scroll", function () {
  if (window.scrollY > 150) {
    document.querySelector("#navbar").style.opacity = 0.9;
  } else {
    document.querySelector("#navbar").style.opacity = 1;
  }
});

// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      800
    );
  }
});
