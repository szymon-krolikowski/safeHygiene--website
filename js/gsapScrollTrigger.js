const solutionsTextArticle = document.querySelector(".solutions__textArticle");
const aboutUsTextArticle = document.querySelector(".aboutUs__textArticle");
const aboutUsParagraph = document.querySelector(".aboutUs__paragraph");
const contact = document.querySelector(".contact");

if(window.innerWidth <= 760) {
  gsap.from(solutionsTextArticle.children, {opacity: 0, y:"20", ease: 'easeInOut', stagger: 0.2, scrollTrigger: {
    trigger: ".header__bottomLineTop",
    start: 'top 20%',
  }});  

  gsap.from(".products__headingTwo", {opacity: 0, y:"20", ease: 'easeInOut', stagger: 0.2, scrollTrigger: {
    trigger: ".js-scrollTriggerHeadingTwo",
    start: 'top 50%',
  }});  

  gsap.from(".products__productBox", {scaleY: 0, y:"10", ease: 'easeInOut', stagger: 0.1, scrollTrigger: {
    trigger: ".js-scrollTriggerHeadingTwo",
    start: 'top 40%',
  }});
  
  gsap.from(".products__image", {x:"100", opacity: 0, ease: 'easeInOut', stagger: 0.1, scrollTrigger: {
    trigger: ".js-scrollTriggerHeadingTwo",
    start: 'top 20%',
  }});

  gsap.from(".aboutUs__image", {opacity: 0, ease: 'easeInOut', scrollTrigger: {
  trigger: ".products__bottomLine",
  start: 'top 40%',
  }});

  gsap.from(aboutUsTextArticle.children, {opacity: 0, y:"20", ease: 'easeInOut', stagger: 0.2, scrollTrigger: {
  trigger: ".products__bottomLine",
  start: 'top 10%',
  }});  

  gsap.from(aboutUsParagraph, {scaleX: 0, x:"0", transformOrigin: "left", ease: 'easeInOut', stagger: 0.1, scrollTrigger: {
  trigger: ".aboutUs__image",
  start: 'top 20%',
  }});  

  gsap.from(".products__bottomLine", {scaleX: 0, transformOrigin: "right", ease: 'easeInOut', duration: 2, scrollTrigger: {
  trigger: ".js-scrollTriggerProductBottomLine",
  start: 'top 10%',
  }});  

  gsap.from(".contactInfo__topLine--first", {scaleX: 0, transformOrigin: "right", ease: 'easeInOut', duration: 2, scrollTrigger: {
    trigger: ".contact__paragraph",
    start: 'top 0%',
  }});

  gsap.from(".contactInfo__topLine--second", {scaleX: 0, transformOrigin: "right", ease: 'easeInOut', duration: 2, scrollTrigger: {
    trigger: ".contactInfo__box",
    start: 'top 40%',
  }}); 

  gsap.from(".contactInfo__topLine--third", {scaleX: 0, transformOrigin: "right", ease: 'easeInOut', duration: 2, scrollTrigger: {
    trigger: ".contactInfo__box",
    start: 'top 35%',
  }}); 
} else if(window.innerWidth > 761 && window.innerWidth < 992 ) {
  gsap.from(solutionsTextArticle.children, {opacity: 0, y:"20", ease: 'easeInOut', stagger: 0.2, scrollTrigger: {
    trigger: ".header__bottomLineTop",
    start: 'top 50%',
  }});  

  gsap.from(".solutions__imageArticle", {opacity: 0, ease: 'easeInOut', scrollTrigger: {
    trigger: ".header__bottomLineTop",
    start: 'top 60%',
  }});

  gsap.from(".products__headingTwo", {opacity: 0, y:"20", ease: 'easeInOut', stagger: 0.2, scrollTrigger: {
    trigger: ".js-scrollTriggerHeadingTwo",
    start: 'top 55%',
  }});  

  gsap.from(".products__productBox", {scaleY: 0, y:"10", ease: 'easeInOut', stagger: 0.1, scrollTrigger: {
    trigger: ".js-scrollTriggerHeadingTwo",
    start: 'top 40%',
  }});
  
  gsap.from(".products__image", {x:"100", opacity: 0, ease: 'easeInOut', stagger: 0.1, scrollTrigger: {
    trigger: ".js-scrollTriggerHeadingTwo",
    start: 'top 30%',
  }});

  gsap.from(".aboutUs__image", {opacity: 0, ease: 'easeInOut', scrollTrigger: {
  trigger: ".products__bottomLine",
  start: 'top 40%',
  }});

  gsap.from(aboutUsTextArticle.children, {opacity: 0, y:"20", ease: 'easeInOut', stagger: 0.2, scrollTrigger: {
  trigger: ".products__bottomLine",
  start: 'top 20%',
  }});  

  gsap.from(aboutUsParagraph, {scaleX: 0, x:"0", transformOrigin: "left", ease: 'easeInOut', stagger: 0.1, scrollTrigger: {
  trigger: ".aboutUs__image",
  start: 'top 20%',
  }});  

  gsap.from(".products__bottomLine", {scaleX: 0, transformOrigin: "right", ease: 'easeInOut', duration: 2, scrollTrigger: {
  trigger: ".js-scrollTriggerProductBottomLine",
  start: 'top 40%',
  }});  

  gsap.from(".contactInfo__topLine--first", {scaleX: 0, transformOrigin: "right", ease: 'easeInOut', duration: 2, scrollTrigger: {
    trigger: ".contact__paragraph",
    start: 'top 0%',
  }});

  gsap.from(".contactInfo__topLine--second", {scaleX: 0, transformOrigin: "right", ease: 'easeInOut', duration: 2, scrollTrigger: {
    trigger: ".contactInfo__box",
    start: 'top 40%',
  }}); 

  gsap.from(".contactInfo__topLine--third", {scaleX: 0, transformOrigin: "right", ease: 'easeInOut', duration: 2, scrollTrigger: {
    trigger: ".contactInfo__box",
    start: 'top 35%',
  }}); 
} else if(window.innerWidth > 992 ) {
  gsap.from(solutionsTextArticle.children, {opacity: 0, y:"20", ease: 'easeInOut', stagger: 0.2, scrollTrigger: {
    trigger: ".header__bottomLineTop",
    start: 'top 50%',
  }});  

  gsap.from(".solutions__imageArticle", {opacity: 0, ease: 'easeInOut', scrollTrigger: {
    trigger: ".header__bottomLineTop",
    start: 'top 60%',
  }});

  gsap.from(".products__headingTwo", {opacity: 0, y:"20", ease: 'easeInOut', stagger: 0.2, scrollTrigger: {
    trigger: ".js-scrollTriggerHeadingTwo",
    start: 'top 45%',
  }});  

  gsap.from(".products__productBox", {scaleY: 0, y:"10", ease: 'easeInOut', stagger: 0.1, scrollTrigger: {
    trigger: ".js-scrollTriggerHeadingTwo",
    start: 'top 30%',
  }});
  
  gsap.from(".products__image", {x:"100", delay: 1, opacity: 0, ease: 'easeInOut', stagger: 0.1, scrollTrigger: {
    trigger: ".js-scrollTriggerHeadingTwo",
    start: 'top 30%',
  }});

  gsap.from(aboutUsTextArticle.children, {opacity: 0, y:"20", ease: 'easeInOut', stagger: 0.2, scrollTrigger: {
    trigger: ".products__bottomLine",
    start: 'top 30%',
    }});  

  gsap.from(".aboutUs__image", {opacity: 0, ease: 'easeInOut', scrollTrigger: {
  trigger: ".products__bottomLine",
  start: 'top 40%',
  }});

  gsap.from(aboutUsParagraph, {scaleX: 0, x:"0", transformOrigin: "left", ease: 'easeInOut', scrollTrigger: {
  trigger: ".aboutUs__image",
  start: 'top 20%',
  }});  

  gsap.from(aboutUsParagraph.children, {y:"50", duration: 1, ease:"Expo.easeOut", opacity: 0, stagger: 0.1, delay: 0.7, scrollTrigger: {
    trigger: ".aboutUs__image",
    start: 'top 20%',
    }});  

  gsap.from(".products__bottomLine", {scaleX: 0, transformOrigin: "right", ease: 'easeInOut', duration: 2, scrollTrigger: {
  trigger: ".js-scrollTriggerProductBottomLine",
  start: 'top 40%',
  }});  

  gsap.from(".contactInfo__topLine--first", {scaleX: 0, transformOrigin: "right", ease: 'easeInOut', duration: 2, scrollTrigger: {
    trigger: ".contact__paragraph",
    start: 'top 20%',
  }});

  gsap.from(".contactInfo__topLine--second", {scaleX: 0, transformOrigin: "right", ease: 'easeInOut', duration: 2, scrollTrigger: {
    trigger: ".contactInfo__box",
    start: 'top 50%',
  }}); 

  gsap.from(".contactInfo__topLine--third", {scaleX: 0, transformOrigin: "right", ease: 'easeInOut', duration: 2, scrollTrigger: {
    trigger: ".contactInfo__box",
    start: 'top 45%',
  }}); 
}
