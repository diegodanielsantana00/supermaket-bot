const banco = require("../config/banco");
const sendMensage = require("../util/const");

let nome;

function execute(user, msg, contato) {

  pimeiraVezNome(contato)
  banco.db[user].stage = 1;

  
  tempoDeInatividade = setTimeout(function() {
    banco.db[user].stage = 0
  }, 7200000);
  return [
    "ð©ð¼âð¼OlÃ¡ " + nome + "!" + sendMensage.WELCOME,
    sendMensage.MENU,
  ];

}


function pimeiraVezNome(contato){
  if(contato){
    return nome = contato
  }else{
    return nome = "Tudo bem?"
  }
}

exports.execute = execute;
