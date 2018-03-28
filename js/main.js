let doc = document,
    link = doc.querySelector('.map_form_btn'),
    popup = doc.querySelector('.modal_feedback'),
    close = popup.querySelector('.feedback_form_btn'),
    userName = popup.querySelector('[name=user-name]'),
    form = popup.querySelector('form'),
    email = popup.querySelector('[name=user-email]'),
    textArea = popup.querySelector('[name=feedback]') ;

    let isStorageSupport = true;
    let storage = '';
    
    try {
      storage = localStorage.getItem('userName');
    } catch (err) {
      isStorageSupport = false;
    }

    function handleLink (event) {
        event.preventDefault();
        popup.classList.add('show-form');

        if ( storage ) {
            userName.value = storage;
            email.focus();
        } else userName.focus();
    }

    function closeForm (event) {
        event.preventDefault();
        popup.classList.remove('show-form');
        popup.classList.remove('modal-error');
    }

    function handleForm (event) {

        if ( !!email.value || !!textArea.value || !!userName.value ) {
            localStorage.setItem('userName', userName.value);
            localStorage.setItem('textArea', textArea.value);
            localStorage.setItem('email', email.value);
        } else if (isStorageSupport){
            event.preventDefault();
            popup.classList.add('modal-error');
        }
    }

    window.addEventListener('keydown', function (event) {
        if (event.keyCode === 27) {
            event.preventDefault();
          if (popup.classList.contains('show-form')) {
            popup.classList.remove('show-form');
            popup.classList.remove('modal-error');
          }
        }
      });

    link.addEventListener('click', handleLink);
    close.addEventListener('click', closeForm);
    form.addEventListener('submit', handleForm)


