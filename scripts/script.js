var btns = document.querySelectorAll(".rating-btn");
var submitBtn = document.querySelector(".button-submit");
var main = document.querySelector("#main");
var secondary = document.querySelector("#secondary");
var activeButton = document.querySelector(".active");
var score = document.querySelector("#score");


function handleRatingButtonClick(e){
    if(activeButton)
        activeButton.classList.toggle("active");
    e.target.classList.toggle("active");
    activeButton = e.target;
}

function handleSubmit(){
    if(activeButton){
        main.classList.toggle("hidden");
        secondary.classList.toggle("hidden");
        score.textContent = activeButton.textContent;
    }
}

function closeSecondary(){
    secondary.classList.toggle("hidden");
    main.classList.toggle("hidden");
}

btns.forEach(b => 
        b.addEventListener("click", handleRatingButtonClick)
    );

submitBtn.addEventListener("click", handleSubmit);

secondary.addEventListener("click", closeSecondary)