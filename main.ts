input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (Cariño < 22 && Hambre < 22 && Sueño < 22) {
        if (Cariño > 0) {
            Cariño = 0
            music._playDefaultBackground(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.InBackground)
            basic.showIcon(IconNames.Heart)
            Sonido_cariño = 0
        } else {
            music._playDefaultBackground(music.createSoundExpression(WaveShape.Square, 1, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
            basic.showIcon(IconNames.No)
        }
    }
})
let Sonido_cariño = 0
let Sueño = 0
let Cariño = 0
let Hambre = 0
Hambre = 0
Cariño = 0
Sueño = 0
let Sonido_hambre = 0
let Sonido_muerte = 0
Sonido_cariño = 0
let Sonido_sueño = 0
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    if (Cariño < 22 && Hambre < 22 && Sueño < 22) {
        if (Hambre > 10) {
            if (Sonido_hambre == 0) {
                music._playDefaultBackground(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.InBackground)
                Sonido_hambre = 1
            }
            basic.showIcon(IconNames.Angry)
        }
    }
})
basic.forever(function () {
    if (Cariño < 22 && Hambre < 22 && Sueño < 22) {
        if (Cariño > 5) {
            if (Sonido_cariño == 0) {
                music._playDefaultBackground(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.InBackground)
                Sonido_cariño = 1
            }
            basic.showIcon(IconNames.SmallHeart)
        }
    }
})
basic.forever(function () {
    if (Cariño < 22 && Hambre < 22 && Sueño < 22) {
        if (Hambre < 12 && Cariño < 7 && Sueño < 17) {
            basic.showLeds(`
                . # # # .
                # . # . #
                # # # # #
                # # # # #
                # . # . #
                `)
            basic.pause(500)
            music._playDefaultBackground(music.createSoundExpression(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            basic.showLeds(`
                # # # . .
                . # . # .
                # # # # .
                # # # # .
                . # . # .
                `)
            basic.pause(500)
            basic.showLeds(`
                . # # # .
                # . # . #
                # # # # #
                # # # # #
                # . # . #
                `)
            music._playDefaultBackground(music.createSoundExpression(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            basic.showLeds(`
                . . # # #
                . # . # .
                . # # # #
                . # # # #
                . # . # .
                `)
            basic.pause(500)
        }
    }
})
basic.forever(function () {
    basic.pause(5000)
    Hambre += 1
    Sueño += 1
    Cariño += 1
})
basic.forever(function () {
    if (Cariño < 22 && Hambre < 22 && Sueño < 22) {
        if (Sueño > 15) {
            if (Sonido_sueño == 0) {
                music._playDefaultBackground(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.InBackground)
                Sonido_sueño = 1
            }
            basic.showIcon(IconNames.House)
        }
    }
})
basic.forever(function () {
    if (Cariño < 22 && Hambre < 22 && Sueño < 22) {
        if (input.lightLevel() == 0) {
            if (Sueño > 15) {
                Sueño = 0
                music._playDefaultBackground(music.builtinPlayableSoundEffect(soundExpression.soaring), music.PlaybackMode.InBackground)
                basic.showIcon(IconNames.Happy)
                Sonido_sueño = 0
            } else {
            	
            }
        }
    }
})
basic.forever(function () {
    if (Cariño < 22 && Hambre < 22 && Sueño < 22) {
        if (input.magneticForce(Dimension.Strength) > 100) {
            if (Hambre > 0) {
                Hambre = 0
                music._playDefaultBackground(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.InBackground)
                basic.showIcon(IconNames.Surprised)
                Sonido_hambre = 0
            } else {
                music._playDefaultBackground(music.createSoundExpression(WaveShape.Square, 1, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                basic.showIcon(IconNames.No)
            }
        }
    }
})
basic.forever(function () {
    if (Cariño < 21 && Hambre < 21 && Sueño < 21) {
        if (Sonido_muerte == 0) {
            music._playDefaultBackground(music.builtinPlayableSoundEffect(soundExpression.mysterious), music.PlaybackMode.InBackground)
            Sonido_muerte = 1
        }
        basic.showIcon(IconNames.Skull)
    }
})
