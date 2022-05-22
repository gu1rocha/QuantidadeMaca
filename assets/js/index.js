
var numMaca = 0

let gerarNum = () => Math.floor(Math.random() * (9 - 1)) + 1;

var boxMacas = document.querySelector(".boxMacas");
var labels = document.querySelectorAll("label");
var inputs = document.querySelectorAll("input");

var backParabens = document.querySelector('#backParabens')
var refresh = backParabens.querySelector('.refresh')

let gerarMacas = () =>{
    numMaca = gerarNum()
    for(let i = 0; i < numMaca; i++){
        let maca = document.createElement("img")
        maca.src = "assets/img/maca.png"
        boxMacas.appendChild(maca)
    }
}

gerarMacas()

refresh.addEventListener('click',()=>{
    document.querySelector("#audioComemorando").pause();
    document.querySelector("#audioComemorando").currentTime = 0;
    for(let i = 0; i < numMaca; i++){
        boxMacas.querySelector('img').remove();
    }
    for(label of labels){
        label.classList.remove("acerto");
        label.classList.remove("erro");
    }
    backParabens.removeAttribute("style")
    gerarMacas();
})

let finalizar = () =>{
    backParabens.style.display = 'flex'
}


for(input of inputs){
    let value = input.value
    input.addEventListener('click',(el)=>{
        document.querySelector("#audioErro").pause();
        document.querySelector("#audioErro").currentTime = 0;
        if(el.target.value == numMaca){
            document.querySelector(`label[for='${el.target.id}']`).classList.add('acerto')
            finalizar();
            document.querySelector("#audioComemorando").play()
        }else{
            document.querySelector(`label[for='${el.target.id}']`).classList.add('erro')
            document.querySelector("#audioErro").play()
        }
    });
}

let arr = ["a1","a2","a3"]

let shuffleArray = newarr => { 
    for(let i = newarr.length -1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [newarr[i], newarr[j]] = [newarr[j], newarr[i]];
    }
    return newarr
}

console.log(shuffleArray(arr))