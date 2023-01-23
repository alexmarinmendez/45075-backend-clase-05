const temporizador = (cb) => {
    setTimeout(cb, 0)
}

const operacion = () => console.log('Ejecutar cualquier cosa')

console.log('Programa iniciado')
temporizador(operacion)
console.log('Programa finalizado')