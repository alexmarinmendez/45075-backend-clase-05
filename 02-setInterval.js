const temporizador = (cb) => {
    setInterval(cb, 1500)
}

const operacion = () => console.log('Ejecutar cualquier cosa')

console.log('Programa iniciado')
temporizador(operacion)
console.log('Programa finalizado')