const btnShow = document.getElementById('btn-show');
const list = document.querySelectorAll('li');
const btnHide = document.getElementById('btn-hide')


function showMembers() {
    list.forEach((item) => {
        item.style.display = 'block';
    })
}

function hideMembers() {
    list.forEach((item) => {
        item.style.display = 'none';
    })
}


btnShow.addEventListener('click', showMembers);
btnHide.addEventListener('click', hideMembers);