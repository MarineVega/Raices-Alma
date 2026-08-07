import { X } from "lucide-react";
import { useEffect } from "react";

export default function ModalImagen({ imagen, onClose }) {

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  if (!imagen) return null;

  return (
    <div
      className="modal-imagen-overlay"
      onClick={onClose}
    >
      <div
        className="modal-imagen-contenedor"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-imagen-cerrar"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <X />
        </button>

        <img
          src={imagen}
          alt="Captura del testimonio"
          className="modal-imagen"
        />
      </div>
    </div>
  );
}