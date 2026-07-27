let colorPara=document.getElementById('cc1');
colorPara.textContent="Test";

document.getElementById('colorbutton').onclick=function(){
    let randomColor= '#' + Math.floor(Math.random()*16777215).toString(16);
    colorPara.textContent=randomColor;
    console.log("I am here");
    document.body.style.backgroundColor=randomColor;
        console.log("I am here");

}