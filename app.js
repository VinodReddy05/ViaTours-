





// const hamburger = document.querySelector('.hamburger');
// const navLinks = document.querySelector('.nav-links ul');

// hamburger.addEventListener('click', ()=>{
//   navLinks.style.transform ='scale(100%)'
//    navLinks.style.left = '0px'
// })

// const herosecton = document.querySelector('hero-secton')

// hero-secton.addEventListener('click', ()=>{
//   navLinks.style.transform='scale(0%)'
 

// console.log('vinod');


// })

function toggle(){
  hamburger.addEventListener('click', ()=>{
    document.getElementById('nav-links').classList.toggle('mobile')
  })
}






                    //------------ registern button-------

const Registerbtn = document.querySelector('.Registerbtn')
const hero = document.querySelector('.hero')

Registerbtn.addEventListener('click' ,() =>{
  hero.style.transform = 'scale(100%)'
document.body.style.overflowY = "hidden"
  // alert('register button clicked')
})


               //----------- cross mark-----------------


const icon = document.querySelector('.icon')
const hero1 = document.querySelector('.hero')

icon.addEventListener('click' ,()=>{
  hero1.style.transform= 'scale(0%)'
  document.body.style.overflowY = "scroll"
  // alert('register button clicked')
})





const faqs = document.querySelectorAll(".faq");


faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active"); // Toggle the 'active' class
    console.log("FAQ clicked");
  });
});


            // ----------------login form & signup form

const inputArea = document.querySelector('.input-area');
const loginButton = document.querySelector('#loginbtn');
const registerElement = document.querySelector('#registerbtn');
const btnBG = document.querySelector('#btnBG');

loginButton.addEventListener('click' , () =>{
  inputArea.style.left = "4px"
  btnBG.style.left = "0%"
})

registerElement.addEventListener('click' , () =>{
  inputArea.style.left = "-446px"
  btnBG.style.left = "50%"
})


//-------------------- popup Image-------------

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

var images = document.getElementsByClassName("popup-img");

for (var i = 0; i < images.length; i++) {


    images[i].addEventListener('click' , function(){
      modal.style.display = "block";
      document.body.style.overflowY = "hidden"
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    })
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
    modal.style.display = "none";
    document.body.style.overflowY = "scroll"
}



//----------- form submitting-----------



const submitform = document.querySelector('#submit-form') 

submitform.addEventListener('click' ,()=>{
   
  const name = document.getElementById('Name').value;
  const email = document.getElementById('Email').value;
  const title = document.getElementById('Title').value;
  const feedback = document.getElementById('Feedback').value;

  function isValid(name, email, title, feedback) {
    return name.trim() !== '' && 
           email.trim() !== '' && 
           title.trim() !== '' && 
           feedback.trim() !== '';
  }

  if (!isValid(name, email, title, feedback)) {
    alert('Please fill out all fields correctly.');
    return;
  }

  
  
alert(`\nName: ${name}\nEmail: ${email}\nTitle: ${title}\nFeedback: ${feedback}`);

popup.style.backgroundColor = 'lightgreen';
popup.style.color = 'black';



})





const cardScroll = document.querySelector('.card')
const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')

leftArrow.addEventListener('click', () => {
  cardScroll.scrollBy({ left: -300, behavior: "smooth" });
});

rightArrow.addEventListener('click', () => {
  cardScroll.scrollBy({ left: 300, behavior: "smooth" });
});





















