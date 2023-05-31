function notify(message) {
  // capture elements
  const notificationDiv = document.getElementById("notification");
  notificationDiv.textContent = message;
  notificationDiv.style.display = "block";

  // attach events
  notificationDiv.addEventListener("click", onClick);

  // click handler
  function onClick() {
    notificationDiv.style.display = "none";
  }
}
