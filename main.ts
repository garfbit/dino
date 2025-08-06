input.onButtonPressed(Button.A, function () {
    Cabeza_Dino.change(LedSpriteProperty.Y, -1)
    Cuerpo_Dino.change(LedSpriteProperty.Y, -1)
    basic.pause(200)
    Cabeza_Dino.change(LedSpriteProperty.Y, 1)
    Cuerpo_Dino.change(LedSpriteProperty.Y, 1)
})
function Obstáculo () {
    Obstaculo = game.createSprite(4, 4)
    for (let index = 0; index < 4; index++) {
        Obstaculo.change(LedSpriteProperty.X, -1)
        basic.pause(500)
        if (Obstaculo.isTouching(Cuerpo_Dino)) {
            basic.showIcon(IconNames.Sad)
            music.play(music.tonePlayable(698, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        }
    }
}
let Obstaculo: game.LedSprite = null
let Cuerpo_Dino: game.LedSprite = null
let Cabeza_Dino: game.LedSprite = null
Cabeza_Dino = game.createSprite(0, 3)
Cuerpo_Dino = game.createSprite(0, 4)
Obstáculo()
basic.forever(function () {
    if (Obstaculo.isTouchingEdge()) {
        Obstaculo.delete()
        Obstáculo()
    }
})
