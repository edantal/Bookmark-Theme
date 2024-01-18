Menu = (e) => {
  const list = document.querySelector('ul.nav-list')

  e.name === 'menu'
    ? ((e.name = 'close'),
      e.classList.add('rotate-180'),
      e.classList.remove('fa-bars'),
      e.classList.add('fa-xmark'),
      list.classList.add('top-[80px]'),
      list.classList.add('opacity-100'))
    : ((e.name = 'menu'),
      e.classList.remove('rotate-180'),
      e.classList.add('fa-bars'),
      e.classList.remove('fa-xmark'),
      list.classList.remove('top-[80px]'),
      list.classList.remove('opacity-100'))
}

const accordionHeader = document.querySelectorAll('.accordion__header')

accordionHeader.forEach((accordionHeader) => {
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
