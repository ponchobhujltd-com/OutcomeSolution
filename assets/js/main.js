/* Outcome Solution — site script (no backend, no accounts) */
(function () {
  var WA_NUMBER = "8801897524543";
  var EMAIL = "outcome.sltn@gmail.com";

  // Mobile navigation toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Reveal on scroll
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Enquiry form: sends the message through WhatsApp or email (nothing is stored on a server)
  var form = document.getElementById("enquiry-form");
  if (form) {
    var build = function () {
      var d = new FormData(form);
      var lines = [
        "Hello Outcome Solution,",
        "",
        "Name: " + (d.get("name") || ""),
        "Phone: " + (d.get("phone") || ""),
        "Interested in: " + (d.get("interest") || ""),
        "",
        (d.get("message") || "")
      ];
      return lines.join("\n").trim();
    };
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (!form.reportValidity()) return;
      var via = ev.submitter && ev.submitter.value === "email" ? "email" : "whatsapp";
      var text = build();
      if (via === "email") {
        window.location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent("Enquiry from website") + "&body=" + encodeURIComponent(text);
      } else {
        window.open("https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text), "_blank", "noopener");
      }
    });
  }
})();
