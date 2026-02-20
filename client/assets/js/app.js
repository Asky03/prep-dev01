// Day 1 JS: only UI switching + show/hide password.
// No backend calls. Buttons remain disabled.

const tabLogin = document.getElementById("tab-login");
const tabSignup = document.getElementById("tab-signup");
const panelLogin = document.getElementById("panel-login");
const panelSignup = document.getElementById("panel-signup");

function setActive(mode) {
  const isLogin = mode === "login";

  tabLogin.classList.toggle("is-active", isLogin);
  tabLogin.setAttribute("aria-selected", String(isLogin));
  panelLogin.classList.toggle("is-active", isLogin);

  tabSignup.classList.toggle("is-active", !isLogin);
  tabSignup.setAttribute("aria-selected", String(!isLogin));
  panelSignup.classList.toggle("is-active", !isLogin);
}

tabLogin.addEventListener("click", () => setActive("login"));
tabSignup.addEventListener("click", () => setActive("signup"));

document.querySelectorAll("[data-switch]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const mode = btn.getAttribute("data-switch");
    setActive(mode);
  });
});

document.querySelectorAll('[data-toggle="password"]').forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const input = document.getElementById(targetId);
    if (!input) return;

    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    btn.textContent = isHidden ? "🙈" : "👁️";
    btn.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
  });
});