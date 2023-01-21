let winSound = new Audio("win.wav");  
let loseSound = new Audio("lose.wav");
let bgm = new Audio("bgm.mp3");

$( function() {
    $( "#startFourte" ).sortable();
  } );

//This function is used for Hamburger menu bar in starting page

function anime(){
    document.getElementById("nav-icon2").classList.toggle('open');
    document.getElementById("optionsDiv").classList.toggle("animationForOption");
    if(document.getElementById("nav-icon2").className=="open"){
         document.getElementById("optionsDiv").style.width="90%";
    }
    if(document.getElementById("nav-icon2").className!="open"){
        document.getElementById("optionsDiv").style.width="0%";
    }
}

// This function is used for music in Fourtee

function musicFunc(element){
    if(localStorage.getItem("sound")=="true"){
        
        element.innerText="MUSIC:OFF";
        localStorage.setItem("sound",false);
        winSound.volume=0;
        loseSound.volume=0;
        bgm.volume=0;
    }
    else{
        element.innerText="MUSIC:ON";
        localStorage.setItem("sound",true);
        winSound.volume=1;
        loseSound.volume=1;
        bgm.volume=1;
    }
}

// This function reset all score in Fourtee

function resetScore(){
    localStorage.setItem("scoreForEndless1",0);
    localStorage.setItem("scoreForTimed1",0);
}

// This function works when page get reloaded

function themeChange(){
    if(localStorage.getItem("theme")=="theme1"){
        localStorage.setItem("theme","theme2");
        document.body.style.backgroundColor = "#1F2041";
        for (let i = 0; i <=document.querySelectorAll(".themeForPink").length-1 ; i++) {
            document.querySelectorAll(".themeForPink")[i].style.backgroundColor = "#19647E";
            document.querySelectorAll(".themeForPink")[i].style.color = "#1F2041";
        }
        for (let j = 0; j <=document.querySelectorAll(".themeForBlue").length-1 ; j++) {
            document.querySelectorAll(".themeForBlue")[j].style.backgroundColor = "#4B3F72";
            document.querySelectorAll(".themeForBlue")[j].style.color = "#1F2041";
            
        }
    
    }
    else if(localStorage.getItem("theme")=="theme2"){
        localStorage.setItem("theme","theme3");
        document.body.style.backgroundColor = "black";
        for (let i = 0; i <=document.querySelectorAll(".themeForPink").length-1 ; i++) {
            document.querySelectorAll(".themeForPink")[i].style.backgroundColor = "#555555";
            document.querySelectorAll(".themeForPink")[i].style.color = "black";
        }
        for (let j = 0; j <=document.querySelectorAll(".themeForBlue").length-1 ; j++) {
            document.querySelectorAll(".themeForBlue")[j].style.backgroundColor = "#333333";
            document.querySelectorAll(".themeForBlue")[j].style.color = "black";
        }
    }    
    else if(localStorage.getItem("theme")=="theme3"){
        localStorage.setItem("theme","theme4");
        document.body.style.backgroundColor = "#2B1B24";
        for (let i = 0; i <=document.querySelectorAll(".themeForPink").length-1 ; i++) {
            document.querySelectorAll(".themeForPink")[i].style.backgroundColor = "#A48068";
            document.querySelectorAll(".themeForPink")[i].style.color = "#2B1B24";
        }
        for (let j = 0; j <=document.querySelectorAll(".themeForBlue").length-1 ; j++) {
            document.querySelectorAll(".themeForBlue")[j].style.backgroundColor = "#86425A";
            document.querySelectorAll(".themeForBlue")[j].style.color = "#2B1B24";
        }
    }   
    else if(localStorage.getItem("theme")=="theme4"){
        localStorage.setItem("theme","theme5");
        document.body.style.backgroundColor = "#11344B";
        for (let i = 0; i <=document.querySelectorAll(".themeForPink").length-1 ; i++) {
            document.querySelectorAll(".themeForPink")[i].style.backgroundColor = "#DA6C95";
            document.querySelectorAll(".themeForPink")[i].style.color = "#11344B";
        }
        for (let j = 0; j <=document.querySelectorAll(".themeForBlue").length-1 ; j++) {
            document.querySelectorAll(".themeForBlue")[j].style.backgroundColor = "#865476";
            document.querySelectorAll(".themeForBlue")[j].style.color = "#11344B";
        }
    }   
    else if(localStorage.getItem("theme")=="theme5"){
        localStorage.setItem("theme","theme1");
        document.body.style.backgroundColor = "white";
        for (let i = 0; i <=document.querySelectorAll(".themeForPink").length-1 ; i++) {
        document.querySelectorAll(".themeForPink")[i].style.backgroundColor = "#E8567C";
        document.querySelectorAll(".themeForPink")[i].style.color = "white";
        }
        for (let j = 0; j <=document.querySelectorAll(".themeForBlue").length-1 ; j++) {
        document.querySelectorAll(".themeForBlue")[j].style.backgroundColor = "#19C3E2";
        document.querySelectorAll(".themeForBlue")[j].style.color = "white";
        }
    }   
    }

// This function is used to change theme in starting page

 function themeChangeForStart(){
    if(localStorage.getItem("theme")=="theme2"){
        document.body.style.backgroundColor = "#1F2041";
        for (let i = 0; i <=document.querySelectorAll(".themeForPink").length-1 ; i++) {
            document.querySelectorAll(".themeForPink")[i].style.backgroundColor = "#19647E";
            document.querySelectorAll(".themeForPink")[i].style.color = "#1F2041";
        }
        for (let j = 0; j <=document.querySelectorAll(".themeForBlue").length-1 ; j++) {
            document.querySelectorAll(".themeForBlue")[j].style.backgroundColor = "#4B3F72";
            document.querySelectorAll(".themeForBlue")[j].style.color = "#1F2041";
            
        }
    }
    else if(localStorage.getItem("theme")=="theme3"){
        document.body.style.backgroundColor = "black";
        for (let i = 0; i <=document.querySelectorAll(".themeForPink").length-1 ; i++) {
            document.querySelectorAll(".themeForPink")[i].style.backgroundColor = "#555555";
            document.querySelectorAll(".themeForPink")[i].style.color = "black";
        }
        for (let j = 0; j <=document.querySelectorAll(".themeForBlue").length-1 ; j++) {
            document.querySelectorAll(".themeForBlue")[j].style.backgroundColor = "#333333";
            document.querySelectorAll(".themeForBlue")[j].style.color = "black";
        }
    }    
    else if(localStorage.getItem("theme")=="theme4"){
        document.body.style.backgroundColor = "#2B1B24";
        for (let i = 0; i <=document.querySelectorAll(".themeForPink").length-1 ; i++) {
            document.querySelectorAll(".themeForPink")[i].style.backgroundColor = "#A48068";
            document.querySelectorAll(".themeForPink")[i].style.color = "#2B1B24";
        }
        for (let j = 0; j <=document.querySelectorAll(".themeForBlue").length-1 ; j++) {
            document.querySelectorAll(".themeForBlue")[j].style.backgroundColor = "#86425A";
            document.querySelectorAll(".themeForBlue")[j].style.color = "#2B1B24";
        }
    }   
    else if(localStorage.getItem("theme")=="theme5"){
        document.body.style.backgroundColor = "#11344B";
        for (let i = 0; i <=document.querySelectorAll(".themeForPink").length-1 ; i++) {
            document.querySelectorAll(".themeForPink")[i].style.backgroundColor = "#DA6C95";
            document.querySelectorAll(".themeForPink")[i].style.color = "#11344B";
        }
        for (let j = 0; j <=document.querySelectorAll(".themeForBlue").length-1 ; j++) {
            document.querySelectorAll(".themeForBlue")[j].style.backgroundColor = "#865476";
            document.querySelectorAll(".themeForBlue")[j].style.color = "#11344B";
        }
    }   
    else if(localStorage.getItem("theme")=="theme1"){
        document.body.style.backgroundColor = "white";
        for (let i = 0; i <=document.querySelectorAll(".themeForPink").length-1 ; i++) {
        document.querySelectorAll(".themeForPink")[i].style.backgroundColor = "#E8567C";
        document.querySelectorAll(".themeForPink")[i].style.color = "white";
        }
        for (let j = 0; j <=document.querySelectorAll(".themeForBlue").length-1 ; j++) {
        document.querySelectorAll(".themeForBlue")[j].style.backgroundColor = "#19C3E2";
        document.querySelectorAll(".themeForBlue")[j].style.color = "white";
        }
    }   
}

// This function is used to start music when starting page get loaded and theme changes

window.addEventListener('DOMContentLoaded', (event) => {
    themeChangeForStart();
    bgm.play();
});


