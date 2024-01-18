// mobile menu
toggleMobileMenu = (e) => {
  const list = document.querySelector('.nav-list')

  if (e.classList.contains('fa-bars')) {
    e.classList.add('rotate-180')
    e.classList.remove('fa-bars')
    e.classList.add('fa-xmark')
    list.classList.add('top-[80px]')
    list.classList.add('opacity-100')
  } else {
    e.classList.remove('rotate-180')
    e.classList.add('fa-bars')
    e.classList.remove('fa-xmark')
    list.classList.remove('top-[80px]')
    list.classList.remove('opacity-100')
  }
}

// smooth scroll
const links = document.querySelectorAll('.nav-link')
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const href = link.getAttribute('href')
    const offsetTop = document.querySelector(href).offsetTop

    // toggle back mobile menu
    if (mobileMenuBtn.classList.contains('fa-xmark')) {
      toggleMobileMenu(mobileMenuBtn)
    }

    scroll({
      top: offsetTop,
      behavior: 'smooth',
    })
  })
})

// accordion component
const accordionHeaders = document.querySelectorAll('.accordion__header')

accordionHeaders.forEach((accordionHeader) => {
  accordionHeader.addEventListener('click', (e) => {
    accordionHeader.classList.toggle('active')
    const accordionBody = accordionHeader.nextElementSibling
    const accordionIcon = accordionHeader.children[1]
    if (accordionHeader.classList.contains('active')) {
      accordionIcon.classList.add('rotate-180')
      accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px'
    } else {
      accordionIcon.classList.remove('rotate-180')
      accordionBody.style.maxHeight = 0
    }
  })
})
