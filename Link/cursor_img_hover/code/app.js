const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top:' + (e.pageY - 30) + "px; left:" + (e.pageX - 30) + "px;")
})
const allLinks = document.querySelectorAll('nav ul li');

allLinks.forEach((link) => {
    
    const location = link.getAttribute('data-loc');
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
        
        cursor.setAttribute("style", "background-image: url(../images/" + location + ".jpg)")
        // cursor.style.backgroundImage = 'url(../images/' + location + '.jpg)';

    })

    link.addEventListener('mouseout', () => {
        cursor.classList.remove('hovered');
        cursor.style.backgroundImage = 'none';
    })
});