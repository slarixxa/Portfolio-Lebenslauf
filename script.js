// JavaScript für den Dark-/Light-Mode-Schalter

// 1️⃣ Elemente aus dem HTML holen
const toggle = document.getElementById("theme-toggle");
const statusText = document.getElementById("theme-status");

// 2️⃣ Dark-Mode nur ausführen, wenn der Schalter existiert
if (toggle && statusText) {
  // Prüfen, ob der Nutzer schon einen Modus gespeichert hat
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    toggle.checked = true;
    statusText.textContent = "Dark Mode";
  }

  // Wenn der Schalter geklickt wird ...
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
}

// 🔼 Pfeil-nach-oben-Button
const pfeil = document.getElementById("pfeil");
if (pfeil) {
  pfeil.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ✉️ Formular-Validierung (nur auf Seiten, wo ein Formular existiert)
const form = document.querySelector("form");
if (form) {
  const nameInput = document.getElementById("nameKontakt");
  const emailInput = document.getElementById("emailKontakt");
  const messageInput = document.getElementById("messageKontakt");

  form.addEventListener("submit", function (event) {
    let errors = [];

    if (!nameInput.value.trim()) {
      errors.push("Name darf nicht leer sein.");
    }
    if (!emailInput.value.includes("@")) {
      errors.push("E-Mail muss ein @ enthalten.");
    }
    if (!messageInput.value.trim()) {
      errors.push("Nachricht darf nicht leer sein.");
    }

    if (errors.length > 0) {
      event.preventDefault();
      alert(errors.join("\n"));
    }
  });
}
