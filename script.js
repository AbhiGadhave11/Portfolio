const aboutLink = document.querySelector('a[href="#about"]');

aboutLink.addEventListener('click', (event) => {
    event.preventDefault(); // prevent page from reloading
    const aboutSection = document.querySelector('#about');
    aboutSection.scrollIntoView({ behavior: 'smooth' }); // scroll smoothly to section
});

const words = ["Student!", "Engineer!", "Designer!", "Developer!"];
const wcolors = ["yellow", "orange"];
const word = document.querySelector('.word')
// word.innerHTML = words[0]
// word.style.color = wcolors[0]
// var index = 1

// setInterval(() => {
//     word.innerHTML = words[index];
//     word.style.color = wcolors[index]
//     index = (index + 1) % 4;
// }, 1500)

var ch = '|'
var index=0, letter=0;
var cnt = 0, _size = 3;
word.innerHTML = ch;
word.style.color = wcolors[1];
setInterval(()=>{
    if(letter === words[index].length && cnt){
        cnt = (cnt + 1)%_size;
    }
    else if(letter < words[index].length){
        if(letter != words[index].length-1) word.textContent = word.textContent.slice(0,-1) + words[index][letter++] + '|';
        else word.textContent = word.textContent.slice(0,-1) + words[index][letter++];
        cnt=1;
    }
    else{
        word.textContent='';
        letter=0;
        word.style.color = wcolors[index%2];
        index = (index+1)%words.length;
    }
},600);






const aboutwords = ["I Like Travelling!", "I like Music!", "I like Cricket!", "I like RCB!"];
const aboutin = document.querySelector('.aboutin')
aboutin.innerHTML = aboutwords[0]
var ind = 1

setInterval(() => {
    aboutin.innerHTML = aboutwords[ind];
    ind = (ind + 1) % 4;
}, 1300)

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }


































// const words = document.querySelectorAll('.word');
// let currentWord = 0;

// function showWord() {
//   words[currentWord].style.opacity = '1';
//   currentWord++;

//   if (currentWord >= words.length) {
//     currentWord = 0;
//   }

//   setTimeout(hideWord, 2000);
// }

// function hideWord() {
//   words[currentWord - 1].style.opacity = '0';
//   setTimeout(showWord, 500);
// }

// showWord();
