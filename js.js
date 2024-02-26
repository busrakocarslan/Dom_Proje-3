const baslik=document.querySelector(".colorDiv")
baslik.style.display="flex"
baslik.style.justifyContent = "center";
baslik.style.alignItems = "center";
baslik.style.margin="5rem 20rem"
// baslik.style.width="10rem"
// baslik.style.height="13rem"
// baslik.style.backgroundColor="yellow"
baslik.style.flexDirection="column"
baslik.style.fontSize="2rem"

document.querySelector("body").style.backgroundColor="#78e9a6"
document.querySelector("#colorInput").value="#78e9a6"



const butonlar=document.querySelector(".btn-div")
butonlar.style.display="flex"
butonlar.style.justifyContent="space-evenly"
butonlar.style.margin="15rem 0"


const klik=document.querySelector(".btn-click")
klik.style.fontSize="3rem"
klik.style.padding="1rem"
klik.style.padding="1rem 5rem"
klik.style.backgroundColor = "purple";
klik.style.color = "orange";
klik.style.border = "4px solid orange";
klik.style.borderRadius = "50%";
klik.style.cursor="pointer"
// klik.style.height="15rem"


const klik2=document.querySelector(".btn-over")
klik2.style.fontSize="3rem"
klik2.style.padding="1rem"
klik2.style.padding="1rem 5rem"
klik2.style.backgroundColor = "orange";
klik2.style.color = "purple";
klik2.style.border = "4px solid purple";
klik2.style.borderRadius = "10%";
klik2.style.cursor="pointer"

let yeniRenk= function rastgeleRenkOlustur() {
    const rastgeleRenk = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + rastgeleRenk;
}


klik2.addEventListener("mouseover", function(){
    const renk=yeniRenk()
    document.querySelector("body").style.backgroundColor=renk;
    document.querySelector("#colorText").textContent= renk;
    document.querySelector("#colorInput").value=renk

 

})
klik.addEventListener("click", function(){
    const renk=yeniRenk()
    document.querySelector("body").style.backgroundColor=renk;
    document.querySelector("#colorText").textContent= renk;
    document.querySelector("#colorInput").value=renk
 

})