import type { ButtonHTMLAttributes } from "react";

type DefaultButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function DefaultButton({ children, ...rest }: DefaultButtonProps) {
  return (
    <button {...rest} style={styles.button}>
      {children}
    </button>
  );
}

const styles = {
  button: {
    width: "100%",
    height: "3rem",
    backgroundColor: "var(--primary-color)",
    border: "none",
    borderRadius: "0.5rem",
    fontWeight: "bold",
    color: "white",
    cursor: "pointer",
    transition: "0.3s",
  },
};