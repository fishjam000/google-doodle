console.log('OK');

// Fade in Google
gsap.fromTo("#google", {
  opacity: 0
},
            
  {
  opacity: 1,
  duration: 1.75
})

// Blue shooting star intro animation
gsap.fromTo("#shooting_star_tail, #shooting_star_head", {
  x: -750,
  y: -1050,
},
            
{
    x: 0,
    y: 0,
    duration: 1.75,
    ease: "circ",
    delay: 1
});

// Big star's rotation
var star = document.getElementById("big_star");
var tl = new TimelineLite;

tl.to(star, {rotation:10, transformOrigin: "50% 50%"})
  .to(star, {rotation:-10, ease:Sine.easeInOut, repeat:-1, yoyo:true, transformOrigin:"50% 50%", repeatDelay: .15, duration: 1.25 });

// transformOrigin:"50% 50%"

// Intro animation for hanging stars
gsap.fromTo("#hanging_stars, #strings", {
  y: -300,
},
            
{
    y: -2,
    duration: 2.25,
    delay: 2
});


// Swaying animation for hanging stars
var tlstars = new TimelineMax();

tlstars.staggerFromTo("#hanging_stars", 2, {
  skewY:".3deg"
}, {
  skewY:"-.3deg",
  repeat: -1,
  yoyo: true
});


// Animating small shooting stars in the background

// Bottom left shooting star AKA meteor
gsap.fromTo("#meteor_1", {
  x: -50,
  y: -150
},
            
    { 
  x: 100,
  y: -5,
  duration: 1.2,
  repeat: -1,
  repeatDelay: 2
});


// Second from left meteor
gsap.fromTo("#meteor_2", {
  x: 160,
  y: -90
},
            
    { 
  x: 250,
  y: -2,
  duration: 1.25,
  repeat: -1,
  repeatDelay: 4
});


// Second from right meteor
gsap.fromTo("#meteor_3", {
  x: 325,
  y: -100
},
            
    {
  x: 450,
  y: 0,
  duration: 1.6,
  repeat: -1,
  repeatDelay: 3
});


// Rightmost meteor
gsap.fromTo("#meteor_4", {
  x: 350,
  y: -250
},
            
    {
  x: 475,
  y: -135,
  duration: 1.5,
  repeat: -1,
  repeatDelay: 4
});
