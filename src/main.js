

const intro = document.querySelector('.intro');
const logo = document.querySelector('.logo-header');
const logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

  setTimeout(()=>{

    logoSpan.forEach((span, idx)=>{
      setTimeout(()=>{
        span.classList.add('active');
      }, (idx + 1) * 800)
    });

    setTimeout(()=>{

      logoSpan.forEach((span, idx)=>{
        setTimeout(()=>{
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 50)
      })
      
      },7800);

      setTimeout(()=>{
        intro.style.top = '-100vh';
      },4600)

  })
})

console.log(logoSpan);

//-------------------------------------------------------------- Intro 2 ---------------------------------------------------------------//

$(window).on("load",function() {
	$(".loader-wrapper").fadeOut("slow");
})

//-------------------------------------------------------------- Flipping Book ---------------------------------------------------------------//

// References to DOM elements
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const book = document.querySelector('#book');

const paper1 = document.querySelector('#p1');
const paper2 = document.querySelector('#p2');
const paper3 = document.querySelector('#p3');
const paper4 = document.querySelector('#p4');
const paper5 = document.querySelector('#p5');
const paper6 = document.querySelector('#p6');
const paper7 = document.querySelector('#p7');



// Event listeners
prevBtn.addEventListener("click", goPrevious);
nextBtn.addEventListener("click", goNext);

// Business Logic
let currentState = 1;
let numOfPapers = 7;
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
                paper5.classList.add("flipped");
                paper5.style.zIndex = 5;
                break;
            case 6:
                paper6.classList.add("flipped");
                paper6.style.zIndex = 6;
                break;
            case 7:
                paper7.classList.add("flipped");
                paper7.style.zIndex = 7;
                closeBook(false);
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
                paper1.style.zIndex = 20;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 19;
                break;
            case 4: 
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 18;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 17;
                break;
            case 6: 
                paper5.classList.remove("flipped");
                paper5.style.zIndex = 16;
                break;
            case 7:
                paper6.classList.remove("flipped");
                paper6.style.zIndex = 15;
                break;
            case 8: 
                openBook()
                paper7.classList.remove("flipped");
                paper7.style.zIndex = 14;
                break;
            default:
                throw new Error("unknown state");
        }

        currentState--;
    }
}


//-------------------------------------------------------------- Audio ---------------------------------------------------------------//


const audio1 = new Audio();
const audio2 = new Audio();
const audio3 = new Audio();
const audio4 = new Audio();
const audio5 = new Audio();
const audio6 = new Audio();
const audioWrong = new Audio();
const audioRight = new Audio();
const audioPage = new Audio();
const audioButton = new Audio();


audio1.src = "../audio/1. Formen_Audio_Würfel.wav";
audio2.src = "../audio/6. Formen_Audio_Quadrat.wav";
audio3.src = "../audio/2. Formen_Audio_Rechteck.wav";
audio4.src = "../audio/3. Formen_Audio_Dreieck.wav";
audio5.src = "../audio/4. Formen_Audio_Kreis.wav";
audio6.src = "../audio/5. Formen_Audio_Kugel.wav";
audioWrong.src = "../audio/Incorrect Answer.mp3";
audioRight.src = "../audio/Quiz Correct Answer 1.mp3";
audioPage.src = "../audio/page-turning.mp3";
audioButton.src = "../audio/Load Game Button 1.mp3";




