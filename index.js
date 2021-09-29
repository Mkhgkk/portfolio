if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  document.body.innerHTML =
    "Please visit this site on Desktop. I have not figured out how to display some wider elements on mobile yet.";
}

function navigate(url) {
  window.location.href = url;
}
