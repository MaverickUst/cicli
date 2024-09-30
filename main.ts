let indice = 0
let Numero = 0
basic.clearScreen()
basic.forever(function () {
    Numero = 0
    indice = 10
    for (let index = 0; index < indice; index++) {
        basic.showNumber(Numero)
        Numero += 1
    }
    basic.showIcon(IconNames.Chessboard)
})
