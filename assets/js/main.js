/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }

    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)

/*=============== EMAIL JS ===============*/
/*const contactForm = document.getElementById('contact-form')
        contactForm = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    emailjs.sendForm('service_gl1k42c','template_5kpt6hm','#contact-form', 'Ej_Ez_WQ8bglg5VHl')
    .then(() =>{

        contactMessage.textContact = 'Message sent successfully :)'

        setTimeout(() =>{
            contactMessage.textContact = ''
        }, 5000)

        contactForm.reset()

    }, () =>{
        contactMessage.textContact = 'Message not sent (serivce error) :('
    })
}
contactForm.addEventListener('submit', sendEmail)*/


const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove ('show-scroll')
}
window.addEventListener('scroll', scrollUp)




const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration: 2500,
    delay: 400,

})

sr.reveal(`.home__perfil`, {origin:'right'}) 
sr.reveal(`.home__name, .home__info`, {origin:'left'})
