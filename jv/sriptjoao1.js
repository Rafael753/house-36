function escolherNumero (){
    while ( numero !== 1 || numero !== 2 ){
        var numero = prompt('1- Procurar algo para iluminar \n 2- Procurar arma pra se proteger. ')
        if (numero == 1 ){
           window.location.href = '../html/joão3.html';
        }else if (numero == 2){
            window.location.href ='../html/gameover1.html';
        }else {
            alert ('escolha um numero valido.')
        }
    break
    }
}