const $menu_mobile = document.getElementById('menu-mobile')
const $button_mobile_close = document.getElementById('close-menu')
const $button_mobile_open = document.getElementById('open-menu')
const $navbar = document.getElementById('navbar')
const $button_mode = document.getElementById('button-mode')

if (
  localStorage.theme === 'dark' ||
  (!('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

if (localStorage.getItem('theme') === 'dark') {
  $button_mode.innerHTML = `
  <i class="fa-solid fa-moon text-white"></i>
  `
} else {
  $button_mode.innerHTML = `
  <i class="fa-solid fa-sun text-white"></i>`
}

// Whenever the user explicitly chooses light mode

$button_mode.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark')
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.setItem('theme', 'ligth')
    $button_mode.innerHTML = `<i class="fa-solid fa-moon text-white"></i>`
  } else {
    $button_mode.innerHTML = `<i class="fa-solid fa-sun text-white"></i>`
    localStorage.setItem('theme', 'dark')
  }
})

//localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
//localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
//localStorage.removeItem('theme')

$button_mobile_close.addEventListener('click', () => {
  console.log('click')
  $menu_mobile.classList.replace('translate-x-0', 'translate-x-[100%]')
})

$button_mobile_open.addEventListener('click', () => {
  $menu_mobile.classList.replace('translate-x-[100%]', 'translate-x-0')
})
window.addEventListener('resize', () => {
  $navbar.classList.remove('backdrop-blur')
})

window.addEventListener('scroll', () => {
  if (window.innerWidth < 640) {
    if (window.scrollY > 100) {
      $navbar.classList.add('bg-black')
      $navbar.classList.add('bg-opacity-30')
    } else {
      $navbar.classList.remove('bg-black')
      $navbar.classList.remove('bg-opacity-30')
      $navbar.classList.remove('backdrop-blur')
    }
  } else {
    if (window.scrollY > 150) {
      $navbar.classList.add('bg-black')
      $navbar.classList.add('bg-opacity-30')
      $navbar.classList.add('backdrop-blur')
    } else {
      $navbar.classList.remove('bg-black')
      $navbar.classList.remove('bg-opacity-30')
      $navbar.classList.remove('backdrop-blur')
    }
  }
})
