import type { Course } from "../types/Course";
import "./CourseItem.css";

interface Props {
  course: Course;
  onDelete: () => void;
  onEdit: () => void;
}

export default function CourseItem({ course, onDelete, onEdit }: Props) {
  return (
    <div className="list-item">
      <span>{course.nome}</span>
      <span>{course.periodo}</span>

      <div>
        <button onClick={onEdit}>✏️</button>
        <button onClick={onDelete}>✖</button>
      </div>
    </div>
  );
}