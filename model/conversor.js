export default class Conversor{
    valorParaCor(valor) {
        let saida = "";
        let aux = valor;
        let ok = true;
        if (aux.length==0 || aux.length < 2) {
          return "VALOR INVÁLIDO"
        } else {
          for(let i = 0; i < 2; i++){
            switch (aux[i]) {
              case "0":
                saida+="Preto, "
                break;
              case "1":
                saida+="Marrom, "
                break;
              case "2":
                saida+="Vermelho, "
                break;
              case "3":
                saida+="Laranja, "
                break;
              case "4":
                saida+="Amarelo, "
                break;
              case "5":
                saida+="Verde, "
                break;
              case "6":
                saida+="Azul, "
                break;
              case "7":
                saida+="Roxo, "
                break;
              case "8":
                saida+="Cinza, "
                break;
              case "9":
                saida+="Branco, "
                break;
              default:
                ok = false
                break;
            }
          }
          let zeros = 0
          for(let i = 2; i < aux.length; i++){
            if (aux[i] == "0") {
              zeros++
            } else {
              ok = false
            }
          }
          if (zeros > 9) {
            ok = false
          }
          if (ok) {
            switch (zeros) {
              case 0:
                  saida+="Preto, "
                  break;
                case 1:
                  saida+="Marrom, "
                  break;
                case 2:
                  saida+="Vermelho, "
                  break;
                case 3:
                  saida+="Laranja, "
                  break;
                case 4:
                  saida+="Amarelo, "
                  break;
                case 5:
                  saida+="Verde, "
                  break;
                case 6:
                  saida+="Azul, "
                  break;
                case 7:
                  saida+="Roxo, "
                  break;
                case 8:
                  saida+="Cinza, "
                  break;
                case 9:
                  saida+="Branco, "
                  break;
                default:
                  break;
            }
            saida+="Dourado."
            return saida
          } else {
            return "VALOR INVÁLIDO"
          }
        }
    }

    corParaValor(faixa1, faixa2, faixa3){
        let valor = "";
        let ok = true;
        switch (faixa1) {
            case "Marrom":
                valor += "1"
                break;
            case "Vermelho":
                valor += "2"
                break;
            case "Laranja":
                valor += "3"
                break;
            case "Amarelo":
                valor += "4"
                break;
            case "Verde":
                valor += "5"
                break;
            case "Azul":
                valor += "6"
                break;
            case "Roxo":
                valor += "7"
                break;
            case "Cinza":
                valor += "8"
                break;
            case "Branco":
                valor += "9"
                break;
            default:
                ok=false;
                break;
        }
        switch (faixa2) {
            case "Preto":
                valor += "0"
                break;
            case "Marrom":
                valor += "1"
                break;
            case "Vermelho":
                valor += "2"
                break;
            case "Laranja":
                valor += "3"
                break;
            case "Amarelo":
                valor += "4"
                break;
            case "Verde":
                valor += "5"
                break;
            case "Azul":
                valor += "6"
                break;
            case "Roxo":
                valor += "7"
                break;
            case "Cinza":
                valor += "8"
                break;
            case "Branco":
                valor += "9"
                break;
            default:
                ok=false;
                break;
        }
        valor = parseInt(valor)
        switch (faixa3) {
            case "Preto":
                valor *= ""
                break;
            case "Marrom":
                valor *= 10
                break;
            case "Vermelho":
                valor *= 100
                break;
            case "Laranja":
                valor *= 1000
                break;
            case "Amarelo":
                valor *= 10000
                break;
            case "Verde":
                valor *= 100000
                break;
            case "Azul":
                valor *= 1000000
                break;
            case "Roxo":
                valor *= 10000000
                break;
            case "Cinza":
                valor *= 100000000
                break;
            case "Branco":
                valor *= 1000000000
                break;
            case "Dourado":
                valor *= 0.1
                break;
            default:
                ok=false;
                break;
        }
        if (ok) {
          valor = valor.toLocaleString()
          // let c = 0
          // let aux = ""
          // for(let i = valor.length-1; i >= 0; i--){
          //   c++
          //   aux += valor[i]
          //   if (c==3 && i) {
          //     aux+="."
          //     c=0
          //   }
          // }
          // valor = ""
          // for(let i = aux.length-1; i >= 0; i--){
          //   valor += aux[i]
          // }
          // if (valor[0] == ".") {
          //   valor[0] == ""
          // }
            return valor + " Ohms"
        } else {
            return "Selecione as cores corretamente"
        }
    }
}