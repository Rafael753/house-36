function escolherNumero (){
    while ( numero !== 1 || numero !== 2 ){
        var numero = prompt('1-Entrar na casa \n 2-voltar pra casa ')
        if (numero == 1 ){
           window.location.href = '../html/rafa1.html';
        }else if (numero == 2){
            window.location.href ='../html/gameovercasa.html';
        }else {
            alert ('escolha um numero valido.')
        }
    break
    }
}