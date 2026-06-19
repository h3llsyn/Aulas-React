import { useState } from "react";
import type { Course } from "../types/Course";
import CourseItem from "./CourseItem";
import "./CourseList.css";

interface Props {
  courses: Course[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
}

export default function CourseList({ courses, onDelete, onEdit }: Props) {
  const [search, setSearch] = useState("");

  const filtered = courses.filter((c) =>
    c.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="list-container">
      <h2>Lista de Cursos</h2>

      <input
        className="search"
        placeholder="Buscar Curso"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="list-header">
        <span>Curso</span>
        <span>Período</span>
        <span>Ações</span>
      </div>

      {filtered.map((course, index) => (
        <CourseItem
          key={index}
          course={course}
          onDelete={() => onDelete(index)}
          onEdit={() => onEdit(index)}
        />
      ))}
    </div>
  );
}