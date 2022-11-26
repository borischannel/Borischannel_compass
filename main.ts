let degrees = 0
basic.showString("COMPASS")
basic.showString("BY BORISCHANNEL")
basic.pause(3000)
basic.showString("LOADING")
basic.pause(1000)
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
    basic.pause(100)
}
basic.clearScreen()
basic.pause(3000)
basic.forever(function () {
    degrees = input.compassHeading()
    if (degrees < 45) {
        basic.showArrow(ArrowNames.North)
    } else if (degrees < 135) {
        basic.showArrow(ArrowNames.East)
    } else if (degrees < 225) {
        basic.showArrow(ArrowNames.South)
    } else if (degrees < 315) {
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
