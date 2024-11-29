// JSON con las preguntas
const questions = [
        {
          "id": 1,
          "question": "¿Qué técnica permite evadir sistemas de detección al fragmentar paquetes de red?",
          "options": ["Fragmentación de IP", "Spoofing de DNS", "Ataque DDoS", "Criptografía simétrica"],
          "answer": "Fragmentación de IP",
          "explanation": "La fragmentación de IP permite dividir paquetes grandes en fragmentos más pequeños. Esto puede utilizarse para evadir sistemas de detección que no ensamblan correctamente los fragmentos."
        },
        {
          "id": 2,
          "question": "¿Qué es un ataque de fuerza bruta?",
          "options": [
            "Un ataque para corromper datos en una base de datos",
            "Un método de descifrado mediante prueba de todas las combinaciones posibles",
            "Una técnica de inyección SQL",
            "Un ataque que interrumpe el servicio de una red"
          ],
          "answer": "Un método de descifrado mediante prueba de todas las combinaciones posibles",
          "explanation": "Un ataque de fuerza bruta prueba todas las combinaciones posibles de contraseñas o claves hasta encontrar la correcta. Es lento, pero efectivo si no hay medidas de seguridad adicionales."
        },
        {
          "id": 3,
          "question": "¿Qué protocolo se utiliza para asegurar la transferencia de archivos en red?",
          "options": ["FTP", "HTTPS", "SFTP", "SMTP"],
          "answer": "SFTP",
          "explanation": "SFTP (Secure File Transfer Protocol) utiliza un canal cifrado para transferir archivos, a diferencia de FTP que no es seguro por defecto."
        },
        {
          "id": 4,
          "question": "¿Qué es el hashing y cuál es su propósito en ciberseguridad?",
          "options": [
            "Es una forma de cifrado para proteger datos",
            "Es un proceso para convertir datos en un código único de longitud fija, usado para integridad",
            "Es una técnica para enmascarar direcciones IP",
            "Es un método de autenticación de múltiples factores"
          ],
          "answer": "Es un proceso para convertir datos en un código único de longitud fija, usado para integridad",
          "explanation": "El hashing convierte datos en una huella digital única y de tamaño fijo. Se usa principalmente para verificar que los datos no han sido modificados."
        },
        {
          "id": 5,
          "question": "¿Cuál es el propósito de un honeypot en ciberseguridad?",
          "options": [
            "Bloquear ataques de red automáticamente",
            "Atraer a los atacantes para estudiarlos",
            "Proteger contraseñas en un sistema seguro",
            "Ofrecer autenticación segura para usuarios"
          ],
          "answer": "Atraer a los atacantes para estudiarlos",
          "explanation": "Un honeypot es un sistema diseñado para parecer vulnerable, atrayendo atacantes con el fin de monitorearlos y aprender de sus métodos."
        },
        {
          "id": 6,
          "question": "¿Qué significa el principio de menor privilegio?",
          "options": [
            "Asignar permisos básicos para todos los usuarios por defecto",
            "Garantizar acceso total a los administradores del sistema",
            "Limitar los privilegios de los usuarios y aplicaciones al mínimo necesario",
            "Evitar que usuarios compartan contraseñas"
          ],
          "answer": "Limitar los privilegios de los usuarios y aplicaciones al mínimo necesario",
          "explanation": "El principio de menor privilegio asegura que cada usuario o sistema tenga solo los permisos necesarios para realizar sus tareas, reduciendo el riesgo de abuso o errores."
        },
        {
          "id": 7,
          "question": "¿Qué tipo de ataque utiliza software malicioso para cifrar datos y exigir un rescate?",
          "options": ["Ransomware", "Spyware", "Phishing", "Troyano"],
          "answer": "Ransomware",
          "explanation": "El ransomware cifra los datos de una víctima y exige un pago para liberar la clave de descifrado, afectando tanto a usuarios individuales como a organizaciones."
        },
        {
          "id": 8,
          "question": "¿Qué herramienta se usa comúnmente para realizar un análisis de vulnerabilidades?",
          "options": ["Wireshark", "Metasploit", "Nmap", "Nessus"],
          "answer": "Nessus",
          "explanation": "Nessus es una herramienta que escanea sistemas y redes en busca de vulnerabilidades conocidas, ayudando a mitigar riesgos antes de que sean explotados."
        },
        {
          "id": 9,
          "question": "¿Qué significa la técnica de 'sandboxing'?",
          "options": [
            "Ejecutar procesos en un entorno aislado para evitar daños al sistema principal",
            "Compartir claves de cifrado de manera segura",
            "Dividir una red en múltiples subredes",
            "Utilizar redes privadas virtuales para proteger conexiones"
          ],
          "answer": "Ejecutar procesos en un entorno aislado para evitar daños al sistema principal",
          "explanation": "El sandboxing permite ejecutar software o procesos en un entorno controlado y aislado, previniendo que afecten el sistema principal si son maliciosos."
        },
        {
          "id": 10,
          "question": "¿Cuál es la función principal de un firewall?",
          "options": [
            "Monitorear y controlar el tráfico entrante y saliente según reglas predefinidas",
            "Cifrar comunicaciones de red",
            "Proteger contraseñas de usuarios",
            "Realizar análisis forense en incidentes"
          ],
          "answer": "Monitorear y controlar el tráfico entrante y saliente según reglas predefinidas",
          "explanation": "Un firewall actúa como un filtro entre una red interna y externa, permitiendo o bloqueando tráfico según reglas específicas para proteger el sistema."
        },
        {
          "id": 11,
          "question": "¿Qué es un ataque de día cero?",
          "options": [
            "Un ataque que aprovecha vulnerabilidades desconocidas",
            "Una técnica para saturar servidores",
            "Un método de phishing avanzado",
            "Un tipo de malware diseñado para espionaje"
          ],
          "answer": "Un ataque que aprovecha vulnerabilidades desconocidas",
          "explanation": "Un ataque de día cero explota vulnerabilidades que aún no han sido descubiertas o corregidas por los desarrolladores."
        },
        {
          "id": 12,
          "question": "¿Qué hace el protocolo HTTPS?",
          "options": [
            "Garantiza que los datos de red estén encriptados",
            "Asegura la autenticación de usuarios",
            "Permite transferencias de archivos grandes",
            "Filtra el tráfico web malicioso"
          ],
          "answer": "Garantiza que los datos de red estén encriptados",
          "explanation": "HTTPS utiliza SSL/TLS para cifrar la comunicación entre el navegador y el servidor, protegiendo datos sensibles como contraseñas y tarjetas de crédito."
        },
        {
          "id": 13,
          "question": "¿Qué significa la técnica de 'hardening'?",
          "options": [
            "Fortalecer sistemas eliminando vulnerabilidades conocidas",
            "Implementar políticas de contraseñas más estrictas",
            "Auditar redes en busca de intrusiones",
            "Bloquear direcciones IP sospechosas"
          ],
          "answer": "Fortalecer sistemas eliminando vulnerabilidades conocidas",
          "explanation": "El hardening implica configurar sistemas para reducir su superficie de ataque, eliminando servicios innecesarios y aplicando parches de seguridad."
        },
        {
          "id": 14,
          "question": "¿Qué es un ataque de tipo MITM?",
          "options": [
            "Un ataque de inyección de código",
            "Un ataque de intercepción de datos entre dos partes",
            "Un tipo de malware basado en navegador",
            "Un método para secuestrar sesiones web"
          ],
          "answer": "Un ataque de intercepción de datos entre dos partes",
          "explanation": "El ataque MITM (Man-In-The-Middle) intercepta y modifica datos entre dos partes sin que ellas lo sepan, comprometiendo la confidencialidad."
        },
        {
          "id": 15,
          "question": "¿Qué herramienta se usa para análisis forense digital?",
          "options": ["Autopsy", "Nessus", "Burp Suite", "Wireshark"],
          "answer": "Autopsy",
          "explanation": "Autopsy es una herramienta de análisis forense digital que ayuda a examinar discos duros y extraer evidencias tras un incidente."
        },
        {
          "id": 16,
          "question": "¿Qué es el cifrado asimétrico?",
          "options": [
            "Un método de cifrado que usa la misma clave para cifrar y descifrar",
            "Un método de cifrado que usa un par de claves pública y privada",
            "Un algoritmo para generar hashes únicos",
            "Un protocolo de comunicación cifrada"
          ],
          "answer": "Un método de cifrado que usa un par de claves pública y privada",
          "explanation": "El cifrado asimétrico utiliza una clave pública para cifrar los datos y una clave privada para descifrarlos, lo que lo hace ideal para comunicaciones seguras."
        }
  ];

let correctAnswers = 0; // Respuestas correctas
let totalQuestions = 10; // Total de preguntas seleccionadas


  // Mezcla las preguntas y selecciona 10
function getRandomQuestions(totalQuestions) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, totalQuestions);
  }
  
  // Obtener 10 preguntas aleatorias
  const selectedQuestions = getRandomQuestions(10);
  
  // Variables para controlar el flujo del quiz
  let currentQuestionIndex = 0;
  
  // Elementos del DOM
  const questionContainer = document.getElementById("question-container");
  const nextButton = document.getElementById("next-question");
  
  // Función para mostrar una pregunta
  function displayQuestion() {
    const questionData = selectedQuestions[currentQuestionIndex];


    // Limpiar contenedor
    questionContainer.innerHTML = "";
  
    // Crear elemento de la pregunta
    const questionElement = document.createElement("h2");
    questionElement.textContent = `${currentQuestionIndex + 1}. ${questionData.question}`;
    questionContainer.appendChild(questionElement);
  
    // Crear opciones de respuesta
    questionData.options.forEach((option) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.className = "option";
      optionButton.onclick = () => handleAnswer(option, questionData.answer, questionData.explanation);
      questionContainer.appendChild(optionButton);
    });
  
    // Deshabilitar el botón de siguiente
    nextButton.disabled = true;
  }
  
  function handleAnswer(selectedOption, correctAnswer, explanation) {
    const options = document.querySelectorAll(".option");
    options.forEach((btn) => {
      btn.disabled = true;
      if (btn.textContent === correctAnswer) {
        btn.style.backgroundColor = "green";
      } else if (btn.textContent === selectedOption) {
        btn.style.backgroundColor = "red";
      }
    });
  
    // Verificar si la respuesta es correcta
    if (selectedOption === correctAnswer) {
      correctAnswers++;
    }
  
    // Mostrar la explicación
    const explanationElement = document.createElement("p");
    explanationElement.textContent = `Explicación: ${explanation}`;
    explanationElement.style.display = "none";
  
    const showExplanationButton = document.createElement("button");
    showExplanationButton.textContent = "Mostrar Explicación";
    showExplanationButton.onclick = () => {
      explanationElement.style.display = "block";
      showExplanationButton.style.display = "none";
    };
  
    questionContainer.appendChild(showExplanationButton);
    questionContainer.appendChild(explanationElement);
  
    // Habilitar el botón de siguiente
    nextButton.disabled = false;
  }
  
  
  nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
      displayQuestion();
    } else {
      // Calcular la calificación
      const score = Math.round((correctAnswers / totalQuestions) * 100);
  
      // Mostrar la calificación
      questionContainer.innerHTML = `
        <h2>¡Has completado las preguntas!</h2>
        <p>Tu calificación es: <strong>${score}/100</strong></p>
        <p>Respuestas correctas: ${correctAnswers}</p>
        <p>Respuestas incorrectas: ${totalQuestions - correctAnswers}</p>
      `;
      nextButton.style.display = "none";
    }
  });
  
  
  // Mostrar la primera pregunta al cargar la página
  displayQuestion();
  