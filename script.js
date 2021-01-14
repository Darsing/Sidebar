const toggleButton =  document.getElementById('toggle-botton');
const sideBar = document.getElementById('side-bar');

toggleButton.addEventListener('click', show);

function show(){
    sideBar.classList.toggle('active');
}

//remove sidebar if click on the content

const content = document.querySelector('.content');

content.addEventListener('click', ()=>{
    sideBar.classList.remove('active');
})