import { useState, useEffect } from "react";
import type { Course, Periodo } from "../types/Course";
import "./CourseForm.css";

interface Props {
  onSave: (course: Course) => void;
  editingCourse: Course | null;
}

export default function CourseForm({ onSave, editingCourse }: Props) {
  const [nome, setNome] = useState("");
  const [periodo, setPeriodo] = useState<Periodo>("Diurno");

  useEffect(() => {
    if (editingCourse) {
      setNome(editingCourse.nome);
      setPeriodo(editingCourse.periodo);
    }
  }, [editingCourse]);

  const handleSubmit = () => {
    if (!nome) return;

    onSave({ nome, periodo });

    setNome("");
    setPeriodo("Diurno");
  };

  return (
    <div className="form-container">
      <h2>
        {editingCourse ? "Editar Curso" : "Cadastrar novo Curso"}
      </h2>

      <label>Nome do Curso</label>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <label>Período</label>
      <select
        value={periodo}
        onChange={(e) => setPeriodo(e.target.value as Periodo)}
      >
        <option value="Manhã">Manhã</option>
        <option value="Tarde">Tarde</option>
        <option value="Noite">Noite</option>
      </select>

      <button onClick={handleSubmit}>
        {editingCourse ? "Atualizar Curso" : "Inserir Curso"}
      </button>
    </div>
  );
}