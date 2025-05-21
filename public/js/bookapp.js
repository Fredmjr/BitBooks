const loginBtn = document.getElementById("loginBtn");
const loginPage= document.getElementById("loginPage");
const booksPage = document.getElementById("booksPage");
const searchPanel= document.getElementById("searchPanel");
const searchCategory = document.getElementById("searchCategory");
const dropdownmMenul= document.getElementById("dropdownmMenu");
const BurgarBtn = document.getElementById("BurgarBtn");
const menuBar = document.getElementById("menuBar");

loginBtn.addEventListener('click', ()=>{
    booksPage.style.display = 'none'
    loginPage.style.display = 'block';
    searchPanel.style.display = 'none'
    searchCategory.style.display = 'none'
})


menuBar.addEventListener('click', ()=>{
    dropdownmMenu.style.display = 'none' ? 'block' : 'none';
})

//closing drop-down menu
document.addEventListener('click', (event)=>{
    if(!BurgarBtn.contains(event.target)){
        dropdownmMenu.style.display = 'none';
    }
})