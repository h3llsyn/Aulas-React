export function DefaultButton({ text }) {
  return (
    <button
      type="submit"
      style={{
        width: "100%",
        height: "3rem",
        backgroundColor: "var(--primary-color)",
        border: "none",
        borderRadius: "0.5rem",
        fontWeight: "bold",
        color: "#fff",
        cursor: "pointer",
        transition: "0.3s"
      }}
      onMouseOver={(e) => e.target.style.backgroundColor = "var(--secondary-color)"}
      onMouseOut={(e) => e.target.style.backgroundColor = "var(--primary-color)"}
    >
      {text}
    </button>
  );
}