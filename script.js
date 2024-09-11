const container = document.querySelector('.container');
const signup = document.querySelector('.signup-link');
const signin = document.querySelector('.signin-link');

signup.addEventListener('click', function(){
    container.classList.add('animated-signin');
    container.classList.remove('animated-signup');
})

signin.addEventListener('click', function(){
    container.classList.add('animated-signup');
    container.classList.remove('animated-signin');
})