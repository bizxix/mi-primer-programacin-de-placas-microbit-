input.onButtonPressed(Button.A, function () {
    basic.showString("Hello!")
})
input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("C C5 F C5 F C A F ", 120), music.PlaybackMode.UntilDone)
})
