
// =============for navbar================

 const mobile_nav =document.querySelector(".mobile-navbar-btn");
 const nav_header =document.querySelector('#header');
const toggleNavbar =()=>{
    nav_header.classList.toggle("active");
};


 mobile_nav.addEventListener('click', ()=> toggleNavbar());


// ===================For search bar=============================
const searchBox =document.querySelector(".search-box");
const searchBtn= document.querySelector(".search-btn");
const search=document.querySelector(".search");
const searchClose = document.querySelector(".search-close")
searchBtn.addEventListener('click',function(){
  if (search.classList.contains('.active')){
    searchBox.value=''
  }
  else{
    search.classList.add('active');
    searchBox.focus();
  }
});
searchClose.addEventListener('click',function(){
    search.classList.remove('active')
})
