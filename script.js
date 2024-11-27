// Slideshow variables
let slideIndex = 0;

// Tampilkan halaman pengungkapan dan slideshow
function showConfession() {
  document.querySelector(".landing").style.display = "none";
  document.querySelector(".confession").style.display = "block";
  typeConfessionText();
  showSlide(slideIndex);
}

// Teks pengungkapan perasaan dengan efek mengetik
let confessionText =
  "Aku ingin kamu tahu bahwa aku sangat menyukaimu. Perasaanku padamu ini sudah lama tersimpan, dan aku berharap kamu merasakan hal yang sama. Maukah kamu menerima perasaanku ini?";
let i = 0;

function typeConfessionText() {
  if (i < confessionText.length) {
    document.getElementById("confessionText").innerHTML +=
      confessionText.charAt(i);
    i++;
    setTimeout(typeConfessionText, 50);
  }
}

// Fungsi untuk menampilkan slide
function showSlide(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let slide of slides) {
    slide.style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// Fungsi untuk mengganti slide dengan tombol
function changeSlide(n) {
  showSlide((slideIndex += n));
}

// Fungsi untuk menampilkan respons dan mengirimkan data ke Google Sheets
const apiUrl = "YOUR_API_URL"; // Ganti dengan URL dari Google Sheets Web App

function showResponse(response) {
  document.querySelector(".confession").style.display = "none";
  document.getElementById("responseText").innerHTML = response;
  document.getElementById("response").style.display = "block";

  // Kirim data respons ke Google Sheets
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ response: response }),
  })
    .then((response) => response.json())
    .then((data) => console.log("Response saved:", data))
    .catch((error) => console.error("Error:", error));
}
