```markdown
# 🛡️ Guía de Organización y Seguridad en Proyectos PHP

[![PHP Version](https://img.shields.io/badge/PHP-8.0+-777BB4?style=for-the-badge&logo=php)](https://www.php.net/)
[![License](https://img.shields.io/badge/License-Academic%20Use-blue?style=for-the-badge)](LICENSE)
[![Visual](https://img.shields.io/badge/Includes-Mermaid%20Diagrams-orange?style=for-the-badge)]()

Material de apoyo oficial para estudiantes de Ingeniería Informática. Esta guía está diseñada para ayudarte a dar el salto desde los ejercicios básicos de programación hacia el desarrollo de aplicaciones web **profesionales, seguras y organizadas**, explicando cada concepto paso a paso con analogías del mundo real y diagramas visuales.

---

## 📌 ¿Qué hace diferente a esta guía?

A diferencia de la documentación técnica tradicional, este material está pensado pedagógicamente para un primer curso de desarrollo web backend:

- 🧠 **Aprende con analogías:** Conceptos como MVC, Singleton o Consultas Preparadas se explican usando ejemplos cotidianos (oficinas, carteros, líneas de ensamblaje).
- 📊 **Diagramas visuales interactivos:** Cada módulo incluye diagramas de flujo (Mermaid.js) para que *veas* cómo viajan los datos en tu aplicación.
- 🔄 **Del error a la solución:** Primero te mostramos el código "ingenuo" (el que solemos escribir al principio), explicamos por qué falla o es peligroso, y luego construimos juntos la solución profesional.
- 🎯 **Enfoque práctico:** Cada módulo termina con una "Regla de Oro" y un ejercicio sugerido para aplicar lo aprendido de inmediato.

---

## 🚀 Inicio Rápido (Para Estudiantes)

Sigue estos pasos para configurar tu entorno de trabajo y comenzar a aprender:

1. **Clona este repositorio** en tu carpeta de servidor local (ej. `htdocs` en XAMPP, `www` en Laragon, o tu entorno Docker):
   ```bash
   git clone https://github.com/profcs-clases/guia-php-seguro.git
   cd guia-php-seguro
   ```

2. **Genera la estructura base de tu proyecto:**  
   Ejecuta el script incluido. Esto creará automáticamente las carpetas `app`, `config`, `public` y `storage` con archivos base funcionales y seguros.
   ```bash
   php generador_proyecto.php
   ```
   *(Nota: Si prefieres la interfaz gráfica, simplemente abre `http://localhost/guia-php-seguro/generador_proyecto.php` en tu navegador).*

3. **Explora la guía interactiva:**  
   Abre el archivo `index.html` en tu navegador web (Chrome, Firefox, Edge). ¡Disfruta del modo oscuro, el código resaltado y los diagramas animados!

---

## 📂 Estructura de este Repositorio

```text
📦 guia-php-seguro
 ┣ 📄 README.md                 # 📖 Este archivo de documentación
 ┣ 📄 generador_proyecto.php    # 🪄 Script mágico para crear tu estructura base
 ┣ 📄 index.html                # 🏗️ Módulo 1: Anatomía y Organización del Proyecto
 ┣ 📄 base-datos.html           # 🗄️ Módulo 2: Base de Datos Segura (PDO y Singleton)
 ┣ 📄 seguridad.html            # 🔐 Módulo 3: Autenticación, Hashing y Protección
 ┣ 📄 arquitectura.html         # ⚙️ Módulo 4: Validación, Middleware y Debugging
 ┣ 📄 recursos.html             # ✅ Módulo 5: Checklist de Producción y Glosario
 ┣ 📄 styles.css                # 🎨 Hoja de estilos (con soporte modo oscuro/claro)
 ┗ 📄 script.js                 # 🧠 Lógica de interfaz y renderizado de diagramas
```

---

## 📚 Requisitos Previos

Para sacar el máximo provecho de este material, es ideal que ya tengas nociones básicas de:
- ✅ Programación Orientada a Objetos en PHP (Clases, métodos, propiedades).
- ✅ HTML semántico, CSS básico y funcionamiento de formularios.
- ✅ Concepto básico de qué es una base de datos y una tabla.

**Requisitos técnicos:**
- PHP 8.0 o superior (recomendado 8.2+).
- Servidor web local (Apache/Nginx) con la extensión `pdo_mysql` habilitada.

---

## ⚠️ Nota sobre Integridad Académica

> **Estimado estudiante:** Esta guía es una herramienta de **aprendizaje**, no un banco de código para copiar y pegar ciegamente. Los fragmentos de código (como la clase `Database` o `Validator`) están diseñados para que los leas, los entiendas y los adaptes a la lógica de tu propio proyecto. 
> 
> Copiar código de seguridad sin comprender *por qué* funciona (por ejemplo, no entender qué hace `password_hash` o `prepare`) te dejará vulnerable y será evidente en la defensa de tu proyecto. ¡Confiamos en tu capacidad para aprender y construir!

---

## 🌐 Visualización en Línea (GitHub Pages)

¿No quieres descargar nada todavía? Puedes navegar por la guía interactiva directamente desde tu navegador haciendo clic en el siguiente enlace:

🔗 **[Ver Guía Interactiva en GitHub Pages](https://profcs-clases.github.io/guia-php-seguro3/index.html)**

*(Los diagramas y el modo oscuro funcionan perfectamente en la versión web).*

---

## 🤝 Soporte y Dudas

- ¿Encontraste un error tipográfico o un enlace roto? ¡Abre un **Issue** en este repositorio!
- ¿Tienes dudas sobre un concepto? Revisa el glosario en el Módulo 5 o consulta los foros de la cátedra.

---

## 📜 Licencia

Este material es de uso académico y educativo. Se permite su modificación, adaptación y distribución siempre que se mantenga la atribución al autor original (`profcs-clases`) y a la institución educativa.

_Desarrollado con 💙 para formar a la próxima generación de ingenieros de software._
```
