let totalSoma, valor, digitoInteiro, numero, contador, segundoNumero, segundo = 0;
let multiplicado, somado, dividido, subtraido, repetindo = false;
const tela = document.querySelector("input");
function botao(digito){
    valor += digito;
    tela.value += digito;
    digitoInteiro = parseInt(tela.value);
}
function botaoClear(){
    totalSoma, valor, digitoInteiro, numero, contador, segundoNumero, segundo = 0;
    multiplicado, somado, dividido, subtraido, repetindo = false ;
    tela.value = '';
}
function botaoOperador(simbolo){
    switch (simbolo){
        case '+':
            if (isNaN(tela.value)){
                botaoClear();
            }
            adicionar();
            somado = true;
            subtraido = false;
            dividido = false;
            multiplicado = false;
            contador++;
            repetindo = false;
            break;
        case 'x':
            if (isNaN(tela.value)){
                botaoClear();
            }
            adicionar();
            multiplicado = true;
            subtraido = false;
            somado = false;
            dividido = false;
            contador++;
            repetindo = false;
            break;
        case '/':
            if (isNaN(tela.value)){
                botaoClear();
            }
            adicionar();
            dividido = true;
            subtraido = false;
            multiplicado = false;
            somado = false;
            contador++;
            repetindo = false;
            break;
        case '-':
            if (isNaN(tela.value)){
                botaoClear();
            }
            adicionar();
            subtraido = true;
            somado = false;
            multiplicado = false;
            dividido = false;
            contador++;
            repetindo = false;
            break;
        case '=':
            if (tela.value == 'Infinito') {
                break
            }
            segundo++;
            if (segundo == 1){
                segundoNumero = parseInt(tela.value);
            }
            if (contador == 0){
                botaoClear();
            } 
            else if (somado){
                if (!repetindo){
                    totalSoma += parseInt(tela.value);
                    tela.value = totalSoma;
                } else{
                repetiuIgual('+');
                }
            } else if (multiplicado){
                if (!repetindo){
                totalSoma *= parseInt(tela.value);
                tela.value = totalSoma;
                } else{
                repetiuIgual('*');
                }
            } else if (dividido){
                if (!repetindo){
                    totalSoma /= parseInt(tela.value);
                    if (totalSoma == Infinity){
                        tela.value = 'Infinito'
                    } else {
                    tela.value = Math.round(totalSoma);}
                } else{
                repetiuIgual('/');
                }
            } else if (subtraido){
                if (!repetindo){
                totalSoma -= parseInt(tela.value);
                tela.value = totalSoma;
                somado = false;
                } else{
                    repetiuIgual('-');
                }
            }
            repetindo = true;
        }
}
function adicionar(){  
    totalSoma = parseInt(tela.value);
    tela.value = '';
}
function repetiuIgual(simbolo){
     if (repetindo){ 
        if (somado){
             simbolo = '+';
        } else if (multiplicado){
             simbolo = '*';
        } else if (dividido){
             simbolo = '/';
        } else if (subtraido){
            simbolo = '-';
        }}
        switch (simbolo){
            case '+':
                totalSoma += segundoNumero;
                tela.value = totalSoma;
                break;
            case '*':
                totalSoma *= segundoNumero;
                tela.value = totalSoma;
                break;
            case '/':
                totalSoma /= segundoNumero;
                tela.value = totalSoma;
                break;
            case '-':
                totalSoma -= segundoNumero;
                tela.value = totalSoma;
                break;
            default:
                break;
        }    
}