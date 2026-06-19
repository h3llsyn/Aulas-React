import { useState } from "react";
import type { Course } from "../types/Course";
import Header from "../components/Header";
import CourseForm from "../components/CourseForm";
import CourseList from "../components/CourseList";
import "./Home.css";

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([
    { nome: "Biologia", periodo: "Noturno" }
  ]);

  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const saveCourse = (course: Course) => {
    if (editingIndex !== null) {
      setCourses((prev) =>
        prev.map((c, i) => (i === editingIndex ? course : c))
      );
      setEditingIndex(null);
    } else {
      setCourses((prev) => [...prev, course]);
    }
  };

  const deleteCourse = (index: number) => {
    setCourses((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEdit = (index: number) => {
    setEditingIndex(index);
  };

  return (
    <div className="container">
      <div className="card">
        <Header />
        <CourseForm
          onSave={saveCourse}
          editingCourse={
            editingIndex !== null ? courses[editingIndex] : null
          }
        />
        <CourseList
          courses={courses}
          onDelete={deleteCourse}
          onEdit={handleEdit}
        />
      </div>
    </div>
  );
}