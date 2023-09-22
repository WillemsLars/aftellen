input.onButtonPressed(Button.A, function () {
    GETAL_1 += 1
})
input.onButtonPressed(Button.B, function () {
    GETAL_1 += -1
})
let GETAL_1 = 0
basic.forever(function () {
    if (GETAL_1 > -1) {
        basic.showNumber(GETAL_1)
    }
})
