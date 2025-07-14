// Materias y correlativas (basado en tu documento)
const materias = {
  'Anatomía': [],
  'Neurología I': ['Anatomía'],
  'Genética y Embriología': ['Anatomía'],
  'Fonoodontoestomatología': ['Anatomía'],
  'Eufonía': [],
  'Alteraciones vocales – Intervención fonoaudiológica': ['Eufonía'],
  'Práctica Profesional': ['Eufonía'],
  'Filosofía': [],
  'Teología Dogmática I': ['Filosofía'],
  'Física Acústica para Fonoaudiología': [],
  'Audiología I': ['Física Acústica para Fonoaudiología'],
  'Lingüística general y teorías psicolingüísticas sobre la adquisición del lenguaje y la comunicación': [],
  'Desarrollo del lenguaje y la comunicación': ['Lingüística general y teorías psicolingüísticas sobre la adquisición del lenguaje y la comunicación', 'Psicología General y Evolutiva'],
  'Modulo de Integración Disciplinar I (MID I)': [],
  'Modulo de Integración Disciplinar II (MID II)': ['Modulo de Integración Disciplinar I (MID I)', 'Lingüística general y teorías psicolingüísticas sobre la adquisición del lenguaje y la comunicación'],
  'Psicología General y Evolutiva': [],
  'Audiología II': ['Audiología I', 'Genética y Embriología'],
  'Fonoodontoestomatología': ['Anatomía'],
  'Alteraciones fonoodontoestomatognaticas – Intervención Fonoaudiológica': ['Fonoodontoestomatología'],
  'Metodología de la Investigación': ['Desarrollo del lenguaje y la comunicación', 'MID II'],
  'Intervención fonoaudiológica en el déficit cognitivo y la parálisis cerebral': ['Desarrollo del lenguaje y la comunicación', 'Neurología II', 'Alteraciones fonoodontoestomatognaticas – Intervención Fonoaudiológica'],
  'Alteraciones del lenguaje y la comunicación en niños – Diagnostico e intervención fonoaudiológica': ['Desarrollo del lenguaje y la comunicación'],
  'Práctica Profesional Supervisada I (PPS I)': ['Desarrollo del lenguaje y la comunicación', 'MID II'],
  'Práctica Profesional Supervisada II (PPS II)': ['PPS I'],
  'OPTATIVA I': ['Desarrollo del lenguaje y la comunicación', 'Alteraciones fonoodontoestomatognaticas – Intervención Fonoaudiológica', 'Alteraciones vocales – Intervención fonoaudiológica', 'Audiología II'],
  'OPTATIVA II': ['Desarrollo del lenguaje y la comunicación', 'Alteraciones fonoodontoestomatognaticas – Intervención Fonoaudiológica', 'Alteraciones vocales – Intervención fonoaudiológica', 'Audiología II'],
  'Teología Dogmática II': ['Teología Dogmática I'],
  'Neurología II': ['Neurología I'],
  'Abordaje fonoaudiológico en la discapacidad auditiva': ['Audiología II', 'Neurología II'],
  'Ejercicio Profesional': ['Abordaje fonoaudiológico en la discapacidad auditiva', 'Intervención fonoaudiológica en el déficit cognitivo y la parálisis cerebral', 'PPS II'],
  'Alteraciones del lenguaje en adultos – Diagnóstico y abordaje fonoaudiológico': ['Alteraciones del lenguaje y la comunicación en niños – Diagnostico e intervención fonoaudiológica'],
  'Teología Moral y Doctrina Social de la Iglesia': ['Teología Dogmática II'],
  'Taller de Trabajo Integrador Final': ['Metodología de la Investigación'],
  'Trabajo Integrador Final': ['Ejercicio Profesional', 'Taller de Trabajo Integrador Final']
};

// Estado de materias completadas
const completadas = {};

const contenedor = document.getElementById('malla');

// Crear los elementos visuales
for (let nombre in materias) {
  completadas[nombre] = false;

  const div = document.createElement('div');
  div.className = 'materia bloqueada';
  div.innerText = nombre;
  div.onclick = () => toggle(nombre, div);
  contenedor.appendChild(div);
}

// Alternar estado y actualizar
function toggle(nombre, elem) {
  if (elem.classList.contains('bloqueada')) {
    alert("Debes completar las correlativas primero.");
    return;
  }

  completadas[nombre] = !completadas[nombre];
  elem.classList.toggle('completada', completadas[nombre]);
  actualizarBloqueos();
}

// Lógica de desbloqueo
function actualizarBloqueos() {
  const divs = document.querySelectorAll('.materia');

  divs.forEach(div => {
    const nombre = div.innerText;
    const requisitos = materias[nombre] || [];

    const habilitada = requisitos.every(r => completadas[r]);
    if (!completadas[nombre]) {
      div.classList.toggle('bloqueada', !habilitada);
    }
  });
}

actualizarBloqueos();

