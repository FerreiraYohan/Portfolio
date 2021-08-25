// function redimensionnement() {
    
//     if("matchMedia" in window) { // Détection
//       if(window.matchMedia("(min-width:800px)").matches) {
// console.log('Largeur > 800px') 

//      } else {
//         console.log('Largeur < 800px')       }
//     }
//     if("matchMedia" in window) { // Détection
//       if(window.matchMedia("(min-height:800px)").matches) {
// console.log('Hauteur > 800px') 

//      } else {
//         console.log('Hauteur < 800px')       }
//     }
//   }
//   // On lie l'événement resize à la fonction
//   window.addEventListener('resize', redimensionnement, false);
  //permet de lancer l'animation au chargement de la page

//cursor perso
  const cursor = document.querySelector('.cursor');

  document.addEventListener('mousemove', e => {
      cursor.setAttribute('style', 'top:'+(e.pageY- 20)+"px; left:"+(e.pageX - 20)+ "px;")
  }) 
  
  
  document.addEventListener('click', e => {
      cursor.classList.add('expand');
  
      setTimeout(()=>{
          cursor.classList.remove('expand');
      }, 500);
  });


  window.addEventListener('load', function() {
    document.getElementById('logo-nav').classList.add('isLoading');
  })

//Animation texte Nom

var textWrapper = document.querySelector('.text-animated');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.text-animated .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 2000,
    delay: (el, i) => 300 + 100 * i
  }).add({
    targets: '.text-animated .letter',
    translateX: [0,-50],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 2000,
    delay: (el, i) => 400 + 100 * i
  });

// Affiche une barre de progression.
    window.onload =() => {
        //écouteur d'évènement sur scroll
        window.addEventListener("scroll", () =>{
        //Calcul de la hauteur "utile" du document
        let hauteur = document.documentElement.scrollHeight - window.innerHeight

        // Récupération de la position verticale
        let position = window.scrollY

        // Récupération de la largeur de la fenêtre
        let largeur = document.documentElement.clientWidth

        //Calcul de la largeur de la barre
        let barre = position / hauteur * largeur

        //Modifier le css de la barre
        document.getElementById("progress").style.width = barre+"px"
        })
    }

    // COmpte à rebours site 1//
    const text = document.querySelector('h4');

    function getChrono(){
        const now = new Date().getTime();
        const countdownDate = new Date('october 30, 2021').getTime();
        
        const distanceBase = countdownDate - now;
        
        const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const minutes = Math.floor((distanceBase % (1000 * 60 *60)) / (1000 * 60));
        const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000) ;

    text.innerText = `${days}j ${hours}h ${minutes}m ${seconds}s `
    }

    getChrono();
    const countDownInterval = setInterval(() => {

        getChrono();
    }, 1000);

// compte à rebours site gaming//
    const textGamingSite = document.getElementById('gamingSite');

    function getChronoGamingSite(){
        const now = new Date().getTime();
        const countdownDateGamingSite = new Date('september 30, 2021').getTime();
       
        const distanceBaseGamingSite = countdownDateGamingSite - now;

        const days = Math.floor(distanceBaseGamingSite / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distanceBaseGamingSite % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const minutes = Math.floor((distanceBaseGamingSite % (1000 * 60 *60)) / (1000 * 60));
        const seconds = Math.floor((distanceBaseGamingSite % (1000 * 60)) / 1000) ;

        textGamingSite.innerText = `${days}j ${hours}h ${minutes}m ${seconds}s `
    }
    getChronoGamingSite();

    const countdownDateGamingSite = setInterval(() => {
        getChronoGamingSite();
    }, 1000);
    
//Appliquer un focus sur une card//

    const allCards = Array.from(document.querySelectorAll('.cards'));
    let currentIndex = 0;

    allCards.forEach(card => {
        card.addEventListener('mouseenter', e => {
            const el = e.target; 
            currentIndex = allCards.indexOf(el)

            allCards.forEach((card, index) => {
                if (index === currentIndex) return;
                card.classList.add('blur');
            })
        })

        card.addEventListener('mouseleave', () => {
            allCards.forEach((card, index) => {
                if(index === currentIndex) return;
                card.classList.remove('blur');
            })
        })
    })
   

   


    //card-skills//
    //appliquer une animation pour card cv 
    const card = document.querySelector('.card-cv');
    const imageZoom = document.querySelector('.image-zoom');
    const blocFocusTop = document.querySelector('.bloc-focus-top');
    const blocFocusBottom = document.querySelector('.bloc-focus-bottom');

    // Utilisation de la librairie Gsapp

    const TLANIM = gsap.timeline({paused: true});
    const blocContent = document.querySelector('.bloc-content-show')
    const title = document.querySelector('.bloc-content-show h2')
    const downloadLogo = document.querySelector('.bloc-content-show img')
    const allTxt = document.querySelector('.bloc-content-show p')
    const separation = document.querySelector('.bloc-content-show hr')


    TLANIM
    .fromTo(imageZoom, {scale: 1}, 
    {scale:2, y:150, x:-100, duration: 0.4, ease:ExpoScaleEase.config(1,2, 'power2.inOut')})

    .to(blocFocusTop, {top: -30, left: -30, duration: 0.1}, 0.5)
    .to(blocFocusBottom, {bottom: -30, right: -30, duration: 0.1}, '-=0.1')
    .to(blocContent, {bottom:200, duration: 0.2}, '-=0.1')
    .from(title, {opacity:0, duration:0.2}, '-=0.1')
    .from(downloadLogo, {scale: 0, duration: 0.2})
    .from(separation, {width:0, duration: 0.7, }, '-=0.1')
    .from(allTxt, {opacity: 0, duration: 0.3, stagger: 0.2})

    card.addEventListener('mouseenter', () => {
        TLANIM.play();
    })
    card.addEventListener('mouseleave', () => {
        TLANIM.reverse();
    })



    function BarAnimation() {
        document.getElementById('progress_bar_html').classList.add('bar_html');
        document.getElementById('progress_bar_css').classList.add('bar_css');
        document.getElementById('progress_bar_js').classList.add('bar_js');
        document.getElementById('progress_bar_vuejs').classList.add('bar_vuejs');
        document.getElementById('progress_bar_php').classList.add('bar_php');
        document.getElementById('progress_bar_sql').classList.add('bar_sql');
        document.getElementById('progress_bar_ps').classList.add('bar_ps');
        document.getElementById('progress_bar_ai').classList.add('bar_ai');
    }
      
      // Check si l'élément passé en param est affiché sur l'écran
      function checkVisible(elm) {
        var rect = elm.getBoundingClientRect();
        var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
        return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
      }
      
      //Regarde si la div competence est affichée toutes les 250ms puis désactive l'interval
      var interval = setInterval(function() {
          if ( checkVisible(document.getElementById('competences')))     {
              BarAnimation();
              clearInterval(interval); // Désactive le SetInterval
          }
      },1000);

      
      function cardAnimation() {
        document.querySelector('.card-left').classList.add('slipLeft');
        document.querySelector('.card-right').classList.add('slipRight');
      }

      var interval = setInterval(function() {
          if ( checkVisible(document.getElementById('card-animations')))     {
              clearInterval(interval)
              cardAnimation(); // Désactive le SetInterval
          }
      },1000);

    //   Interragir avec les controllers du lecteur audio

    var musicBtn = document.querySelector('.floating-btn');
    var mutedIcon = document.getElementById('mute_icon');
    var speakerIcon = document.getElementById('speaker_icon');
    var audio = document.querySelector('.audio_player');
    musicBtn.addEventListener('click', () => {

        if (mutedIcon.classList == 'displayed') {
            mutedIcon.classList.remove('displayed');
            speakerIcon.classList.add('displayed'); 
            audio.pause();
        }
        else {
            mutedIcon.classList.add('displayed');
            speakerIcon.classList.remove('displayed');
            audio.play();
        }
    })

    //Son musique
    var monElementAudio = document.getElementById('musique');
    monElementAudio.volume = 0.1;




    //burger 
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');
    
        //Toggle Nav
        burger.addEventListener('click', () => {
    
            nav.classList.toggle('nav-active');
        
        //animate links
        navLinks.forEach((link, index) => {
          if(link.style.animation) {
              link.style.animation = '';
          }  else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
          }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });
    }
    
    navSlide();