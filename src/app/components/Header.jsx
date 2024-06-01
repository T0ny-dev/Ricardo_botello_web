import "./Header.css"

function Header() {
  return (
    <div className="navbar">
      <img src="/logo.png" alt="logotipo" className="logo" />
      <ul>
        <a href="/"><li>Inicio</li></a>
        <a href="#"><li>Galeria</li></a>
        <a href="#"><li>Conferencias y Talleres</li></a>
        <a href="#"><li>Libros Digitales</li></a>
        <a href="#"><li>Ricardo Botello</li></a>
      </ul>
      <button className="button_primary_header">Contacto</button>
    </div>
  )
}

export default Header;