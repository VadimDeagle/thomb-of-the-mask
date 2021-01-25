controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        mySprite.setVelocity(0, -200)
    }
})
function levelSelect () {
    eatlist = []
    if (level == 1) {
        scene.setTileMap(img`
            ....................
            ....................
            .aaaaaaaaaaaaaaaaaa.
            .aaaaaaaaaaaaaaaaaa.
            .aa..............aa.
            .aa.4eeeeeeeeeeeeaa.
            .aa.eaaaaaaaa...eaa.
            .aa.ea..........eaa.
            .aa.ea..eeeeeeeeeaa.
            .aa.ea..aaaaaaaaaaa.
            .22..............9a.
            .22eeeeeeeeeeeeee9a.
            .2222aaaaaaaaaaaaaa.
            .2222aaaaaaaaaaaaaa.
            ....................
            ....................
            `, TileScale.Eight)
    } else if (level == 2) {
        scene.setTileMap(img`
            ....................
            .....a........a.....
            .....a........a.....
            ..aaaaaaaaaaaaaaaa..
            ..a..............a..
            ..a.4eeeeeeeeeeeea..
            ..a.eaaaaaaaa...ea..
            ..a.ea..........ea..
            ..a.ea..eeeeeeeeea..
            ..a.ea..aaaaaaaaaa..
            ..2..............9..
            ..2eeeeeeeeeeeeee9..
            ..222aaaaaaaaaaaaa..
            ....................
            ....................
            ....................
            `, TileScale.Eight)
    } else if (level == 3) {
        scene.setTileMap(img`
            ....................
            .....aaaaaaaaaa.....
            .....aeeeeeeeea.....
            ..aaaa........aaaa..
            ..a..............a..
            ..a.4eeeeeeaeeeeea..
            ..a.eaaaaaaaa...ea..
            ..a.ea..........ea..
            ..a.ea..eeeeeeeeea..
            ..a.ea..aaaaaaaaaa..
            ..2..............9..
            ..2eeeeeeeeeeeeee9..
            ..222aaaaaaaaaaaaa..
            ....................
            ....................
            ....................
            `, TileScale.Eight)
    } else {
        game.over(true)
    }
    tile_list = scene.getTilesByType(14)
    for (let value of tile_list) {
        eatlist.unshift(sprites.create(img`
            . 5 . 
            5 5 5 
            . 5 . 
            `, SpriteKind.Food))
        scene.place(value, eatlist[0])
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        mySprite.setVelocity(-200, 0)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        mySprite.setVelocity(200, 0)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vx == 0 && mySprite.vy == 0) {
        mySprite.setVelocity(0, 200)
    }
})
scene.onHitTile(SpriteKind.Player, 9, function (sprite) {
    game.showLongText("Уровень " + level + " пройден!", DialogLayout.Center)
    level += 1
    levelSelect()
    scene.placeOnRandomTile(mySprite, 4)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    info.changeLifeBy(-1)
    scene.placeOnRandomTile(mySprite, 4)
})
let tile_list: tiles.Tile[] = []
let eatlist: Sprite[] = []
let mySprite: Sprite = null
let level = 0
info.setLife(3)
level = 1
levelSelect()
scene.setTile(4, img`
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    `, false)
scene.setTile(9, img`
    . 5 5 5 5 5 5 . 
    5 . . . . . . 5 
    5 . 5 5 5 5 . 5 
    5 . 5 . . 5 . 5 
    5 . 5 . . 5 . 5 
    5 . 5 5 5 5 . 5 
    5 . . . . . . 5 
    . 5 5 5 5 5 5 . 
    `, true)
scene.setTile(2, img`
    2 . 2 . 2 . 2 . 
    2 . 2 . 2 . 2 . 
    2 . 2 . 2 . 2 . 
    2 . 2 . 2 . 2 . 
    2 . 2 . 2 . 2 . 
    2 . 2 . 2 . 2 . 
    2 . 2 . 2 . 2 . 
    2 . 2 . 2 . 2 . 
    `, true)
scene.setTile(10, img`
    e e e e e e e e 
    4 4 4 e 4 4 4 4 
    e e e e e e e e 
    4 4 e 4 4 4 4 e 
    e e e e e e e e 
    4 4 4 4 4 e 4 4 
    e e e e e e e e 
    e 4 4 4 4 4 4 4 
    `, true)
scene.setTile(14, img`
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    . . . . . . . . 
    `, false)
mySprite = sprites.create(img`
    f . . . . . . . . . . . . f 
    . 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . . 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . . 5 5 5 . 5 5 5 . 5 . 
    . . 5 . 5 5 5 . 5 5 5 . 5 . 
    . 5 5 . 5 5 5 5 5 5 5 5 5 . 
    . 5 5 . 5 5 5 . . . . 5 5 . 
    . 5 5 . 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 . 5 5 5 5 5 5 5 . . 
    . . 5 5 . . . . . . . . . . 
    . . 5 . 5 5 5 5 5 5 5 5 . . 
    . . 5 . 5 5 5 5 . . 5 5 . . 
    . . 5 . 5 5 5 5 . . 5 5 . . 
    f . . . . . . . . . . . . f 
    `, SpriteKind.Player)
scene.placeOnRandomTile(mySprite, 4)
scene.cameraFollowSprite(mySprite)
