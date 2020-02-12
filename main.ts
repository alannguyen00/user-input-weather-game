let weatherPrediction = game.askForString("What is the weather today?")
game.splash("It will rain: " + weatherPrediction)
let big_boy = sprites.create(img`
. . . . . f f . . . . . . . . . 
. . . . . f f f f f . . . . . . 
. . . f f f f f f f f . . . . . 
. . . . f f f f f f f f . . . . 
. . . f f f f f f f f f . . . . 
. . . f . d d d d d f . . . . . 
. . . . d d f d f d d . . . . . 
. . . . . d d d d d d . . . . . 
. . . . . d d f d d . . . . . . 
. . . . . 9 9 1 9 9 . . . . . . 
. . . . 9 9 9 1 9 9 9 . . . . . 
. . . . 9 9 9 9 9 9 9 . . . . . 
. . . . 9 9 8 8 8 9 9 . . . . . 
. . . . d . 8 8 8 . d . . . . . 
. . . . . . 8 8 8 . . . . . . . 
. . . . . d d . d d . . . . . . 
`, SpriteKind.Player)
let weatherEffects = Math.randomRange(0, 6)
if (weatherEffects == 0) {
    effects.confetti.startScreenEffect()
    big_boy.say("CONFETIIIII")
} else if (weatherEffects == 1) {
    effects.blizzard.startScreenEffect()
    big_boy.say("SNOW!!!!")
} else if (weatherEffects == 2) {
    effects.starField.startScreenEffect()
    big_boy.say("SOLAR ECIPSE")
} else if (weatherEffects == 3) {
    effects.clouds.startScreenEffect()
    big_boy.say("CLOUDYYY")
} else if (weatherEffects == 4) {
    effects.hearts.startScreenEffect()
    big_boy.say("VALENTINES DAY")
} else if (weatherEffects == 5) {
    effects.smiles.startScreenEffect()
    big_boy.say("SMILEE")
} else if (weatherEffects == 6) {
    effects.bubbles.startScreenEffect()
    big_boy.say("BUBBLE WAVEE")
} else {
	
}
