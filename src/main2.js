//-------------------------------------------------------------- Intro 2 ---------------------------------------------------------------//

$(window).on("load",function() {
	$(".loader-wrapper").fadeOut("slow");
})


//-------------------------------------------------------------- Flipping Bookg ---------------------------------------------------------------//

// References to DOM elements
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const book = document.querySelector('#book');

const paper1 = document.querySelector('#p1');
const paper2 = document.querySelector('#p2');
const paper3 = document.querySelector('#p3');
const paper4 = document.querySelector('#p4');
const paper5 = document.querySelector('#p5');




// Event listeners
prevBtn.addEventListener("click", goPrevious);
nextBtn.addEventListener("click", goNext);

// Business Logic
let currentState = 1;
let numOfPapers = 5;
let maxState = numOfPapers + 1;


function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isFirstPage) {
    if(isFirstPage) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNext() {
    if(currentState < maxState) { 
        switch(currentState) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                closeBook(false);
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                break;
            default: 
                throw new Error("unkown state");    
        }

        currentState++;
    }
}

function goPrevious() {
    if(currentState > 1) {
        switch(currentState) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 5;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4;
                break;
            case 4: 
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                break;
            case 6: 
                openBook()
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 1;
                break;
        }

        currentState--;
    }
}

//-------------------------------------------------------------- Click Questions ---------------------------------------------------------------//

$(document).ready(function($){ 

    $('#right1').on({
        'click': function(){
            $('.choice-button #right1').css("border", "solid #67D967 3px");
            $('.choice-button #right1').css("background-color", "#84EFB1");
            $('.choice-button #right1').css("color", "white");
        }
    })

    $('#wrong2').on({
        'click': function(){
            $('.choice-button #wrong2').css("border", "solid red 3px");
            $('.choice-button #wrong2').css("background-color", "#FFAFAF");
            $('.choice-button #wrong2').css("color", "white");
        }
    })

    $('#wrong3').on({
        'click': function(){
            $('.choice-button #wrong3').css("border", "solid red 3px");
            $('.choice-button #wrong3').css("background-color", "#FFAFAF");
            $('.choice-button #wrong3').css("color", "white");
        }
    })

    $('#wrong4').on({
        'click': function(){
            $('.choice-button #wrong4').css("border", "solid red 3px");
            $('.choice-button #wrong4').css("background-color", "#FFAFAF");
            $('.choice-button #wrong4').css("color", "white");
        }
    })

    $('#right5').on({
        'click': function(){
            $('.choice-button #right5').css("border", "solid #67D967 3px");
            $('.choice-button #right5').css("background-color", "#84EFB1");
            $('.choice-button #right5').css("color", "white");
        }
    })

    $('#wrong6').on({
        'click': function(){
            $('.choice-button #wrong6').css("border", "solid red 3px");
            $('.choice-button #wrong6').css("background-color", "#FFAFAF");
            $('.choice-button #wrong6').css("color", "white");
        }
    })

    $('#wrong7').on({
        'click': function(){
            $('.choice-button #wrong7').css("border", "solid red 3px");
            $('.choice-button #wrong7').css("background-color", "#FFAFAF");
            $('.choice-button #wrong7').css("color", "white");
        }
    })

    $('#right8').on({
        'click': function(){
            $('.choice-button #right8').css("border", "solid #67D967 3px");
            $('.choice-button #right8').css("background-color", "#84EFB1");
            $('.choice-button #right8').css("color", "white");
        }
    })

    $('#wrong9').on({
        'click': function(){
            $('.choice-button #wrong9').css("border", "solid red 3px");
            $('.choice-button #wrong9').css("background-color", "#FFAFAF");
            $('.choice-button #wrong9').css("color", "white");
        }
    })

    $('#orange').on({
        'click': function(){
            $('.choice-button-color #orange').css("border", "solid red 5px");
        }
    })

    $('#yellow').on({
        'click': function(){
            $('.choice-button-color #yellow').css("border", "solid red 5px");
        }
    })

    $('#purple').on({
        'click': function(){
            $('.choice-button-color #purple').css("border", "solid #67D967 5px");
        }
    })


    });