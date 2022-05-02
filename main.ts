let val: number;
while (true) {
    val = input.temperature()
    basic.showNumber(val)
    serial.writeValue("Valor", val)
}
