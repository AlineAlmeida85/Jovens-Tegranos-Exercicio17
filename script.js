function verificar() {   

    let n1 = document.getElementById("numero1").value;
    let n2 = document.getElementById("numero2").value;
    
    let mens = "";

    if(n1 > n2 || n1 == n2) {
        let resultado = n1 / n2;
        if(resultado){
          mens = 'São múltiplos';
        } else {
            mens ='Não são múltiplos';
        };
      } else {
        let resultado = n2 / n1;
            if(resultado){
                mens = 'São múltiplos';
        } else {
            mens = 'Não são múltiplos';
        };
      }
      
      resposta.innerHTML = mens;    
}