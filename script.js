//your JS code here. If required.
// Function to set a cookie
function setCookie(name, value) {
  document.cookie = `${name}=${value}; path=/`;
}

// Function to get a cookie
function getCookie(name) {
  const cookies = document.cookie.split(";");

  for (let cookie of cookies) {
    cookie = cookie.trim();

    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }

  return null;
}

// Apply saved preferences when page loads
window.onload = function () {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  if (savedFontSize) {
    document.documentElement.style.setProperty(
      "--fontsize",
      savedFontSize + "px"
    );
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty(
      "--fontcolor",
      savedFontColor
    );
    document.getElementById("fontcolor").value = savedFontColor;
  }
};

// Save preferences
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;

  setCookie("fontsize", fontSize);
  setCookie("fontcolor", fontColor);

  document.documentElement.style.setProperty(
    "--fontsize",
    fontSize + "px"
  );
  document.documentElement.style.setProperty(
    "--fontcolor",
    fontColor
  );
});