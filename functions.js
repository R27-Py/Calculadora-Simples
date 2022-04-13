let numero_1 = document.querySelector('#n1')
let numero_2 = document.querySelector('#n2')
const resultado = document.querySelector('span')


function adicao() 
{
    resultado.innerHTML = parseFloat(n1.value) + parseFloat(n2.value)
}

function subtr() 
{
    resultado.innerHTML = parseFloat(n1.value) - parseFloat(n2.value)  
}

function multi() 
{
    resultado.innerHTML = parseFloat(n1.value) * parseFloat(n2.value)    
}

function divisao() 
{
    resultado.innerHTML = parseFloat(n1.value) / parseFloat(n2.value)    
}


