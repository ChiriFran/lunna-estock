import React from "react";

const Spinner = () => (
    <div style={{
        display: "inline-block",
        width: "40px",
        height: "40px",
        border: "4px solid rgba(227, 47, 173, 0.1)",
        borderTopColor: "var(--color-principal)",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        margin: "auto"
    }} />
);

export default Spinner;
