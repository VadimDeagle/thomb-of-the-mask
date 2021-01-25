def on_up_pressed():
    if mySprite.vx == 0 and mySprite.vy == 0:
        mySprite.set_velocity(0, -200)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    if mySprite.vx == 0 and mySprite.vy == 0:
        mySprite.set_velocity(-200, 0)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_hit_tile(sprite):
    global myTile
    myTile = scene.get_tile(0, 0)
    info.change_score_by(1)
    scene.place(myTile, mySprite)
scene.on_hit_tile(SpriteKind.player, 7, on_hit_tile)

def on_right_pressed():
    if mySprite.vx == 0 and mySprite.vy == 0:
        mySprite.set_velocity(200, 0)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    if mySprite.vx == 0 and mySprite.vy == 0:
        mySprite.set_velocity(0, 200)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_hit_tile2(sprite):
    game.show_long_text("Win Level 01", DialogLayout.CENTER)
scene.on_hit_tile(SpriteKind.player, 9, on_hit_tile2)

def on_hit_tile3(sprite):
    info.change_life_by(-1)
    scene.place_on_random_tile(mySprite, 4)
scene.on_hit_tile(SpriteKind.player, 2, on_hit_tile3)

myTile: tiles.Tile = None
mySprite: Sprite = None
info.set_life(3)
level = 1
scene.set_tile_map(img("""
        ....................
            ....................
            ....................
            ..3333333333333333..
            ..3..............3..
            ..3.47777777777773..
            ..3.733333333...73..
            ..3.73..........73..
            ..3.73..7777777773..
            ..3.73..3333333333..
            ..2..............9..
            ..2777777777777779..
            ..2223333333333333..
            ....................
            ....................
            ....................
    """),
    TileScale.EIGHT)
scene.set_tile(3,
    img("""
        . 5 5 5 5 5 5 . 
            5 5 . 5 . 5 . 5 
            5 . 5 . 5 . 5 5 
            5 5 . 5 . 5 . 5 
            5 . 5 . 5 . 5 5 
            5 5 . 5 . 5 . 5 
            5 . 5 . 5 . 5 5 
            . 5 5 5 5 5 5 .
    """),
    True)
scene.set_tile(4,
    img("""
        . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . . 
            . . . . . . . .
    """),
    False)
scene.set_tile(9,
    img("""
        . 5 5 5 5 5 5 . 
            5 . . . . . . 5 
            5 . 5 5 5 5 . 5 
            5 . 5 . . 5 . 5 
            5 . 5 . . 5 . 5 
            5 . 5 5 5 5 . 5 
            5 . . . . . . 5 
            . 5 5 5 5 5 5 .
    """),
    True)
scene.set_tile(2,
    img("""
        2 . 2 . 2 . 2 . 
            2 . 2 . 2 . 2 . 
            2 . 2 . 2 . 2 . 
            2 . 2 . 2 . 2 . 
            2 . 2 . 2 . 2 . 
            2 . 2 . 2 . 2 . 
            2 . 2 . 2 . 2 . 
            2 . 2 . 2 . 2 .
    """),
    True)
scene.set_tile(7,
    img("""
        . . . . . . . . 
            . . . . . . . . 
            . . . 5 5 . . . 
            . . 5 . . 5 . . 
            . . 5 5 . 5 . . 
            . . . 5 5 . . . 
            . . . . . . . . 
            . . . . . . . .
    """),
    False)
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
scene.place_on_random_tile(mySprite, 4)