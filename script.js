window.addEventListener('scroll', onScroll)

onScroll();

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
};

function activateMenuAtCurrentSection(section) {
  // Linha Alvo
  const targetLine = scrollY + innerHeight / 2

  // Verificar se a section passou da linha alvo
  // Quais dados vou precisar?

  // O topo da section
  const sectionTop = section.offsetTop

  // Altura da section
  const sectionHight = section.offsetHeight

  // O topo da section passou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  // verificar se a linha está a baixo da linha alvo
  // Quais dados vou precisar?
  const sectionEndsAt = sectionTop + sectionHight

  // O final da section passou ou ultrapassou a linha
  const  sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // Limites da section
  const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
  
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
   

  // console.log(sectionHight)
  // console.log(sectionTop)
}






function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add("scroll");
  } else {
    navigation.classList.remove("scroll");
  }
};

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
}


function openMenu() {
    document.body.classList.add('menu-expanded');
};    

function closeMenu() {
    document.body.classList.remove('menu-expanded');
};

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services, 
#services header, 
#services .card,
#about,
#about header,
#about .content,
img,
#contact
footer,
footer .content`);