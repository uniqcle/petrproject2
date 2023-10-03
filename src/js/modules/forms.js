const sendForms = () => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        uploads = document.querySelectorAll('[name="upload"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    };

    const path = {
        designer: 'assets/server.php',
        question: 'assets/question.php'
    };

    const clearInputs = () => {
        inputs.forEach(input => {
            input.value = ''
        })
        uploads.forEach(upload => {
            upload.previousElementSibling.textContent = 'Файл не выбран'
        })
    }


    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.parentNode.appendChild(statusMessage);

            form.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                form.style.display = 'none'
            }, 400);


            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.appendChild(textMessage);

            const formData = new FormData(form);

            let api;
            api = form.closest('.popup-design') || form.classList.contains('calc_form') ? path.designer : path.question;

            console.log(api)


        })
    })

}


export default sendForms;

