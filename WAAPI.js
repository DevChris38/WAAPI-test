const ball = document.querySelector('#ball');
const duree = document.querySelector('#duree');

duree.addEventListener("input", (event) => {
    value.textContent = `Vitesse : ${event.target.value}`;
})
let ballAnimationFrames = new KeyframeEffect(
    ball,
    [
        { transform: "translateY(0)" },
        { transform: "translateY(calc(900%*(10.89/100))", offset: 0.12 },
        { transform: "translateY(calc(900%*(43.56/100))", offset: 0.24 },
        { transform: "translateY(calc(900%*(98.01/100))", offset: 0.36 },
        { transform: "translateY(calc(900%*(55.02/100))", offset: 0.54 },
        { transform: "translateY(calc(900%*(95.37/100))", offset: 0.74 },
        { transform: "translateY(calc(900%*(85.75/100))", offset: 0.82 },
        { transform: "translateY(calc(900%*(99.34/100))", offset: 0.92 },
        { transform: "translateY(calc(900%*(98.46/100))", offset: 0.96 },
        { transform: "translateY(calc(900%*(100/100))", offset: 1 },
    ], {
    duration: 1000,
},
);

let ballAnimation = new Animation(ballAnimationFrames, document.timeline);

ball.addEventListener("click", (event) => {
    event.preventDefault();
    ballAnimation.playbackRate = duree.value;
    console.log(duree.value);
    ballAnimation.play();
});