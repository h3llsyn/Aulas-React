import type { ReactNode, InputHTMLAttributes } from "react";

type DefaultInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode;
};

export function DefaultInput({ icon, ...rest }: DefaultInputProps) {
  return (
    <div style={styles.wrapper}>
      <span style={styles.icon}>{icon}</span>
      <input {...rest} style={styles.input} />
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    border: "0.0625rem solid var(--text-muted)",
    borderRadius: "0.5rem",
    padding: "0 0.75rem",
    height: "3rem",
  },
  icon: {
    marginRight: "0.5rem",
    color: "var(--text-muted)",
    display: "flex",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
    color: "var(--text-main)",
  },
};