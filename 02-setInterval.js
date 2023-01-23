const temporizador = () => {
    let counter = 1
    const timer = setInterval(() => {
        counter++
        console.log('ejecucion del interval')
        if (counter > 10) clearInterval(timer)
    }, 1500)

}

console.log('Programa iniciado')
temporizador()
console.log('Programa finalizado')