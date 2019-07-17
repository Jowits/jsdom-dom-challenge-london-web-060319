

// document.addEventListener('DOMContentLoeaded',function
    const display = document.querySelector("h1#counter");
    const lower = document.querySelector("button#smaller");
    const larger = document.querySelector("button#larger");
    const heart = document.querySelector("button#heart");
    const pause = document.querySelector("button#pause");
    const likes = document.querySelector("ul.likes");
    const comments = document.querySelector("input")
    const commentsDisplay = document.querySelector(".comments")
    let number = 0;

    let intervalId = setInterval(runFunction, 1000);

    function runFunction() {
        display.innerText = number++;

    };
    
    pause.addEventListener("click", pauseEventHandler);

    function pauseEventHandler(e) {
        clearInterval(intervalId);
        pause.innerHTML = "resume";
        pause.removeEventListener("click", pauseEventHandler);
        pause.addEventListener("click", resumeEventHandler);
    };

    function resumeEventHandler(e) {
        intervalId = setInterval(runFunction, 1000);
        pause.innerHTML = "pause";
        pause.removeEventListener("click", pauseEventHandler);
        pause.addEventListener("click", resumeEventHandler);
    };
    

    heart.addEventListener("click", heartEventHandler);
    
    function heartEventHandler(e) {
       const newLi = document.createElement("li")
       newLi.innerText = `${display.innerText} has been liked`
       likes.appendChild(newLi)
    };

    lower.addEventListener("click", lowerEventHandler);

    function lowerEventHandler(e) {
        display.innerText = number--;
    };

    larger.addEventListener("click", largerEventHandler) 

    function largerEventHandler(e) {
        display.innerText = number++;
    };
    
    comments.addEventListener("change", commentEventHandler)
    
    function commentEventHandler(e) { 
    const newLi = document.createElement("li");
    newLi.innerText = this.value
    commentsDisplay.appendChild(newLi)

    }


