/*
El profe quiere crear 
una forma para dar puntos 
extra les deja la siguiente
tarea a Juan y Pedro:
Encontrar sus puntos de comparación comparando 

a[0] con b[0], a[1] con b[1] y a[2] con b[2].

Si a[i] > b[i], Juan recibe 1 punto.
Si a[i] < b[i], Pedro recibe 1 punto.
Si a[i] = b[i], ninguna de las personas recibe un punto.

Los puntos de comparación son los puntos totales que una persona obtuvo.

Dados a y b, determine sus respectivos puntos de comparación.

Ejemplo

a = [1, 2, 3]
b = [3, 2, 1]

Para los elementos 0, Juan recibe un punto porque a[0] .
Para los elementos iguales a[1] y b[1], no se obtienen puntos.
Finalmente, para los elementos 2, a[2] > b[2], por lo que Pedro recibe un punto.

El array de resultado es [1, 1] con la puntuación de Juan en primer lugar y la de Pedro en segundo.

*/

export default function triplets(a, b) {
        let puntosJuan = 0;
        let puntosPedro = 0;

        for (let i = 0; i < a.length; i++) {
                if (a[i] > b[i]) {
                        puntosJuan++;
                } 
                else if (a[i] < b[i]) {
                        puntosPedro++;
                }
        }
        return [puntosJuan, puntosPedro];
}
