// JavaScript für den Dark-/Light-Mode-Schalter

// 1️⃣ Elemente aus dem HTML holen
const toggle = document.getElementById("theme-toggle");
const statusText = document.getElementById("theme-status");

const name = document.getElementById("nameKontakt");
const email = document.getElementById("emailKontakt");
const emailinclude = email.value;
const message = document.getElementById("messageKontakt");

// 2️⃣ Prüfen, ob der Nutzer schon einen Modus gespeichert hat
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  toggle.checked = true;
  statusText.textContent = "Dark Mode";
}

// 3️⃣ Wenn der Schalter geklickt wird ...
toggle.addEventListener("change", () => {
  if (toggle.checked) {
    // Dark Mode aktivieren
    document.body.classList.add("dark-mode");
    statusText.textContent = "Dark Mode";
    localStorage.setItem("theme", "dark"); // speichern
  } else {
    // Light Mode aktivieren
    document.body.classList.remove("dark-mode");
    statusText.textContent = "Light Mode";
    localStorage.setItem("theme", "light"); // speichern
  }
});

const pfeil = document.getElementById("pfeil");

pfeil.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelector("form").addEventListener("submit", function (event) {
  if (
    nameKontakt.value === "" ||
    emailinclude.includes("@") ||
    message.value === ""
  ) {
    event.preventDefault();
    alert(
      "Darf nicht leer sein",
      nameKontakt.value,
      "Darf nicht leer sein",
      message,
      "Muss ein @ enthalten",
      message
    );
  }
});
