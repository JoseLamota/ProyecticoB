/***
 * Sofi aqui estan algunas correcciones 
 1.Cambie this.estudiante a this.estudiantes en todas partes
 para referirnos correctamente al array de estudiantes que es el
 que estamos buscando.
 2.En el método porcAprobadosyReprobados, contamos cuántos estudiantes
  aprobaron y cuántos reprobaron para luego calcular el porcentaje del total.
 3.En el método estudianteMejorNota, ubicamos 
 la mejor nota en lugar de sumar todas las notas
 4.En el método chicasmayornotapromedio, corregui para colocar la lógica
  y para comparar las notas */

  // Estudiante.js
export default class Estudiante {
    constructor(nombre, cedula, sexo, nota) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.sexo = sexo;
        this.nota = nota;

        // validacion de nota
        if (nota < 0 || nota > 20) {
            throw new Error('La nota debe estar entre 0 y 20');
        }
    }

    aprueba(minimo) {
        return this.nota >= minimo;
    }
}