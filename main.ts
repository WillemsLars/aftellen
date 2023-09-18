let tellen = 10
basic.forever(function () {
    if (tellen != -1) {
        basic.showNumber(tellen)
        tellen += -1
        basic.pause(100)
    }
})
