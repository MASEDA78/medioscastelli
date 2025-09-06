function validar() {
  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value.trim();

  if (usuario === "medioscastelli" && clave === "medios2025") {
    document.getElementById("loginView").style.display = "none";
    document.getElementById("mainView").style.display = "flex";
  } else {
    document.getElementById("error").innerText = "Usuario o clave incorrectos.";
  }
}

function cerrarSesion() {
  document.getElementById("mainView").style.display = "none";
  document.getElementById("loginView").style.display = "block";
  document.getElementById("usuario").value = "";
  document.getElementById("clave").value = "";
  document.getElementById("error").innerText = "";
}
