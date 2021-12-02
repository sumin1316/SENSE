serial.writeNumber(0)
basic.forever(function () {
    serial.writeNumber(input.lightLevel())
    serial.writeLine("")
    basic.pause(100)
})
