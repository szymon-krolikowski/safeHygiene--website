const solutionsTextArticle = document.querySelector(".solutions__textArticle")

gsap.from(".solutions__imageArticle", {opacity: 0, ease: 'easeInOut', scrollTrigger: {
    trigger: ".header__bottomLineTop",
    start: 'top 60%',
  }});

gsap.from(solutionsTextArticle.children, {opacity: 0, y:"20", ease: 'easeInOut', stagger: 0.2, scrollTrigger: {
    trigger: ".header__bottomLineTop",
    start: 'top 10%',
    markers: true
  }});  