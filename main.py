tellen = 10

def on_forever():
    global tellen
    if tellen != -1:
        basic.show_number(tellen)
        tellen += -1
        basic.pause(100)
basic.forever(on_forever)
