/* Estilos generales */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    font-size: 16px; /* 1rem = 16px */
    line-height: 1.6;
    background-color: #f8f9fa;
    color: #333;
}

h1, h2, h3 {
    color: #333;
}

/* Navegación (header y menú de hamburguesa) */
header {
    background-color: #333;
    color: white;
    padding: 1rem;
    display: flex;
    justify-content: space-evenly;
    align-CONTENT: center;
}

header .logo {
    font-size: 1.75rem;
    font-weight: bold;
}

nav ul {
    list-style: none;
    display: flex;
}

nav ul li {
    margin-left: 1.5rem;
}

nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;
}

nav ul li a:hover {
    color: #f39c12;
}

/* Menú de hamburguesa */
.menu-icon {
    display: none;
    cursor: pointer;
    font-size: 2rem;
}

.menu-toggle {
    display: none;
}

/* Estilos para dispositivos móviles */
@media (max-width: 768px) {
    nav ul {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 60px;
        right: 0;
        width: 100%;
        background-color: #333;
        text-align: center;
        z-index: 1000;
    }

    nav ul li {
        margin: 1.5rem 0;
    }

    /* Mostrar menú cuando está activado */
    .menu-toggle:checked + .menu-icon + .menu {
        display: flex;
    }

    /* Mostrar icono de hamburguesa en pantallas pequeñas */
    .menu-icon {
        display: block;
    }
}

/* Sección de inicio */
.section {
    padding: 3rem 2rem;
    text-align: center;
}

#inicio h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
}

#inicio p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

#inicio img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
}

/* Sección del menú */
#menu {
    background-color: #ffffff;
    padding: 2rem 1rem;
    text-align: center;
}

#menu h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #e74c3c;
}

.menu-item {
    background-color: #f8f9fa;
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.menu-item h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.menu-item p {
    font-size: 1rem;
    color: #666;
}

/* Sección de contacto */
#contacto {
    background-color: #333;
    color: white;
    padding: 3rem 1rem;
    text-align: center;
}

#contacto h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
}

form {
    max-width: 500px;
    margin: 0 auto;
    text-align: left;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 1rem;
}

input, textarea {
    width: 100%;
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
}

button {
    width: 100%;
    padding: 1rem;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #c0392b;
}

#mensaje-confirmacion {
    margin-top: 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: #2ecc71;
}

/* Footer (opcional para el futuro) */
footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1rem;
    font-size: 0.9rem;
}
