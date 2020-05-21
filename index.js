
const sounds = document.querySelectorAll(".sound");
const pads = document.querySelectorAll(".pads div");
const visual = document.querySelector(".visual");





const spillLyd = (evt)  => {
    let tast;

    if(evt.type === "click") {
        tast = evt.target.dataset.key;   
    } else {
        tast = evt.keyCode;
    }
    
    const lyd = document.querySelector(`audio[data-key="${tast}"]`);
    if(!lyd) {
        return;
    }
    
    const key = document.querySelector(`main div[data-key="${tast}"]`);
    key.animate(
        [
            { transform: "scale(1.2)", backgroundColor: "black" },
            { transform: "scale(1.0)", backgroundColor: "transparent" }    
        ],
        100
    );
    
    lyd.currentTime = 0;
    lyd.play();
    LagBaller();
}


const LagBaller = () => {
    const ball = document.createElement("div");
    visual.appendChild(ball);
    ball.style.backgroundColor = 'white';
    ball.style.animation = `jump 2s ease`;
    ball.addEventListener("animationend", function() {
        visual.removeChild(this);
      });
    
}

const knapper = document.querySelectorAll("main div");
for(const knapp of knapper) {
    knapp.addEventListener("click", spillLyd);
}

document.addEventListener("keydown", spillLyd);






