const galaxy = document.querySelector('.galaxy')
const starcount = 100;
for (let i = 0; i < starcount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    star.style.top = `${top}%`;
    star.style.left = `${left}%`;
    galaxy.appendChild(star);
}