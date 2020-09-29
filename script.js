let rodyti=document.querySelector("#rodyti");
let maisyti=document.querySelector(".maisyti");
let photo=document.querySelector(".photos");
let img=document.querySelectorAll("img");
let naujosImg=[];
rodyti.addEventListener("click", function(){
    photo.classList.toggle("rodyti");
    maisyti.classList.toggle("maisyti");
    if(rodyti.value==="Rodyti")
        rodyti.value="Nerodyti";
        else rodyti.value="Rodyti";
})
maisyti.addEventListener("click",function(){
    let kiek=img.length;
    let rand, keisti;
    while(kiek>0){
        rand=Math.floor(Math.random() * kiek);
        kiek--;
        keisti=img[kiek].src;
        img[kiek].src=img[rand].src;
        img[rand].src=keisti;
    }
})