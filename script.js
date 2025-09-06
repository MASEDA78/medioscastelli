function validar() {
  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value.trim();

  if (usuario === "medioscastelli" && clave === "medios2025") {
    document.getElementById("loginView").classList.add("hidden");
    document.getElementById("inicioView").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "Usuario o clave incorrectos.";
  }
}

function mostrarMedios() {
  document.getElementById("inicioView").classList.add("hidden");
  document.getElementById("mediosView").classList.remove("hidden");
}

function volverInicio() {
  document.getElementById("mediosView").classList.add("hidden");
  document.getElementById("inicioView").classList.remove("hidden");
}
