function validarLogin() {
  const usuario = document.getElementById('usuario').value.trim();
  const clave = document.getElementById('clave').value.trim();

  if (usuario === 'medioscastelli' && clave === 'medios2025') {
    document.querySelector('.login-box').classList.add('hidden');
    document.getElementById('accesoMedios').classList.remove('hidden');
    document.getElementById('tituloPrincipal').textContent = 'Comando Electoral Fuerza Patria';
  } else {
    alert('Credenciales inválidas. Verificá usuario y clave.');
  }
}

function abrirVistaMesas() {
  document.getElementById('vistaMesas').classList.remove('hidden');
}

function cerrarVistaMesas() {
  document.getElementById('vistaMesas').classList.add('hidden');
}

function volver() {
  document.getElementById('accesoMedios').classList.add('hidden');
  document.getElementById('vistaMesas').classList.add('hidden');
  document.querySelector('.login-box').classList.remove('hidden');
  document.getElementById('usuario').value = '';
  document.getElementById('clave').value = '';
  document.getElementById('tituloPrincipal').textContent = 'Ingreso Institucional';
}

function cerrarSesion() {
  document.getElementById('usuario').value = '';
  document.getElementById('clave').value = '';
  alert('Sesión cerrada. Gracias por defender Castelli con dignidad.');
}