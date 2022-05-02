while True:

    val = input.temperature()
    basic.show_number(val)
    serial.write_value("Valor", val)
