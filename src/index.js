import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!
const anchors = document.querySelector(".nav") ;
const bd = document.querySelector("body");
const mainNav = document.querySelector(".main-navigation");
const containh2 = document.querySelector(".intro");
const allh2 = document.querySelectorAll("h2")[2];
const allImages = document.querySelectorAll("img");
const copyP = document.querySelector("body > div > section.content-pick > div:nth-child(3) > p")

const changeColorRed = (e) => e.target.style.color = "red";
const changeColorBlack = (e) => e.target.style.color = "black";
const keyBody = () => alert("Tuşa Basma");
const mainBackground = () => mainNav.style.backgroundColor = "RGB(175,238,238)" ;

const randomBackgroundColor = () => {
    const rndCol = '#'+Math.floor(Math.random()*16777215).toString(16);
    bd.style.backgroundColor = rndCol;
};

const h2Colors = () => allh2.style.color = "pink";




anchors.addEventListener( "mouseover" , changeColorRed ) ;

anchors.addEventListener( "mouseout" , changeColorBlack ) ;

// bd.addEventListener("keydown" , keyBody ) ;

bd.addEventListener("wheel" , mainBackground );

// window.addEventListener("load", () => {alert("Page Loaded")});

containh2.addEventListener("focus" , (e) => {
    e.target.style.backgroundColor = "red";
});

window.addEventListener("resize", randomBackgroundColor)

window.addEventListener("scroll" , h2Colors);
 
bd.addEventListener("dblclick" , randomBackgroundColor)

allImages.forEach((imagesItem) => {
    imagesItem.addEventListener("dblclick", (e) => [
       imagesItem.style.filter = "grayscale(100%)"
    ])
})

allImages.forEach((imagesItem) => {
    imagesItem.addEventListener("click", (e) => [
       imagesItem.style.border = "thick solid #0000FF"
    ])
})


copyP.addEventListener("copy" , () => {alert("Kopyalandı !")})