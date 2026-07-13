import { ArrowRight } from "lucide-react";

//export const Boton = ({ children, variant = "primary", icon: Icon, className = "", ...props }) => {  

export default function Boton ({ 
  children, 
  variant = "primary", 
  icon: Icon, 
  className = "",
  href,
  ...props 
}) {

  // Creamos el nombre de la clase dinámica: boton-primary, boton-secondary, etc.
  const claseVariante = `boton-${variant}`;

  // 👉 Si tiene href, renderiza un <a>
  if (href) {
    return (
      <a 
        href={href}
        className={`boton-base ${claseVariante} ${className}`}
        {...props}
      >
        {children}
        {Icon && <Icon className="boton-icono" />}
      </a>
    );
  }

  // 👉 Si no, renderiza <button>
  return (
    <button 
      className={`boton-base ${claseVariante} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon className="boton-icono" />}
    </button>
  );
 
};