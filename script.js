function validar() {
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;

  if (usuario === "medioscastelli" && clave === "medios2025") {
    window.location.href = "https://elecciones.castelli.gob.ar/mesas.php";
  } else {
    document.getElementById("error").innerText = "Usuario o clave incorrectos.";
  }
}