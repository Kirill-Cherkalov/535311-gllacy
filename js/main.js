let doc = document,
    link = doc.querySelector('.map_form_btn'),
    popup = doc.querySelector('.modal_feedback'),
    close = popup.querySelector('.feedback_form_btn'),
    userName = popup.querySelector('[name=user-name]'),
    form = popup.querySelector('.modal_feedback_form'),
    email = popup.querySelector('.user-email'),
    textArea = popup.querySelector('.feedback') ;



    function handleLink (event) {
        event.preventDefault();
        popup.classList.add('show-form')
        userName.focus();
    }

    function closeForm (event) {
        event.preventDefault();
        popup.classList.remove('show-form');
    }

    function handleForm (event) {

        if ( !!email || !!textArea || !!userName ) {
            localStorage.setItem('userName', userName.value);
            localStorage.setItem('email', email.value);
            textArea.setItem('textArea', textArea.value);
        } else {
            event.preventDefault();
            alert('гг');
        }
    }


    link.addEventListener('click', handleLink);
    close.addEventListener('click', closeForm);
    form.addEventListener('submit', handleForm)

