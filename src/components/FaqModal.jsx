import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "../styles/Footer.css"; // tus estilos externos

const preguntas = [
    {
        pregunta: "¿Cómo puedo comunicarme para hacer consultas?",
        respuesta:
            "Podés escribirnos por email a carrrrsuarez@gmail.com o enviarnos un mensaje al +54 1150050556. ¡Estamos para ayudarte!",
    },
    {
        pregunta: "¿Cuáles son los medios de pago?",
        respuesta:
            "Aceptamos pagos con Mercado Pago a traves de tarjeta de débito/crédito y transferencias bancarias.",
    },
    {
        pregunta: "¿Cómo funcionan los envíos?",
        respuesta:
            "Realizamos envíos a todo el país por Andreani. También podés retirar por Zona Norte, Buenos Aires.",
    },
    {
        pregunta: "¿Cómo puedo comprar?",
        respuesta:
            "Simple! Agregás productos al carrito, completás tus datos y generás el pedido. Luego nos enviás el comprobante por WhatsApp.",
    },
    {
        pregunta: "Realicé una compra pero olvidé enviar el comprobante, ¿qué hago?",
        respuesta:
            "No te preocupes. Podés enviarnos el comprobante por WhatsApp al +54 1150050556 para poder avanzar con el pedido.",
    },
    {
        pregunta: "¿Cuánto tarda en llegar mi pedido?",
        respuesta:
            "El envío puede demorar entre 3 a 7 días hábiles según la localidad. Te mantenemos al tanto del seguimiento por mensaje directo.",
    },
];

function FaqModal({ onClose }) {
    const [modalRoot, setModalRoot] = useState(null);

    useEffect(() => {
        let root = document.getElementById("modal-root");

        if (!root) {
            root = document.createElement("div");
            root.id = "modal-root";
            document.body.appendChild(root);
        }

        setModalRoot(root);

        document.body.classList.add("modal-abierto");

        return () => {
            document.body.classList.remove("modal-abierto");

            // Solo removemos el nodo si fue creado por este efecto
            if (root && root.parentNode === document.body && root.id === "modal-root") {
                document.body.removeChild(root);
            }
        };
    }, []);

    const [abierto, setAbierto] = useState(null);
    const toggle = (i) => {
        setAbierto(abierto === i ? null : i);
    };

    if (!modalRoot) return null;

    return createPortal(
        <div
            className="faq-backdrop"
            onClick={(e) => {
                if (e.target.classList.contains("faq-backdrop")) onClose();
            }}
        >
            <div className="faq-modal fade-in">
                <button className="close-btn" onClick={onClose}>
                    ×
                </button>
                <h2>Preguntas Frecuentes</h2>
                <div className="faq-list">
                    {preguntas.map((item, i) => (
                        <div key={i} className="faq-item">
                            <button
                                className={`faq-question ${abierto === i ? "abierta" : ""}`}
                                onClick={() => toggle(i)}
                            >
                                {item.pregunta}
                            </button>
                            <div
                                className={`faq-answer ${abierto === i ? "visible" : ""}`}
                                style={{
                                    maxHeight: abierto === i ? "300px" : "0",
                                    opacity: abierto === i ? 1 : 0,
                                }}
                            >
                                <p>{item.respuesta}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>,
        modalRoot
    );
}

export default FaqModal;
