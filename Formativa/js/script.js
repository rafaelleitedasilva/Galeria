let imagens = ['paisagem1.jpg','paisagem2.jpg','paisagem3.jpg','paisagem4.jpg','paisagem5.jpg','paisagem6.jpg','paisagem7.jpg','paisagem8.jpg']
let localImagens = document.getElementById('imagens')

let videos = ['video1.mp4','video2.mp4','video3.mp4','video4.mp4']
let localVideo = document.getElementById('videos')

let bot1 = document.getElementById('bot1')
let bot2 = document.getElementById('bot2')

function Imagens(){
    localImagens.style="display:flex;"
    localVideo.style="display:none;"
    bot1.style = 'color:black;'
    bot2.style = 'color:gray;'
}

function Videos(){
    localVideo.style="display:flex;"
    localImagens.style="display:none;"
    bot2.style = 'color:black;'
    bot1.style = 'color:gray;'
}


for(let x = 0; x < imagens.length; x++){
    let imagem = document.createElement('div')
    imagem.className = 'imagem'
    imagem.style = `background-image: url('./Imagens/${imagens[x]}')`
    localImagens.append(imagem)
    imagem.addEventListener('click', ()=>{
        let divContainer = document.createElement("div");
        divContainer.className = 'container-sala'
        let divModal = document.createElement("div");
        divModal.className = 'modal-sala'
        divModal.style = `background-image: url('./Imagens/${imagens[x]}');`
        let buttonX = document.createElement("button")
        buttonX.innerText="X"
        buttonX.className="btn btn-danger-modal"
        buttonX.onclick = function(){
            divContainer.style="display:none;"
        }
        let buttonReduzir = document.createElement("button")
        buttonReduzir.innerHTML = '-'
        buttonReduzir.className = 'btn btn-sucess-reduzir'
        let reduz = 0
        buttonReduzir.onclick = function(){
            divModal.setAttribute('style', `background-image: url('./Imagens/${imagens[x]}');width:${70-reduz}vw;height:${90-reduz}vh;`)
            reduz = reduz + 5
            aumenta = 0
        }
        let buttonAumenta = document.createElement("button")
        buttonAumenta.innerHTML = '+'
        buttonAumenta.className = 'btn btn-sucess-aumentar'
        let aumenta = 0
        buttonAumenta.onclick = function(){
            divModal.setAttribute('style', `background-image: url('./Imagens/${imagens[x]}');width:${70+aumenta}vw;height:${90+aumenta}vh;`)
            aumenta = aumenta + 5
            reduz = 0
        }
        localImagens.append(divContainer)
        divContainer.append(divModal)
        divModal.append(buttonX)
        divModal.append(buttonReduzir)
        divModal.append(buttonAumenta)
    })
}

for(let x = 0; x < videos.length; x++){
    let div = document.createElement('div')
    let video = document.createElement('video')
    video.src=`Videos/Video${x}.mp4`
    div.className="divAuto"
    video.className = 'video'
    video.id = `video${x}`
    video.setAttribute('controls', 'controls')
    video.setAttribute('type', 'video/mp4')
    video.poster = `Videos/Posters/Poster${x}.jpg`
    localVideo.append(div)
    div.append(video)
    let buttonPlay = document.createElement("button")
    buttonPlay.className = 'btn btn-dark'
    buttonPlay.innerHTML = 'Play'
    buttonPlay.addEventListener('click', () =>{
        document.getElementById(`video${x}`).play()
    })
    let buttonPause = document.createElement("button")
    buttonPause.className = 'btn btn-dark'
    buttonPause.innerHTML = 'Pausar'
    buttonPause.addEventListener('click', () =>{
        document.getElementById(`video${x}`).pause()
    })
    let buttonAumentar = document.createElement("button")
    buttonAumentar.className = 'btn btn-dark'
    buttonAumentar.innerHTML = '+ Volume'
    buttonAumentar.addEventListener('click', () =>{
        document.getElementById(`video${x}`).volume += 0.1;
    }
 )
    let buttonDiminuir = document.createElement("button")
    buttonDiminuir.className = 'btn btn-dark'
    buttonDiminuir.innerHTML = '- Volume'
    buttonDiminuir.addEventListener('click', () =>{
        document.getElementById(`video${x}`).volume -= 0.1;
    }
 )
    let buttonTelaCheia = document.createElement("button")
    buttonTelaCheia.className = 'btn btn-dark'
    buttonTelaCheia.innerHTML = 'Tela Cheia'
    buttonTelaCheia.addEventListener('click', () =>{
        document.getElementById(`video${x}`).requestFullscreen();
    })
    let buttonFeedback = document.createElement("button")
    buttonFeedback.className = 'btn btn-dark'
    buttonFeedback.innerHTML = 'Feedback'
    buttonFeedback.addEventListener('click', () => {
        document.getElementById("feedback").style = "display: block;"
        document.getElementById("overlay").style = "display:flex;"
    })

    let buttonMudo = document.createElement("button")
    buttonMudo.className = 'btn btn-dark'
    buttonMudo.innerHTML = 'Mudo'
    buttonMudo.addEventListener('click', () =>{
        document.getElementById(`video${x}`).volume = 0;
    })
    div.append(buttonPlay)
    div.append(buttonPause)
    div.append(buttonAumentar)
    div.append(buttonDiminuir)
    div.append(buttonTelaCheia)
    div.append(buttonFeedback)
    div.append(buttonMudo)
}   
