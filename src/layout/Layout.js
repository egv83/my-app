import React from "react";
import Menu from "../menu/Menu";

import '../style/Layout.css';

// Componente del panel lateral para el menú
const Sidebar = () => {
    return (
      <div className="sidebar">
        {/* Contenido del menú */}
        <Menu /> {/* Usando el componente de menú */}
      </div>
    );
  };
  
  // Componente de la sección superior
  const Header = () => {
    return (
      <div className="header">
        {/* Contenido del header */}
        <h1>Mi App</h1>
      </div>
    );
  };
  
  // Componente del contenedor principal
  const MainContent = () => {
    return (
      <div className="main-content">
        {/* Contenido principal */}
        <h3>Contenido principal</h3>
        {/* ... */}
      </div>
    );
  };

  const Footer = () => {
    return (
      <div className="footer">
        {/* Contenido del footer */}
        <p>Este es el footer</p>
      </div>
    );
  };
  
  // Componente principal que une todos los elementos
  const Layout = () => {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <Sidebar />  
          <MainContent />
        </div>
        <Footer />
      </div>
    );
  };
  
  export default Layout;