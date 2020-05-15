namespace SpriteKind {
    export const Background = SpriteKind.create()
    export const collision = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (splashFlag == true) {
        if (!(playerSprite.isHittingTile(CollisionDirection.Bottom))) {
            if (!(playerSprite.vy > 0)) {
                playerSprite.vy = playerSprite.y * -0.7
            }
        }
    }
})
function showSplash () {
    spriteSteps = (screen.height / 2 - screen.height / 6) / (screen.width / 2)
    console.log("Sprite Steps = " + screen.height / 2 + " - " + screen.height / 6 + " / " + screen.width / 2 + " = " + spriteSteps)
    scene.setBackgroundImage(img`
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 c c c c c c c c c c c c c c c c c c c c d c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
        c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c
        c c c c c c c 1 c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c
        c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c f f f
        c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c f f c c f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f c c c c f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c c c c f f c
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c c c f c c c
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c f f c c c c
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f c c c c c c
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 5
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 5
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 5
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 5
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 5
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 5
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 5
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 5
        c c 1 c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 5
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 5
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 5
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 5
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 5
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 5
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 5
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 5
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f 5
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c 1 c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        c c c c c c c c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        f f f f f f f f f f f f b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        f f f f f f f f f f f f b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        f f f f f f f f f f f f b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        f f f f f f f f f f f f b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        f f f f f f f f f f f f b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        f f f f f f f f f f f f b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        f f f f f f f f f f f f b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        f f f f f f f f f f f f b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        f f f f f f f f f f f f b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c c c f f f f
        f f f f f f f f f f f c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d c c c c f f f
        f f f f f f f f f c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b c c f f f
        f f f f f f f f c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b c c f f
        f f f f f f f f c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b c f f
        f f f f f f f f c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b c c f
        f f f f f f f f c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b c c f
        f f f f f f f c c c c c b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b c c f
        f f f f f f f b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b c c f
        f f f f f f f b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b c c f
        f f f f f f f b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b c c f
        f f f f f f f b b b b d b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b c c f
        f f f f f f f b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b c c f
        f f f f f f f b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        f f f f f f f b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        f f f f f f f b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b f
        f f f f f f f b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        f f f f f f f b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b f
        f f f f f f f b b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        f f f f f f f f b b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        f f f f f f f f f b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d b b b b b b f
        f f f f f f f f f b b b b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d f f f f f f f
        e e e e e e e e e e e e b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e
        e e e e e e e e e e e e b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e
        e e e e e e e e e e e e b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e
        e e e e e e e e e e e e b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e
        e e e e e e e e e e e e b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e
        e e e e e e e e e e e e b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e
        e e e e e e e e e e e e b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e
        e e e e e e e e e e e e b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e
        e e e e e e e e e e e e b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e
        e e e e e e e e e e e e b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e
        e e e e e e e e e e e e b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e
        e e e e e e e e e e e e b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e
        e e e e e e e e e e e e b b b b d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e
        e e e e e e e e e e e e e e e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e
        e e e e e e e e e e e e e e e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e
        e e e e e e e e e e e e e e e e d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
        e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    `)
    scene.setBackgroundImage(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `)
    scene.setBackgroundColor(12)
    pause(750)
    playerSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . 4 . . . . . . . . . . .
        . . . . . . . . . 4 4 4 4 4 . . . . . . . . . .
        . . . . . . . . 4 4 4 4 4 4 4 . . . . . . . . .
        . . . . . . . . 4 4 4 4 4 4 4 4 . . . . . . . .
        . . . . . . . 4 4 4 4 d d 4 4 4 4 . . . . . . .
        . . . . . . . 4 4 4 1 1 d 1 1 4 4 . . . . . . .
        . . . . . . . 4 4 4 1 6 d 1 6 4 4 . . . . . . .
        . . . . . . . 4 4 4 d d d d d 4 . . . . . . . .
        . . . . . . . 4 4 4 4 4 b b 4 . . . . . . . . .
        . . . . . . 4 4 4 d 4 4 4 4 4 . . . . . . . . .
        . . . . . . 4 4 . d d 4 4 4 . . . . . . . . . .
        . . . . . . . . e e d d 4 4 e . . . . . . . . .
        . . . . . . . e e e e d d e e e . . . . . . . .
        . . . . . . e e e e e e e e e e e . . . . . . .
        . . . . . . e e e e e e e e e e e . . . . . . .
        . . . . . . . d d e e e e e e d d . . . . . . .
        . . . . . . . d d e e e e e e d d . . . . . . .
        . . . . . . . d d 8 8 8 8 8 8 d d . . . . . . .
        . . . . . . . . d 8 8 8 8 8 8 . d . . . . . . .
        . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . .
        . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . .
        . . . . . . . . . . 8 8 . 8 8 . . . . . . . . .
        . . . . . . . . . . f f . f f . . . . . . . . .
    `, SpriteKind.Player)
    playerSprite.setPosition(0, 62)
    animation.runImageAnimation(
    playerSprite,
    [img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . 4 4 4 4 . . . . . . . . .
        . . . . . . . . . 4 4 4 4 4 4 . . . . . . . . .
        . . . . . . . . 4 4 4 4 4 4 4 4 . . . . . . . .
        . . . . . . . 4 4 4 4 4 4 4 4 4 4 . . . . . . .
        . . . . . . . 4 4 4 4 d d 4 4 4 4 . . . . . . .
        . . . . . . . 4 4 4 1 1 d 1 1 4 4 . . . . . . .
        . . . . . . . 4 4 4 1 6 d 1 6 4 . . . . . . . .
        . . . . . . . 4 4 4 d d d d d . . . . . . . . .
        . . . . . . . 4 4 4 4 4 1 1 4 . . . . . . . . .
        . . . . . . . 4 4 4 d 4 4 4 . . . . . . . . . .
        . . . . . . 4 4 e e d d 4 4 . . . . . . . . . .
        . . . . . . . . e e e d d e e . . . . . . . . .
        . . . . . . . e e e e e e e e e . . . . . . . .
        . . . . . . . e e e e e e e e e . . . . . . . .
        . . . . . . . d d e e e e e e d . . . . . . . .
        . . . . . . . d d e e e e e e . . . . . . . . .
        . . . . . . . . d d 8 8 8 8 8 . . . . . . . . .
        . . . . . . . . . d 8 8 8 8 8 . . . . . . . . .
        . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . .
        . . . . . . . . . . 8 8 . . 8 . . . . . . . . .
        . . . . . . . . . f 8 8 . . 8 f . . . . . . . .
        . . . . . . . . . f f . . . . f f . . . . . . .
    `,img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . 4 . . . . . . . . . . .
        . . . . . . . . . 4 4 4 4 4 . . . . . . . . . .
        . . . . . . . . 4 4 4 4 4 4 4 . . . . . . . . .
        . . . . . . . . 4 4 4 4 4 4 4 4 . . . . . . . .
        . . . . . . . 4 4 4 4 d d 4 4 4 4 . . . . . . .
        . . . . . . . 4 4 4 1 1 d 1 1 4 4 . . . . . . .
        . . . . . . . 4 4 4 1 6 d 1 6 4 4 . . . . . . .
        . . . . . . . 4 4 4 d d d d d 4 . . . . . . . .
        . . . . . . . 4 4 4 4 4 1 1 4 . . . . . . . . .
        . . . . . . 4 4 4 d 4 4 4 4 4 . . . . . . . . .
        . . . . . . 4 4 . d d 4 4 4 . . . . . . . . . .
        . . . . . 4 4 . e e d d 4 4 . . . . . . . . . .
        . . . . . . . e e e e d d e . . . . . . . . . .
        . . . . . . . e e e e e e e e . . . . . . . . .
        . . . . . . . e e e e e e e e e . . . . . . . .
        . . . . . . . d d e e e e e e d . . . . . . . .
        . . . . . . . d d e e e e e e d . . . . . . . .
        . . . . . . . d d 8 8 8 8 8 8 d . . . . . . . .
        . . . . . . . d . 8 8 8 8 8 8 . . . . . . . . .
        . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . .
        . . . . . . . . . . 8 8 . 8 8 . . . . . . . . .
        . . . . . . . . . . f f . f f . . . . . . . . .
        . . . . . . . . . . f f f f f f . . . . . . . .
    `,img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . 4 4 . . . . . . . . . . .
        . . . . . . . . . 4 4 4 4 4 . . . . . . . . . .
        . . . . . . . . 4 4 4 4 4 4 4 . . . . . . . . .
        . . . . . . . 4 4 4 4 4 4 4 4 4 . . . . . . . .
        . . . . . . . 4 4 4 4 4 4 4 4 4 4 . . . . . . .
        . . . . . . . 4 4 4 4 d d 4 4 4 4 . . . . . . .
        . . . . . . . 4 4 4 1 1 d 1 1 4 4 . . . . . . .
        . . . . . . . 4 4 4 1 6 d 1 6 4 . . . . . . . .
        . . . . . . . 4 4 4 d d d d d . . . . . . . . .
        . . . . . . . 4 4 d 4 4 1 1 4 . . . . . . . . .
        . . . . . . 4 4 4 d d 4 4 4 . . . . . . . . . .
        . . . . . 4 4 4 4 e d d 4 4 . . . . . . . . . .
        . . . . . . . e e e e d d e . . . . . . . . . .
        . . . . . . . e e e e e e e e . . . . . . . . .
        . . . . . . . e e e e e e e e e . . . . . . . .
        . . . . . . . d d e e e e e e d . . . . . . . .
        . . . . . . . d d e e e e e e d d . . . . . . .
        . . . . . . d d . 8 8 8 8 8 8 . d . . . . . . .
        . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . .
        . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . .
        . . . . . . . . . . 8 8 8 8 8 . . . . . . . . .
        . . . . . . . . . . f 8 f f . . . . . . . . . .
        . . . . . . . . . . . . f f f . . . . . . . . .
    `,img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . 4 . . . . . . . . . . .
        . . . . . . . . . 4 4 4 4 4 . . . . . . . . . .
        . . . . . . . . 4 4 4 4 4 4 4 . . . . . . . . .
        . . . . . . . . 4 4 4 4 4 4 4 4 . . . . . . . .
        . . . . . . . 4 4 4 4 d d 4 4 4 4 . . . . . . .
        . . . . . . . 4 4 4 1 1 d 1 1 4 4 . . . . . . .
        . . . . . . . 4 4 4 1 6 d 1 6 4 4 . . . . . . .
        . . . . . . . 4 4 4 d d d d d 4 . . . . . . . .
        . . . . . . . 4 4 4 4 4 1 1 4 . . . . . . . . .
        . . . . . . 4 4 4 d 4 4 4 4 4 . . . . . . . . .
        . . . . . . 4 4 . d d 4 4 4 . . . . . . . . . .
        . . . . . . . . e e d d 4 4 . . . . . . . . . .
        . . . . . . . e e e e d d e . . . . . . . . . .
        . . . . . . . e e e e e e e e . . . . . . . . .
        . . . . . . . e e e e e e e e e . . . . . . . .
        . . . . . . . d d e e e e e e d . . . . . . . .
        . . . . . . . d d e e e e e e d . . . . . . . .
        . . . . . . . d d 8 8 8 8 8 8 d . . . . . . . .
        . . . . . . . d . 8 8 8 8 8 8 . . . . . . . . .
        . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . .
        . . . . . . . . . . 8 8 . 8 8 . . . . . . . . .
        . . . . . . . . . . f f . f f . . . . . . . . .
        . . . . . . . . . . f f f f f f . . . . . . . .
    `],
    175,
    true
    )
    xPos = 0
    sprTitle = sprites.create(image.create(screen.width, screen.height / 4), 0)
    sprTitle.image.print("Castle Runner", 2, 4, 15, Biggerfont)
sprTitle.image.print("Castle Runner", 3, 5, 13, Biggerfont)
sprTitle.image.print("v 0.98", screen.width / 1.3, (screen.height / 6) + 3, 5, image.font8)
sprTitle.x = screen.width / 2, sprTitle.y = 0
while (!(playerSprite.x > screen.width / 2)) {
        playerSprite.x = xPos
        sprTitle.y = sprTitle.y + spriteSteps
        console.log(sprTitle.y)
        xPos += 3
        pause(100)
    }
    sprStart = sprites.create(image.create(80, 20), 0)
    sprStart.image.print("A - Start >", 0, 0, 1, image.font8)
sprStart.x = screen.width / 1.2, sprStart.y = screen.height / 1.2
sprTutorial = sprites.create(image.create(120, 20), 0)
    sprTutorial.image.print("B - Controls >", 0, 0, 1, image.font8)
sprTutorial.x = screen.width / 1.2, sprTutorial.y = screen.height / 1.05
startFlag = false
    while (!(startFlag) == true) {
        pause(500)
    }
    while (playerSprite.x < scene.screenWidth()) {
        playerSprite.x = xPos
        xPos += 3
        pause(50)
    }
    sprTitle.destroy()
    sprStart.destroy()
    sprTutorial.destroy()
    playerSprite.destroy()
    splashFlag = true
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (splashFlag == false) {
        game.showLongText("Avoid running into sentient crates from hell to stay alive ...", DialogLayout.Bottom)
        game.showLongText("Press \"A\" or \"Up\" to jump, press down longer to jump higher", DialogLayout.Top)
        game.showLongText("Godspeed human, see you on the other side ..", DialogLayout.Bottom)
    }
})
sprites.onDestroyed(SpriteKind.Projectile, function (sprite) {
    info.changeScoreBy(1)
    if (info.score() % 10 == 0) {
        level += 1
        lvlUp(level)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (splashFlag == true) {
        if (playerSprite.isHittingTile(CollisionDirection.Bottom)) {
            playerSprite.vy = -170
        }
    } else {
        startFlag = true
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (splashFlag == true) {
        if (playerSprite.isHittingTile(CollisionDirection.Bottom)) {
            playerSprite.vy = -170
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (splashFlag == true) {
        if (!(playerSprite.isHittingTile(CollisionDirection.Bottom))) {
            if (!(playerSprite.vy > 0)) {
                playerSprite.vy = playerSprite.y * -0.7
            }
        }
    }
})
function lvlUp (level: number) {
    textSprite.say("Level " + level, 2000)
    lvlSpeedModifier = (level - 1) * 5
    lvlChanceModifier = (level - 1) * 3
    lvlTimeModifier = (level - 1) * 30
}
let enemyBird: Sprite = null
let enemyVehicle: Sprite = null
let enemyAnt: Sprite = null
let clouds: Sprite = null
let castleBat: Sprite = null
let startFlag = false
let xPos = 0
let spriteSteps = 0
let textSprite: Sprite = null
let playerSprite: Sprite = null
let lvlTimeModifier = 0
let lvlSpeedModifier = 0
let lvlChanceModifier = 0
let level = 0
let splashFlag = false
let sprTitle: Sprite = null
let sprTutorial = null
let sprStart = null
let tutFlag = false
const Biggerfont = image.scaledFont(image.font8, 2)
splashFlag = false
showSplash()
music.setVolume(0)
level = 1
lvlChanceModifier = 0
lvlSpeedModifier = 0
lvlTimeModifier = 0
let expFactorMin = 1.1
let expFactorMax = 1.2
playerSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . 4 . . . . . . . . . . .
    . . . . . . . . . 4 4 4 4 4 . . . . . . . . . .
    . . . . . . . . 4 4 4 4 4 4 4 . . . . . . . . .
    . . . . . . . . 4 4 4 4 4 4 4 4 . . . . . . . .
    . . . . . . . 4 4 4 4 d d 4 4 4 4 . . . . . . .
    . . . . . . . 4 4 4 1 1 d 1 1 4 4 . . . . . . .
    . . . . . . . 4 4 4 1 6 d 1 6 4 4 . . . . . . .
    . . . . . . . 4 4 4 d d d d d 4 . . . . . . . .
    . . . . . . . 4 4 4 4 4 b b 4 . . . . . . . . .
    . . . . . . 4 4 4 d 4 4 4 4 4 . . . . . . . . .
    . . . . . . 4 4 . d d 4 4 4 . . . . . . . . . .
    . . . . . . . . e e d d 4 4 e . . . . . . . . .
    . . . . . . . e e e e d d e e e . . . . . . . .
    . . . . . . e e e e e e e e e e e . . . . . . .
    . . . . . . e e e e e e e e e e e . . . . . . .
    . . . . . . . d d e e e e e e d d . . . . . . .
    . . . . . . . d d e e e e e e d d . . . . . . .
    . . . . . . . d d 8 8 8 8 8 8 d d . . . . . . .
    . . . . . . . . d 8 8 8 8 8 8 . d . . . . . . .
    . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . .
    . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . .
    . . . . . . . . . . 8 8 . 8 8 . . . . . . . . .
    . . . . . . . . . . f f . f f . . . . . . . . .
`, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001e1e1e1e1e1d1e1d1d1b1e1b1b1e1b1e1e1e1e1e`,
            img`
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                . . . . . . . . . .
                2 2 2 2 2 2 2 2 2 2
                2 2 2 2 2 2 2 2 2 2
            `,
            [myTiles.tile0,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.castle.tilePath1,sprites.castle.tilePath5,sprites.castle.tileDarkGrass2,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.darkGroundWest,sprites.dungeon.chestOpen,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorLight4,sprites.dungeon.doorLockedEast,sprites.builtin.forestTiles24,sprites.builtin.forestTiles1,sprites.builtin.forestTiles16,sprites.dungeon.floorDark0,sprites.dungeon.floorDarkDiamond,sprites.dungeon.floorDark4,sprites.dungeon.floorDark5,sprites.builtin.oceanSand2,sprites.builtin.oceanDepths0,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.floorLightMoss,sprites.dungeon.floorLight2,sprites.dungeon.floorLight1,sprites.dungeon.floorLight0],
            TileScale.Sixteen
        ))
effects.blizzard.startScreenEffect()
scene.setBackgroundImage(img`
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 c c c c c c c c c c c c c c c c c c c c d c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f c c f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f c c c c f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f c c c c f f c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f c c c c c c c f c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c c c c c c c f f c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f c c c c c c c c f f c c c c c c
    c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f c c c f f f f f f c c c f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f c c c f f f f f f c c c f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f c c c f f f f f f c c c f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f c c c f f f f f f c c c f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f c c c f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f 5 5 5 5 5 f f f f f f f f 5
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f 5 f f f 5 f f f f f f f f 5
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f 5 f 4 f 5 f f f f f f f f 5
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f 5 f 5 f 4 f f f f f f f f 5
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f 5 f 4 f 4 f f f f f f f f 5
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f 5 f 4 f 5 f f f f f f f f 5
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f 5 f 5 f 4 f f f f f f f f 5
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f 5 5 5 5 5 f f f f f f f f 5
    c c 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c c c c c c c c c c c c c c c c c c f f f f f f 5 5 5 5 5 f f f f f f f f 5
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f c c c c c c c c c c c c c c c c f f f f f f 5 f f f 5 f f f f f f f f 5
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f c c c f f f f c c c c c c c c c c c c c c f f f f f f 5 f f f 5 f f f f f f f f 5
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f c f f f f c c c c c c c c c c c c c c c f f f f f f 5 f 4 f 5 f f f f f f f f 5
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f c c c c c c c c c c c c c c c c c f f f f f f 5 f 5 f 4 f f f f f f f f 5
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c f f f f f f 5 f 4 f 4 f f f f f f f f 5
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c f f f f f f 5 f 4 f 4 f f f f f f f f 5
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c f f f f f f 5 f 4 f 4 f f f f f f f f 5
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c d c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c f f f f f f 5 5 5 5 5 f f f f f f f f 5
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f
    c c c c c c 1 c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f c c c c c c c c c f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f c c c c c c f f f f f f f f f f f f f f f f f f f f f
    c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f f f f c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f f c c c c c c c c c 1 c c c c c c c c c c f f f f f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f c c c c c c c c c c c c c c c c 1 c c c c c c c c c c c c c c f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c f f f f
    f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c c c f f f
    f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c b b b c c f f f
    f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c b b b b b c c f f
    f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c b b b b b b c f f
    f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c b b b b b b b c c f
    f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f c c c c c c c c c c c c c c 1 c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c b b b b b b b c c f
    f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f c c c c c c c c c c c c c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c b b b b b b b c c f
    f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f b b b b b b b b b b b b b b b b b b b b d d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c b b b b b b b c c f
    f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f b b b b b b b b b b b b b b b b b b b b b d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c b b b b b b b c c f
    f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f b b b b b b b b b b b b b b b b b b b d d d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c b b b b b b b c c f
    f f f f f f f b b b b d d d d d d b b d b b d d d d d d b b b b b b b b b b b f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f b b b b b b b b b b b b b b b b b b b b b d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c b b b b b b b c c f
    f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f b b b b b b b b b b b b b b b b b b b b d d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c b b b b b b b c c f
    f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b d d d d b d b b d d d d b f f f f f f f f b b b b b b b b b b b b b b b b b b b d d d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b f f f f f f f f f f f
    f f f f f f f b b b b b b b b b b b b b b b b b b b b b d d d d d b b b d b b f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f b b b b b b b b b b b b b b b b b b b b d d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b f f f f f f f f f f f f f
    f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f b b b d d d d b d b b d d d d d b b b b b b b b b b b b b b b b b b b b f f f f f f f f b b b b b d b b d d d d d d d b b b b b d d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b f
    f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f b b b b b b b b b b b b b b b b b b b d d d f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b f f f f f f f f f f f f f f f f f f
    f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f b b b b b b b b b b b b b b b b b b b b d d f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b f
    f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f b b b b b b b b b b b b b b b b b b b b d d f f f f f f f f f f f f f f f f f f f b b b f b f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f b b b b b b b b b b b b b b b b b b d d d f f f f f f f f f f f f f f f f b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b d d f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f
    f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b d f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
    e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e
`)
tiles.placeOnTile(playerSprite, tiles.getTileLocation(1, 5))
playerSprite.ay = 500
textSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
textSprite.setPosition(71, 30)
textSprite.setFlag(SpriteFlag.Invisible, true)
animation.runImageAnimation(
playerSprite,
[img`
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . 4 4 4 4 . . . . . . . . .
    . . . . . . . . . 4 4 4 4 4 4 . . . . . . . . .
    . . . . . . . . 4 4 4 4 4 4 4 4 . . . . . . . .
    . . . . . . . 4 4 4 4 4 4 4 4 4 4 . . . . . . .
    . . . . . . . 4 4 4 4 d d 4 4 4 4 . . . . . . .
    . . . . . . . 4 4 4 1 1 d 1 1 4 4 . . . . . . .
    . . . . . . . 4 4 4 1 6 d 1 6 4 . . . . . . . .
    . . . . . . . 4 4 4 d d d d d . . . . . . . . .
    . . . . . . . 4 4 4 4 4 1 1 4 . . . . . . . . .
    . . . . . . . 4 4 4 d 4 4 4 . . . . . . . . . .
    . . . . . . 4 4 e e d d 4 4 . . . . . . . . . .
    . . . . . . . . e e e d d e e . . . . . . . . .
    . . . . . . . e e e e e e e e e . . . . . . . .
    . . . . . . . e e e e e e e e e . . . . . . . .
    . . . . . . . d d e e e e e e d . . . . . . . .
    . . . . . . . d d e e e e e e . . . . . . . . .
    . . . . . . . . d d 8 8 8 8 8 . . . . . . . . .
    . . . . . . . . . d 8 8 8 8 8 . . . . . . . . .
    . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . .
    . . . . . . . . . . 8 8 . . 8 . . . . . . . . .
    . . . . . . . . . f 8 8 . . 8 f . . . . . . . .
    . . . . . . . . . f f . . . . f f . . . . . . .
`,img`
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . 4 . . . . . . . . . . .
    . . . . . . . . . 4 4 4 4 4 . . . . . . . . . .
    . . . . . . . . 4 4 4 4 4 4 4 . . . . . . . . .
    . . . . . . . . 4 4 4 4 4 4 4 4 . . . . . . . .
    . . . . . . . 4 4 4 4 d d 4 4 4 4 . . . . . . .
    . . . . . . . 4 4 4 1 1 d 1 1 4 4 . . . . . . .
    . . . . . . . 4 4 4 1 6 d 1 6 4 4 . . . . . . .
    . . . . . . . 4 4 4 d d d d d 4 . . . . . . . .
    . . . . . . . 4 4 4 4 4 1 1 4 . . . . . . . . .
    . . . . . . 4 4 4 d 4 4 4 4 4 . . . . . . . . .
    . . . . . . 4 4 . d d 4 4 4 . . . . . . . . . .
    . . . . . 4 4 . e e d d 4 4 . . . . . . . . . .
    . . . . . . . e e e e d d e . . . . . . . . . .
    . . . . . . . e e e e e e e e . . . . . . . . .
    . . . . . . . e e e e e e e e e . . . . . . . .
    . . . . . . . d d e e e e e e d . . . . . . . .
    . . . . . . . d d e e e e e e d . . . . . . . .
    . . . . . . . d d 8 8 8 8 8 8 d . . . . . . . .
    . . . . . . . d . 8 8 8 8 8 8 . . . . . . . . .
    . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . .
    . . . . . . . . . . 8 8 . 8 8 . . . . . . . . .
    . . . . . . . . . . f f . f f . . . . . . . . .
    . . . . . . . . . . f f f f f f . . . . . . . .
`,img`
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . 4 4 . . . . . . . . . . .
    . . . . . . . . . 4 4 4 4 4 . . . . . . . . . .
    . . . . . . . . 4 4 4 4 4 4 4 . . . . . . . . .
    . . . . . . . 4 4 4 4 4 4 4 4 4 . . . . . . . .
    . . . . . . . 4 4 4 4 4 4 4 4 4 4 . . . . . . .
    . . . . . . . 4 4 4 4 d d 4 4 4 4 . . . . . . .
    . . . . . . . 4 4 4 1 1 d 1 1 4 4 . . . . . . .
    . . . . . . . 4 4 4 1 6 d 1 6 4 . . . . . . . .
    . . . . . . . 4 4 4 d d d d d . . . . . . . . .
    . . . . . . . 4 4 d 4 4 1 1 4 . . . . . . . . .
    . . . . . . 4 4 4 d d 4 4 4 . . . . . . . . . .
    . . . . . 4 4 4 4 e d d 4 4 . . . . . . . . . .
    . . . . . . . e e e e d d e . . . . . . . . . .
    . . . . . . . e e e e e e e e . . . . . . . . .
    . . . . . . . e e e e e e e e e . . . . . . . .
    . . . . . . . d d e e e e e e d . . . . . . . .
    . . . . . . . d d e e e e e e d d . . . . . . .
    . . . . . . d d . 8 8 8 8 8 8 . d . . . . . . .
    . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . .
    . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . .
    . . . . . . . . . . 8 8 8 8 8 . . . . . . . . .
    . . . . . . . . . . f 8 f f . . . . . . . . . .
    . . . . . . . . . . . . f f f . . . . . . . . .
`,img`
    . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . 4 . . . . . . . . . . .
    . . . . . . . . . 4 4 4 4 4 . . . . . . . . . .
    . . . . . . . . 4 4 4 4 4 4 4 . . . . . . . . .
    . . . . . . . . 4 4 4 4 4 4 4 4 . . . . . . . .
    . . . . . . . 4 4 4 4 d d 4 4 4 4 . . . . . . .
    . . . . . . . 4 4 4 1 1 d 1 1 4 4 . . . . . . .
    . . . . . . . 4 4 4 1 6 d 1 6 4 4 . . . . . . .
    . . . . . . . 4 4 4 d d d d d 4 . . . . . . . .
    . . . . . . . 4 4 4 4 4 1 1 4 . . . . . . . . .
    . . . . . . 4 4 4 d 4 4 4 4 4 . . . . . . . . .
    . . . . . . 4 4 . d d 4 4 4 . . . . . . . . . .
    . . . . . . . . e e d d 4 4 . . . . . . . . . .
    . . . . . . . e e e e d d e . . . . . . . . . .
    . . . . . . . e e e e e e e e . . . . . . . . .
    . . . . . . . e e e e e e e e e . . . . . . . .
    . . . . . . . d d e e e e e e d . . . . . . . .
    . . . . . . . d d e e e e e e d . . . . . . . .
    . . . . . . . d d 8 8 8 8 8 8 d . . . . . . . .
    . . . . . . . d . 8 8 8 8 8 8 . . . . . . . . .
    . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . .
    . . . . . . . . . . 8 8 . 8 8 . . . . . . . . .
    . . . . . . . . . . f f . f f . . . . . . . . .
    . . . . . . . . . . f f f f f f . . . . . . . .
`],
200,
true
)
game.onUpdateInterval(Math.randomRange(2500, 4500), function () {
    castleBat = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . f f . . .
        . . . . . . . . . . f f . . . .
        . . . . . . . . . . f . . . . .
        . . . . . . . . . f . . . . . .
        f f f f . . . . . f . . . . . .
        . . . f f f . . . f . . . . . .
        . . . . . . f f . f . . . . . .
        . . . . . . . f f f . . . . . .
        . . . . . . . . f f f . . . . .
        . . . . . . . . f f f . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `, SpriteKind.Background)
    castleBat.setVelocity(Math.randomRange(-10, -25), Math.randomRange(-5, -30))
    castleBat.setPosition(Math.randomRange(130, 160), Math.randomRange(40, 70))
    castleBat.setFlag(SpriteFlag.DestroyOnWall, true)
    animation.runImageAnimation(
    castleBat,
    [img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . f f . . .
        . . . . . . . . . . f f . . . .
        . . . . . . . . . . f . . . . .
        . . . . . . . . . f . . . . . .
        f f f f . . . . . f . . . . . .
        . . . f f f . . . f . . . . . .
        . . . . . . f f . f . . . . . .
        . . . . . . . f f f . . . . . .
        . . . . . . . . f f f . . . . .
        . . . . . . . . f f f . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . f f f f
        . . . . . . . . . . . f f . . .
        . . . . . . . . . . f f . . . .
        . . . . . . . . . f f . . . . .
        . . . . . . . . . f . . . . . .
        . . f f f f f f f f f . . . . .
        . f f . . . . . f f f . . . . .
        . f . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `,img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . f f . . . .
        . . . . . . . . . f f f f f f .
        . . . . . . . . . f f . . . f f
        . . . . f f f f f f f . . . . .
        . . . f f . . f f f . . . . . .
        . . . f . . . . . . . . . . . .
        . . f f . . . . . . . . . . . .
        . . f . . . . . . . . . . . . .
        . . f . . . . . . . . . . . . .
    `],
    150,
    true
    )
})
game.onUpdate(function () {
    if (playerSprite.vy < 0) {
        playerSprite.setImage(img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . 4 4 . . . . . . . . . . .
            . . . . . . . . . 4 4 4 4 4 4 . . . . . . . . .
            . . . . . . . . 4 4 4 4 4 4 4 4 . . . . . . . .
            . . . . . . . 4 4 4 4 d d 4 4 4 4 . . . . . . .
            . . . . . . . 4 4 4 1 1 d 1 1 4 4 . . . . . . .
            . . . . . . . 4 4 4 1 6 d 1 6 4 4 . . . . . . .
            . . . . . . . 4 4 4 d d d d d 4 . . . . . . . .
            . . . . . . . 4 4 4 4 4 b b 4 . . . . . . . . .
            . . . . . . 4 4 4 d 4 4 4 4 4 . . . . . . . . .
            . . . . . . 4 4 . d d 4 4 4 . . . . . . . . . .
            . . . . . d d d e e d d 4 4 e d d d . . . . . .
            . . . . d d d d e e e d d e e e d d d . . . . .
            . . . . d d . . e e e e e e e e . d d . . . . .
            . . . . d . . . . e e e e e e . . . d . . . . .
            . . . . . . . . . e e e e e e . . . . . . . . .
            . . . . . . . . . e e e e e e . . . . . . . . .
            . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . .
            . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . .
            . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . .
            . . . . . . . . . 8 8 8 8 8 8 . . . . . . . . .
            . . . . . . . . 8 8 8 . 8 8 8 . . . . . . . . .
            . . . . . . . . f f . . f f . . . . . . . . . .
        `)
    }
    if (controller.down.isPressed()) {
        if (playerSprite.isHittingTile(CollisionDirection.Bottom)) {
            playerSprite.setImage(img`
                . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . . . . . . . . . . . . . .
                . . . . . . . . . . . 4 4 . . . . . . . . . . .
                . . . . . . . . . . 4 4 4 4 4 . . . . . . . . .
                . . . . . . . . d d 4 4 4 4 4 4 d d . . . . . .
                . . . . . . . d d 4 4 4 4 4 4 4 4 d . . . . . .
                . . . . . . . d d 4 4 d d d 4 4 4 d d . . . . .
                . . . . . . d d 4 4 4 d d d 4 4 4 d d . . . . .
                . . . . . . d d 4 4 1 6 d 1 6 4 4 d d . . . . .
                . . . . . . d d . 4 1 1 d 1 1 4 4 d . . . . . .
                . . . . . . d d e 4 d d d d d 4 4 e . . . . . .
                . . . . . . . d e e 4 d d b d 4 4 e . . . . . .
                . . . . . . . . . e 4 4 4 4 4 4 . . . . . . . .
                . . . . . . . . . 8 8 4 4 4 4 . . . . . . . . .
                . . . . . . . . . 8 8 8 4 4 8 . . . . . . . . .
                . . . . . . . . f 8 8 8 8 8 8 . . . . . . . . .
                . . . . . . . . f 8 8 8 f f . . . . . . . . . .
            `)
        }
    }
})
game.onUpdateInterval(Math.randomRange(12500, 18000), function () {
    clouds = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . .
        . . . . . . . b b . . . . . . . . . . .
        . . . . . b b b b b . . . . . . . . . .
        . . . b b b b b b b b . . . . . . . . .
        b b b b b b b b b b b b . . . b b b b b
        . . b b b b b b b b b b b b . . b b b .
        . . . . . b b b b b b b . . . . . . . .
        . . . . . . . b b b b . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . .
    `, SpriteKind.Background)
    clouds.setVelocity(6, 0)
    clouds.x = 0
    clouds.y = Math.randomRange(5, 30)
    clouds.setFlag(SpriteFlag.Ghost, true)
})
forever(function () {
    pause(Math.randomRange(950 - 0, 1450 - 0 * 1.5))
    if (Math.percentChance(Math.max(10, 65 - lvlChanceModifier * 1.5))) {
        enemyAnt = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . f . . . . f f . . . . . . . . . . . . . . . .
            f f . . . f f . . . . . . . . . . . . . . . . .
            f . . . . f . . . . . . . . . c . . . . . . . .
            f f . . f f . . . . . c c . . c . . f f f f f .
            f f . . f . . . . . . c c c . c f f c f f f f f
            . f f . f . . . . f . c . c . c f f c c f f f f
            . f f f f f . . f f f f f c c c f c c f c f f f
            . . . f f f f f f f f f f . c f f c f f c f f f
            . . f f 2 f f f f f f f c f f f c f f f f c f .
            . . f f f f . c f f f f c c f f c f f f f f c .
            . . f f f . c c . c c f c c f c c f f f f f c .
            . . . . . c c . . c . c c . f c f f f f f . c .
            . . . . . c . . c c . c . . . . . . . . . . c c
            . . . . c c . c c . . c . . . . . . . . . . . c
            . . . . c . . c . . . c . . . . . . . . . . . c
        `, Math.randomRange(-70 - lvlSpeedModifier ** expFactorMin, -80 - lvlSpeedModifier ** expFactorMax), 0)
        tiles.placeOnTile(enemyAnt, tiles.getTileLocation(9, 5))
        animation.runImageAnimation(
        enemyAnt,
        [img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . f . . . . f f . . . . . . . . . . c . . . . .
            f f . . . f f . . . . . . . . . . c c c . . . .
            f . . . . f . . . . . . . . . . . c . c c . . .
            f f . . f f . . . . . . . . . . . c f f f f f .
            f f . . f . . . . . . . . . . . f f f f f f f f
            . f f . f . . . . f . . c c . . f f f c c f f f
            . f f f f f . . f f f f f c . . f f c c c f f f
            . . . f f f f f f f f f f c . f f f c f c f f f
            . . f f 2 f f f f f f f f f c f f c f f c f f .
            . . f f f f . c f f f f f c c c f c f f c f c .
            . . f f f . . c . . c f f c f c f f f f c c c c
            . . . . . . c c . c c . f c f c f f f f f c . c
            . . . . . c c . . c . . c . . c c . . . . c . c
            . . . . c c . . c c . . c . . . c . . . . c . c
            . . . . c . . c c . . c c . . . c c . . . c . c
    `,img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . f . . f f . . . . . . . . . . . c c . . . .
            . f . . . f . . . . . . . . . . . c c c . . . .
            . f . . f f . . . . . . . . . . . c . c f f f .
            . f . . f . . . . . . . . . . . c . f f f f f f
            . f . . f . . . . . . . . . . . f f f f f f f f
            . f f . f . . . . f . . . . . . f f f c c f f f
            . . f f f f . . f f f f f c . f f f c c c f f .
            . . . f f f f f f f f f f c . f f f c f c f f .
            . . f f 2 f f f f f f f f f f f f c c f c f f .
            . . f f f f . c f f f f f c c f f c f f c f c .
            . . f f f . . c c . c . f c c f f f f f c . c .
            . . . . . . . . c c c . c f c c . . . c c . c c
            . . . . . . . c c . . c c . . c . . . c . . c c
            . . . . . . c c c c . c . . . c c . . c . . . c
            . . . . . . c . . c . c . . . . c . . c . . . c
    `,img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . f . . . . f f . . . . . . . . . . c . . . . .
            f f . . . f f . . . . . . . . . . c c c . . . .
            f . . . . f . . . . . . . . . . . c . c c . . .
            f f . . f f . . . . . . . . . . . c f f f f f .
            f f . . f . . . . . . . . . . . f f f f f f f f
            . f f . f . . . . f . . c c . . f f f c c f f f
            . f f f f f . . f f f f f c . . f f c c c f f f
            . . . f f f f f f f f f f c . f f f c f c f f f
            . . f f 2 f f f f f f f f f c f f c f f c f f .
            . . f f f f . c f f f f f c c c f c f f c f c .
            . . f f f . . c . . c f f c f c f f f f c c c c
            . . . . . . c c . c c . f c f c f f f f f c . c
            . . . . . c c . . c . . c . . c c . . . . c . c
            . . . . c c . . c c . . c . . . c . . . . c . c
            . . . . c . . c c . . c c . . . c c . . . c . c
    `,img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . f . . . . f f . . . . . . . . . . c . . . . .
            f f . . . f f . . . . . . . . . . c c . . . . .
            f . . . . f . . . . . . . . . . . c c . . . . .
            f f . . f f . . . . . . . . . . . c f f f f f .
            f f . . f . . . . . . . . . . . f f f f f f f f
            . f f . f . . . . f . . c c . . f f f c c f f f
            . f f f f f . . f f f f f c . . f f c c c f f f
            . . . f f f f f f f f f f c . f f f c f c f f f
            . . f f 2 f f f f f f f f f f f f c f f c c f .
            . . f f f f . c f f f f f c c c f c f f f c . .
            . . f f f . c c . c c f f c c c f f f f f c c .
            . . . . . c c . . c . . f f c c f f f f . . c .
            . . . . c c . . . c . . . c c c . . c . . . c .
            . . . . c . . . . c . . . c . c . . c . . . c c
            . . . c c . . . . . c . . c . c c . c . . . . c
        `],
        100,
        true
        )
    } else if (Math.percentChance(Math.min(65, 35 + lvlChanceModifier))) {
        enemyVehicle = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . 2 2 2 2 . 2 2 . . . . . .
            . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . .
            . . . . . . . . . 2 2 2 2 2 . . . . . . . . . .
            . . . . . . . . . c c c c c c c c . . . . . . .
            . . . . . . . . . c c c c c c c . c . . . . . .
            . . . . . . . . . 2 d d d d . . c . . . . . . .
            . . . . . . . . . d d d d d . . . c . . . . . .
            . . . . . . . . . . d d d d . . . . . . . . . .
            . . . . . b b b b b d d d d b b b b b . . . . .
            . . . . . b b b b b b d d d b b b b b b . . . .
            . . . . . b b 1 1 e e e e e e e e e e 1 1 . . .
            . . . . . b b 1 e e e e e e e e e e e e 1 . . .
            . . . . . b b e e e e e e e e e e e e e e . . .
            . . 1 1 . b b e e e e e e e e e e e e e e . . .
            1 1 1 1 1 1 1 e e e e e e e e e e e e e e . . .
            . . . . . b b e e e e e e e e e e e e e e . . .
            . . . . . b b e e e e e e e e e e e e e e . . .
            . . . . . b b e e e e e e e e e e e e e e . . .
            . . . . . d b e e e e e e e e e e e e e e . . .
            . . . . . d d e e e e e e e e e e e e e e . . .
            . . . . . f f d e e e e e e e e e e e e d . . .
            . . . . . . . d d e e e e e e e e e e d d . . .
            . . . . . . . . f f f . . . . . . . f f f . . .
        `, Math.randomRange(-75 - lvlSpeedModifier ** 1.1, -90 - lvlSpeedModifier ** 1.2), 0)
        tiles.placeOnTile(enemyVehicle, tiles.getTileLocation(9, 5))
        animation.runImageAnimation(
        enemyVehicle,
        [img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . 2 2 2 2 . 2 2 . . . . . .
            . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . .
            . . . . . . . . . 2 2 2 2 2 . . . . . . . . . .
            . . . . . . . . . c c c c c c c c . . . . . . .
            . . . . . . . . . c c c c c c c . c . . . . . .
            . . . . . . . . . 2 d d d d . . c . . . . . . .
            . . . . . . . . . d d d d d . . . c . . . . . .
            . . . . . . . . . . d d d d . . . . . . . . . .
            . . . . . b b b b b d d d d b b b b b . . . . .
            . . . . . b b b b b b d d d b b b b b b . . . .
            . . . . . b b 1 1 e e e e e e e e e e 1 1 . . .
            . . . . . b b 1 e e e e e e e e e e e e 1 . . .
            . . 1 1 . b b e e e e e e e e e e e e e e . . .
            . 1 . . . b b e e e e e e e e e e e e e e . . .
            1 1 1 1 1 1 1 e e e e e e e e e e e e e e . . .
            . . . . . b b e e e e e e e e e e e e e e . . .
            . . . . . b b e e e e e e e e e e e e e e . . .
            . . . . . b b e e e e e e e e e e e e e e . . .
            . . . . . d b e e e e e e e e e e e e e e . . .
            . . . . . d d e e e e e e e e e e e e e e . . .
            . . . . . f f d e e e e e e e e e e e e d . . .
            . . . . . . . d d e e e e e e e e e e d d . . .
            . . . . . . . . f f f . . . . . . . f f f . . .
    `,img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . 2 2 2 2 . 2 2 . . . . . .
            . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . .
            . . . . . . . . . 2 2 2 2 2 . . . . . . . . . .
            . . . . . . . . . c c c c c c c c . . . . . . .
            . . . . . . . . . c c c c c c c . c . . . . . .
            . . . . . . . . . 2 d d d d . . c . . . . . . .
            . . . . . . . . . d d d d d . . . c . . . . . .
            . . . . . . . . . . d d d d . . . . . . . . . .
            . . . . . b b b b b d d d d b b b b b . . . . .
            . . . . . b b b b b b d d d b b b b b b . . . .
            . . . . . b b 1 1 e e e e e e e e e e 1 1 . . .
            . . . . . b b 1 e e e e e e e e e e e e 1 . . .
            . . . . . b b e e e e e e e e e e e e e e . . .
            . . 1 1 . b b e e e e e e e e e e e e e e . . .
            1 1 1 1 1 1 1 e e e e e e e e e e e e e e . . .
            . . . . . b b e e e e e e e e e e e e e e . . .
            . . . . . b b e e e e e e e e e e e e e e . . .
            . . . . . b b e e e e e e e e e e e e e e . . .
            . . . . . d b e e e e e e e e e e e e e e . . .
            . . . . . d d e e e e e e e e e e e e e e . . .
            . . . . . f f d e e e e e e e e e e e e d . . .
            . . . . . . . d d e e e e e e e e e e d d . . .
            . . . . . . . . f f f . . . . . . . f f f . . .
    `,img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . 2 2 2 2 . 2 2 . . . . . .
            . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . .
            . . . . . . . . . 2 2 2 2 2 . . . . . . . . . .
            . . . . . . . . . c c c c c c c c . . . . . . .
            . . . . . . . . . c c c c c c c . c . . . . . .
            . . . . . . . . . 2 d d d d . . c . . . . . . .
            . . . . . . . . . d d d d d . . . c . . . . . .
            . . . . . . . . . . d d d d . . . . . . . . . .
            . . . . . b b b b b d d d d b b b b b . . . . .
            . . . . . b b b b b b d d d b b b b b b . . . .
            . . . . . b b 1 1 e e e e e e e e e e 1 1 . . .
            . . . . . b b 1 e e e e e e e e e e e e 1 . . .
            . . . . . b b e e e e e e e e e e e e e e . . .
            . . . . . b b e e e e e e e e e e e e e e . . .
            1 1 1 1 1 1 1 e e e e e e e e e e e e e e . . .
            . . 1 1 . b b e e e e e e e e e e e e e e . . .
            . . . . . b b e e e e e e e e e e e e e e . . .
            . . . . . b b e e e e e e e e e e e e e e . . .
            . . . . . d b e e e e e e e e e e e e e e . . .
            . . . . . d d e e e e e e e e e e e e e e . . .
            . . . . . f f d e e e e e e e e e e e e d . . .
            . . . . . . . d d e e e e e e e e e e d d . . .
            . . . . . . . . f f f . . . . . . . f f f . . .
    `,img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . 2 2 2 2 . 2 2 . . . . . .
            . . . . . . . . . 2 2 2 2 2 2 2 . . . . . . . .
            . . . . . . . . . 2 2 2 2 2 . . . . . . . . . .
            . . . . . . . . . c c c c c c c c . . . . . . .
            . . . . . . . . . c c c c c c c . c . . . . . .
            . . . . . . . . . 2 d d d d . . c . . . . . . .
            . . . . . . . . . d d d d d . . . c . . . . . .
            . . . . . . . . . . d d d d . . . . . . . . . .
            . . . . . b b b b b d d d d b b b b b . . . . .
            . . . . . b b b b b b d d d b b b b b b . . . .
            . . . . . b b 1 1 e e e e e e e e e e 1 1 . . .
            . . . . . b b 1 e e e e e e e e e e e e 1 . . .
            . . . . . b b e e e e e e e e e e e e e e . . .
            . . . . . b b e e e e e e e e e e e e e e . . .
            1 1 1 1 1 1 1 e e e e e e e e e e e e e e . . .
            . 1 . . . b b e e e e e e e e e e e e e e . . .
            . . 1 1 . b b e e e e e e e e e e e e e e . . .
            . . . . . b b e e e e e e e e e e e e e e . . .
            . . . . . d b e e e e e e e e e e e e e e . . .
            . . . . . d d e e e e e e e e e e e e e e . . .
            . . . . . f f d e e e e e e e e e e e e d . . .
            . . . . . . . d d e e e e e e e e e e d d . . .
            . . . . . . . . f f f . . . . . . . f f f . . .
        `],
        50,
        true
        )
    } else {
        enemyBird = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . f . . . . . . . . .
            . . . . . . . . . . . . . . f . . . . . . . . .
            . . . . . . . . . . . . . f f f . . . . . . . .
            . . . . . . . . . . . . f f f f . . . . . . . .
            . . . . . . . . . . . f f f f f f f f f . . . .
            . . . . . f f f f . f f f f f f f f f f f f . .
            . . . . f f f f f f f f f f f f f f f f f f f f
            . . . . f f f f f f f f f f f f f f f f f f f f
            . . . . f 2 f f f f f f f f f f f f f f f f f .
            . . . 4 f f f f f f f f f f f f f f f f . . . .
            . . . . . . . . . . b f f f f f f f b . . . . .
            . . . . . . . . . . b b f f f f f b b . . . . .
            . . . . . . . . . . . b b f f f b b . . . . . .
            . . . . . . . . . . . . b b f f b . . . . . . .
            . . . . . . . . . . . . . b b b b . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
        `, Math.randomRange(-80 - lvlSpeedModifier ** 1.1, -95 - lvlSpeedModifier ** 1.2), 0)
        tiles.placeOnTile(enemyBird, tiles.getTileLocation(9, 4))
        animation.runImageAnimation(
        enemyBird,
        [img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . f f f . . . f f f f f f f f f . . . .
            . . . . f f f f f . f f f f f f f f f f f f . .
            . . . . f f f f f f f f f f f f f f f f f f f f
            . . . . f 2 f f f f f f f f f f f f f f f f f f
            . . . 4 f f f f f f f f f f f f f f f f f f f .
            . . . . . . . . f f f f f f f f f f f f . . . .
            . . . . . . . . . f f f f f f f f f f . . . . .
            . . . . . . . . . . . f f f f f f f . . . . . .
            . . . . . . . . . . . . f f f f f f . . . . . .
            . . . . . . . . . . . . . f f f f . . . . . . .
            . . . . . . . . . . . . . f f f f . . . . . . .
            . . . . . . . . . . . . . . f f f . . . . . . .
            . . . . . . . . . . . . . . . f . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . f . . . . . . . . .
            . . . . . . . . . . . . . . f . . . . . . . . .
            . . . . . . . . . . . . . f f f . . . . . . . .
            . . . . . . . . . . . . f f f f . . . . . . . .
            . . . . . . . . . . . f f f f f f f f f . . . .
            . . . . . f f f f . f f f f f f f f f f f f . .
            . . . . f f f f f f f f f f f f f f f f f f f f
            . . . . f f f f f f f f f f f f f f f f f f f f
            . . . . f 2 f f f f f f f f f f f f f f f f f .
            . . . 4 f f f f f f f f f f f f f f f f . . . .
            . . . . . . . . . . . f f f f f f f . . . . . .
            . . . . . . . . . . . . f f f f f . . . . . . .
            . . . . . . . . . . . . . f f f . . . . . . . .
            . . . . . . . . . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
    `,img`
            . . . . . . . . . . . . . . . f . . . . . . . .
            . . . . . . . . . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . . f f . . . . . . . .
            . . . . . . . . . . . . . f f f . . . . . . . .
            . . . . . . . . . . . . f f f f f . . . . . . .
            . . . . . . . . . . . f f f f f f f f f . . . .
            . . . . . f f f f . f f f f f f f f f f f f . .
            . . . . f f f f f f f f f f f f f f f f f f f f
            . . . . f f f f f f f f f f f f f f f f f f f f
            . . . . f 2 f f f f f f f f f f f f f f f f f .
            . . . 4 f f f f f f f f f f f f f f f f . . . .
            . . . . . . . . . . . . . f f f f f f . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . . . . . . . . . .
        `],
        150,
        true
        )
    }
})
