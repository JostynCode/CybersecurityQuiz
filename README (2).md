
# Quiz de Ciberseguridad  

Un proyecto interactivo para evaluar tus conocimientos avanzados en ciberseguridad. Este quiz selecciona **10 preguntas aleatorias** de una base predefinida, permitiendo una experiencia dinámica en cada ejecución. Cada pregunta incluye opciones múltiples, una explicación detallada de la respuesta correcta y, al finalizar, el sistema calcula una **calificación del 1 al 100** para medir tu desempeño. 

---

## **Características Principales**
1. **Interfaz dinámica:** 
   - Muestra una pregunta a la vez con opciones múltiples.  
   - El usuario puede visualizar la explicación de la respuesta al presionar un botón.  

2. **Calificación automática:** 
   - Calcula el puntaje al finalizar el quiz basado en el número de respuestas correctas.  

3. **Aleatoriedad:**  
   - Selecciona 10 preguntas aleatorias de un banco de preguntas más amplio, asegurando una experiencia única cada vez.  

4. **Seguimiento del desempeño:**  
   - Muestra el total de respuestas correctas e incorrectas al final.  

---

## **Requisitos previos**
- **Conocimientos básicos de desarrollo web** para personalizar o extender el proyecto.
- Un navegador web moderno para ejecutar el código. 

---

## **Cómo usar el proyecto**
1. **Descargar los archivos necesarios:**  
   Asegúrate de incluir:  
   - `index.html`: Contiene la estructura básica del quiz.  
   - `style.css`: Maneja el diseño y estilos del quiz.  
   - `script.js`: Implementa la lógica del quiz.  

2. **Abrir en el navegador:**  
   Simplemente abre el archivo `index.html` en cualquier navegador compatible.  

3. **Responde las preguntas:**  
   - Selecciona una opción por pregunta.  
   - Puedes presionar el botón **"Mostrar Explicación"** para entender la lógica detrás de cada respuesta.  

4. **Consulta tu calificación:**  
   Una vez finalizado el quiz, revisa tu desempeño. El puntaje será mostrado en formato del 1 al 100 junto con un desglose de tus respuestas correctas e incorrectas.  

---

## **Consideraciones y cuidados**
### **1. Código fuente**
- **Evitar modificaciones incorrectas:**  
  Modificar el JSON de preguntas debe hacerse con cuidado para no alterar su estructura. Por ejemplo:  
  ```json
  {
    "id": 1,
    "question": "¿Qué técnica permite evadir sistemas de detección al fragmentar paquetes de red?",
    "options": ["Fragmentación de IP", "Spoofing de DNS", "Ataque DDoS", "Criptografía simétrica"],
    "answer": "Fragmentación de IP",
    "explanation": "La fragmentación de IP permite dividir paquetes grandes en fragmentos más pequeños..."
  }
  ```  
  Asegúrate de que cada pregunta tenga:  
  - Un **id único**.  
  - Cuatro opciones en el arreglo `options`.  
  - Una única `answer` que coincida exactamente con una de las opciones.  
  - Una `explanation` clara y concisa.  

### **2. Seguridad**
- **Evitar inyección de código:**  
  Aunque este proyecto es local y no interactúa con servidores, evita usar datos externos sin validación adecuada para prevenir vulnerabilidades como la inyección de código.  

### **3. Ampliación**
- Si deseas ampliar el número de preguntas, simplemente agrega nuevas entradas al arreglo `questions` en `script.js`.  

### **4. Compatibilidad**
- **Navegadores recomendados:**  
  Google Chrome, Mozilla Firefox o cualquier navegador compatible con ES6.  

---

## **Estructura del proyecto**
```plaintext
📁 Quiz de Ciberseguridad
├── 📄 index.html  // Contiene el HTML base del quiz
├── 📄 style.css   // Maneja los estilos visuales
├── 📄 script.js   // Controla la lógica del quiz y calificaciones
└── 📄 README.md   // Explicación del proyecto
```

---

## **Extensiones sugeridas**
1. **Temporizador**: Agrega un límite de tiempo para cada pregunta.  
2. **Modo nocturno**: Cambia el tema visual para facilitar el uso en ambientes oscuros.  
3. **Soporte multi-idioma**: Convierte el quiz en un proyecto internacionalizable.  

---

## **Créditos**
Este proyecto fue diseñado para ser educativo e interactivo, ayudando a fortalecer los conocimientos en ciberseguridad mientras se aprende sobre el desarrollo web.  

¡Diviértete aprendiendo y desafiándote a ti mismo! 🚀
