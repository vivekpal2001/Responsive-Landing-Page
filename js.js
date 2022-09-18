console.log("hello")
function imgslider(name){
    document.querySelector('.fruitimg').src=name;
}
function background(color){
    document.querySelector('.bg').style.background=color;
}

let img=document.querySelectorAll('.fruits li');
for(let i=0;i<img.length;i++){
    img[i].onclick = function(){
        let c=0; 
        while(c<img.length){
            img[c++].className='check';
        }
        img[i].className='check active';
        let bg=document.getElementsByClassName('bg');

    }
}