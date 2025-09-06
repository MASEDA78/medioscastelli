function validar() {
  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value.trim();

  if (usuario === "medioscastelli" && clave === "medios2025") {
    window.location.href = "medios.html";
  } else {
    document.getElementById("error").innerText = "Usuario o clave incorrectos.";
  }
}
