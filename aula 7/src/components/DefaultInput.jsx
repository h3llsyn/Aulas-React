import { Mail, Lock } from "lucide-react";

export function DefaultInput({ type, placeholder, icon }) {
  const Icon = icon === "mail" ? Mail : Lock;

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      border: "0.0625rem solid var(--text-muted)",
      borderRadius: "0.5rem",
      padding: "0 1rem",
      height: "3rem"
    }}>
      <Icon size={20} style={{ marginRight: "0.5rem" }} />

      <input
        type={type}
        placeholder={placeholder}
        style={{
          background: "transparent",
          border: "none",
          outline: "none",
          color: "var(--text-main)",
          width: "100%"
        }}
      />
    </div>
  );
}