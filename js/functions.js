import { background, bird, land, pipe, getReady, gameOver, score, medal, restartButton} from "./object.js";

const draw = () => {
    background.draw();
    getReady.draw();
    pipe.draw();
    bird.draw();
    land.draw();
    gameOver.draw();
    score.draw();
    // restartButton.draw();
    medal.draw();
}

const animations = () => {
    land.landAnimation();
    bird.flyAnimation();
    bird.fall();
    pipe.pipeAnimation();
}

export {draw, animations};