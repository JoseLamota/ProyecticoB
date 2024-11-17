/** Se desea llevar un control de los estudiantes que
asisten a presentar un examen. Se tiene por cada
participante: nombre, cédula, sexo y nota. Se requiere
de un programa que permita el registro de esta
información, conociendo al principio de la ejecución el
valor del examen y el mínimo aprobatorio.
se desea saber:
1.Porcentaje de aprobados y reprobados 
2.Estudiantes con la mejor nota
3.Chicas por encima de la nota promedio


nombre  ceduda  sexo  nota  
Luis     1111    M     12
Carla    2222    F    16.5
Mery     3333    F    8.5
*/

// main.js
import Estudiante from './Estudiante.js';
import Examen from './Examen.js';

const examen = new Examen(20, 9.6);

const estudiantesData = [
    { nombre: 'Luis', cedula: 1111, sexo: 'M', nota: 12 },
    { nombre: 'Carla', cedula: 2222, sexo: 'F', nota: 16.5 },
    { nombre: 'Mery', cedula: 3333, sexo: 'F', nota: 8.5 },
    { nombre: 'Juan', cedula: 4444, sexo: 'M', nota: 9.8 },
    { nombre: 'Ana', cedula: 5555, sexo: 'F', nota: 10 },
];

estudiantesData.forEach(data => {
    const estudiante = new Estudiante(data.nombre, data.cedula, data.sexo, data.nota);
    examen.agregarEstudiante(estudiante);
});

const porcentajes = examen.porcAprobadosyReprobados();
console.log(`Porcentaje de aprobados: ${porcentajes.aprobados}%`);
console.log(`Porcentaje de reprobados: ${porcentajes.reprobados}%`);
console.log(`Mejor nota: ${examen.estudianteMejorNota()}`);
console.log(`Chicas por encima de la nota promedio:`, examen.chicasMayoresQuePromedio());