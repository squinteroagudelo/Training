let close = document.querySelectorAll('.close');

close.forEach((c) => {
    c.addEventListener('click', (e) => {
        e.preventDefault();
        let content = document.querySelector('.content');

        content.classList.remove('animate__zoomIn');
        content.classList.add('animate__fadeOutUp');

        setTimeout(() => {
            location.href = '../';
        }, 600);

        return false;
    });
});