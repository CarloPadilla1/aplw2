import { Icurso } from "./cursosxd";
const cursos: Icurso[] = [
    {
        id: 1,
        id_curso: 101,
        id_instructor: 1,
        fecha: "2024-05-10",
        hora: "09:00",
        horastotal: 20,
        nivel: "Intermedio"
    },
    {
        id: 2,
        id_curso: 102,
        id_instructor: 2,
        fecha: "2024-06-15",
        hora: "14:00",
        horastotal: 30,
        nivel: "Avanzado"
    },
    {
        id: 3,
        id_curso: 103,
        id_instructor: 3,
        fecha: "2024-07-20",
        hora: "10:30",
        horastotal: 25,
        nivel: "Básico"
    }
    // Puedes agregar más cursos aquí si lo deseas
];
export { cursos }