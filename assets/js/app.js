let form = document.querySelector('.bg-form')
let input = document.getElementById('email')
let errorMessage = document.querySelector('.error-message')
let errorIcon = document.querySelector('.icon-error')

const esconderSinaisDeErro = () => {
    input.classList.remove('error-input')
    errorMessage.classList.add('none')
    errorIcon.classList.add('none')
}

form.addEventListener('submit', (e) => {
    let regexParaValidarEmail = "^\\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
    esconderSinaisDeErro()
    if(!input.value.match(regexParaValidarEmail)) {
        input.classList.add('error-input')
        errorMessage.classList.remove('none')
        errorIcon.classList.remove('none')
    }
    e.preventDefault()
})