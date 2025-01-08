const buttons = document.querySelectorAll('.mode-toggle')

buttons.forEach(button => {
  button.addEventListener('click', function () {
    document.body.classList.toggle('light-mode')
    document.querySelectorAll('.fa-sun').forEach(icon => icon.classList.toggle('fa-moon'))

    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('lightMode', 'enabled')
    } else {
      localStorage.setItem('lightMode', 'disabled')
    }
  })
})

if (localStorage.getItem('lightMode') === 'enabled') {
  document.body.classList.add('light-mode')
  document.querySelectorAll('.fa-sun').forEach(icon => icon.classList.add('fa-moon'))
}