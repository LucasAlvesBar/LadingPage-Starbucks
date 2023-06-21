
/*função troca imagem*/
function imgSlider(anything){
    document.querySelector('.Starbucks').src = anything;
}
/*função troca de cor*/
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}