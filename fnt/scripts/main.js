// ****使用JavaScript更改主题
// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// ****使用JavaScript为DOM绑定事件
// document.querySelector('html').onclick=function(){
//     alert("Greetings!");
// }

let myImage = document.querySelector('#icon');
myImage.onclick = function(){
    if(myImage.getAttribute('src')==='images/fnt.jpg'){
        myImage.setAttribute('src','images/life.jpg');
    }
    else{
        myImage.setAttribute('src','images/fnt.jpg');
    }
}

let greet = document.querySelector("#greetings");
function setGreetings(){
    if(!localStorage.getItem("name")){
        let inputName = prompt("Please enter your name:)");
        greet.textContent = "Get Start!"+inputName;
        localStorage.setItem("name",inputName);
    }
    else{
        greet.textContent = "Get Start!"+localStorage.getItem("name");
    }
}

greet.onclick=setGreetings();

