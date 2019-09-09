document.addEventListener('DOMContentLoaded', (e) => {
    
    var mobile_menu_btn = document.querySelector('.hamburger--emphatic'),
        navigation_wrapper = document.querySelector('.navigation-global-wrapper');

    mobile_menu_btn.addEventListener('click', (e) => {
        navigation_wrapper.classList.toggle('actif');
        mobile_menu_btn.classList.toggle('is-active');
    })

    var login_btn = document.querySelector('.btn-switch_CR .login'),
        register_btn = document.querySelector('.btn-switch_CR .register'),
        btn_wrapper = document.querySelector('.bloc-switch_container');

        login_btn.addEventListener('click', (e) => {
            login_btn.classList.add('actif-btn');
            register_btn.classList.remove('actif-btn');
            btn_wrapper.classList.add('login-actif');
            btn_wrapper.classList.remove('register-actif');
        })
        register_btn.addEventListener('click', (e) => {
            register_btn.classList.add('actif-btn');
            login_btn.classList.remove('actif-btn');
            btn_wrapper.classList.add('register-actif');
            btn_wrapper.classList.remove('login-actif');
        })
});