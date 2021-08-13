"use strict"

const popupError = document.querySelector('.popup__error');
const popupErrorFile = document.querySelector('.popup__error-file');
const popupErrorSend = document.querySelector('.popup__error-send');
const popupSending = document.querySelector('.popup__sending');
const popupSuccessSend = document.querySelector('.popup__success-send');
const popupWorning = document.querySelector('.popup__worning');

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
                popupSending.classList.add('open');
                body.classList.add('lock');
            let response = await fetch('sendmail.php',{
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                formPreview.innerHTML = '';
                form.reset();
                popupSending.classList.remove('open');
                popupSuccessSend.classList.add('open');
                body.classList.add('lock');
            }else{
                popupErrorSend.classList.add('open');
                body.classList.add('lock');
                popupSending.classList.remove('open');
            }
        }else{
            popupError.classList.add('open');
            body.classList.add('lock');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
    
            if (input.classList.contains('_email')) {
                    if (emailTest(input)) {
                        formAddError(input);
                        error++;
                    }
            }else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            }else{
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
    
        }
        return error;
    }

    function formAddError(input) {
       input.parentElement.classList.add('_error');
       input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    const formImage = document.getElementById('myfile');
    const formPreview = document.getElementById('formPreview');

    formImage.addEventListener('change', () =>{
        uploadFile(formImage.files[0]);
    });

    function uploadFile(file) {
        document.body.classList.contains('lock')
        if (!['image/jpeg', 'image/png',].includes(file.type)) {
            popupWorning.classList.add('open');
            formImage.value = '';
            return;
        }
        if (file.size > 2516582400) {
            popupErrorFile.classList.add('open');
            return;
        }

    var reader = new FileReader();
    reader.onload = function (e) {
        formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
    };
    reader.onerror = function (e) {
        alert('Ошибка');
    };

    reader.readAsDataURL(file);
    }
});