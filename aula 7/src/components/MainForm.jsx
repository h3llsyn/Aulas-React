export function MainForm({ children }) {
  return (
    <div style={{
      maxWidth: "25rem",
      width: "100%",
      padding: "2.5rem",
      borderRadius: "0.75rem",
      backgroundColor: "var(--bg-card)",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem"
    }}>
      {children}
    </div>
  );
}