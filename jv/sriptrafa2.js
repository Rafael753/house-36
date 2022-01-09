function escolherNumero (){
    while ( numero !== 1 || numero !== 2 ){
        var numero = prompt('1- Procurar algo para iluminar. \n 2- Procurar uma arma. ')
        if (numero == 1 ){
           window.location.href = '../html/rafa3.html';
        }else if (numero == 2){
            window.location.href ='../html/gameover1.html';
        }else {
            alert ('escolha um numero valido.')
        }
    break
    }
}