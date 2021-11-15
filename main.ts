input.onButtonPressed(Button.A, function () {
    antwoord = 0
})
input.onButtonPressed(Button.B, function () {
    antwoord = 1
})
let antwoord = 0
kitronik_VIEW128x64.controlDisplayOnOff(kitronik_VIEW128x64.onOff(true))
basic.forever(function () {
    if (antwoord == 0) {
        kitronik_VIEW128x64.plot(input.soundLevel())
    } else if (antwoord == 1) {
        kitronik_VIEW128x64.plot(input.lightLevel())
    } else {
    	
    }
    if (antwoord == 0) {
        kitronik_VIEW128x64.clearLine(2)
        kitronik_VIEW128x64.show("geluidsgrafiek", 2, kitronik_VIEW128x64.ShowAlign.Centre)
    } else if (antwoord == 1) {
        kitronik_VIEW128x64.clearLine(2)
        kitronik_VIEW128x64.show("lichtgrafiek", 2, kitronik_VIEW128x64.ShowAlign.Centre)
    } else {
    	
    }
})
