document.getElementById('content').style.display = "none";

var animation = lottie.loadAnimation({
    container:document.getElementById('icon'),
    renderer:'svg',
    loop:true,
    autoplay:false,
    path:'assets/loader/data.json',
});

animation.play();

var myVar = setTimeout(showPage, 1000);

function showPage(){
    animation.stop();
    document.getElementById('loader').style.display = "none";
    document.getElementById('content').style.display = "initial";
}