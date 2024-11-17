
/*
1.constructor: explica la inicialización de propiedades
2.agregarEstudiante: registra la verificación de tipo antes de agregar 
un estudiante
3.porcAprobadosyReprobados: habla sobre el conteo de aprobados y reprobados
 y el cálculo de porcentajes
4.estudianteMejorNota: indica la mejora en la lógica para manejar el caso 
de no estudiantes y el uso de Math.max
5.chicasMayoresQuePromedio: habla sobre la verificación de estudiantes 
antes de calcular el promedio y la lógica de búsqueda de chicas 
por encima del promedio.*/


// Examen.js
import Estudiante from './Estudiante.js';

export default class Examen {
    constructor(valor, minAprueba) {
        // Inicializa el valor del examen y el minimo para aprobar
        this.valor = valor;
        this.minAprueba = minAprueba;
        this.estudiantes = []; // array para almacenar estudiantes
    }

    agregarEstudiante(estudiante) {
        // verifica si el objeto es una instancia de Estudiante antes de agregarlo
        if (estudiante instanceof Estudiante) {
            this.estudiantes.push(estudiante);
        } else {
            throw new Error('El objeto debe ser una instancia de Estudiante');
        }
    }

    porcAprobadosyReprobados() {
        let aprobados = 0;
        let reprobados = 0;

        // repite sobre los estudiantes para contar aprobados y reprobados
        this.estudiantes.forEach(estudiante => {
            if (estudiante.aprueba(this.minAprueba)) {
                aprobados++;
            } else {
                reprobados++;
            }
        });

        const total = this.estudiantes.length;
        // calcula el porcentaje de aprobados y reprobados
        const porcentajeAprobados = total > 0 ? (aprobados / total) * 100 : 0;
        const porcentajeReprobados = total > 0 ? (reprobados / total) * 100 : 0;

        return {
            aprobados: porcentajeAprobados,
            reprobados: porcentajeReprobados
        };
    }

    estudianteMejorNota() {
        // si no hay estudiantes, devuelve null en lugar de 0
        if (this.estudiantes.length === 0) {
            return null; // No hay estudiantes registrados
        }
        
        // usa Math.max para encontrar la mejor nota
        return Math.max(...this.estudiantes.map(estudiante => estudiante.nota));
    }

    chicasMayoresQuePromedio() {
        let estudiantesResultados = [];
        
        // verifica si hay estudiantes antes de calcular el promedio
        if (this.estudiantes.length === 0) {
            return estudiantesResultados; // retorna un arreglo vacío si no hay estudiantes
        }

        // calcula el promedio de las notas
        const promedio = this.estudiantes.reduce((sum, estudiante) => sum + estudiante.nota, 0) / this.estudiantes.length;

        // busca chicas con notas superiores al promedio
        this.estudiantes.forEach(estudiante => {
            if (estudiante.sexo === 'F' && estudiante.nota > promedio) {
                estudiantesResultados.push(estudiante);
            }
        });

        return estudiantesResultados;
    }
}