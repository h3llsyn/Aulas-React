import type { ReactNode } from "react";

type MainFormProps = {
  children: ReactNode;
};

export function MainForm({ children }: MainFormProps) {
  return (
    <div style={styles.card}>
      {children}
    </div>
  );
}

const styles = {
  card: {
    maxWidth: "25rem",
    width: "100%",
    padding: "2.5rem",
    borderRadius: "0.75rem",
    backgroundColor: "var(--bg-card)",
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.5rem",
  },
};