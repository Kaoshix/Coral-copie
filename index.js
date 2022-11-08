document.addEventListener('DOMContentLoaded', function () {
    // Je dispose d'un coeur vide et je souhaite le remplir lors d'un click.

    // Je récupère mon coeur vide
    const heartWish = document.querySelectorAll('.heart');

    heartWish.forEach(function (el) {
        el.addEventListener('click', function () {
            el.classList.toggle('heart-full');
        })
    })
}, false)

