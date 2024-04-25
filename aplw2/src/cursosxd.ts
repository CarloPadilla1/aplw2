interface IIdioma {
    id: number;
    description: String;
}
interface IInstructor {
    id: number;
    nombre: String;
    nacimiento: String;
    experiencia: Number;
}
interface Icurso {
    id: number;
    id_curso: number;
    id_instructor: number;
    fecha: string;
    hora: string;
    horastotal: number;
    nivel: String;
}

export { IIdioma, IInstructor, Icurso };