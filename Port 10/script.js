let shorten = document.getElementById('links')
let btnCopied = document.getElementById('copy')
let btnCopie = document.getElementById('co')
let btnCop = document.getElementById('cop')

function short(){
    if (shorten.style.display == 'none'){
        shorten.style.display = 'block'
    } else {
        shorten.style.display == 'block'
        shorten.style.display = 'none'
    }
}

function btncopied(){
    btnCopied.innerText = 'Copied!'
    btnCopied.style.background = 'hsl(257, 27%, 26%)'
}

function btncopi(){
    btnCopie.innerText = 'Copied!'
    btnCopie.style.background = 'hsl(257, 27%, 26%)'
}

function btncopie(){
    btnCop.innerText = 'Copied!'
    btnCop.style.background = 'hsl(257, 27%, 26%)'
}