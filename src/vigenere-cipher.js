const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(condition = true) {
    this.condition = condition;
  }
  
  encrypt(message, key) {
    message = message.toUpperCase();
    key = key.toUpperCase();
    let alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let sk = key;
    let li = 0;
    while (sk.length < message.length ) sk += sk;
    sk = sk.substring(0, message.length);

    let output = '';
    if (!message || !key) throw new Error;
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      li = alp.indexOf(message[i]);
      if (li == -1) {
        output += message[i];
      } else {
        output +=  alp[(26 + li + alp.indexOf(sk[j])) % 26];
        j++;
      }  
    }
    
    if (this.condition) {
      return output;
    } else {
      return output.split('').reverse().join('');
    }
  }    

  decrypt(message, key) {
    let alp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    key = key.toUpperCase();
    let sk = key;
    let li = 0;
    while (sk.length < message.length) sk += sk;
    sk = sk.substring(0, message.length);

    let output = '';
    if (!message || !key) throw new Error;
    let j=0;
    for (let i = 0; i < message.length; i++) {
    
      li = alp.indexOf(message[i]);
      if ( li == -1) {
        output += message[i];
      } else {
        output +=  alp[ (26 + li - alp.indexOf(sk[j]) ) % 26];
        j++;
      }      
    }
    if (this.condition) {
      return output;
    } else {
      return output.split('').reverse().join('');
    }
  }

}
module.exports = VigenereCipheringMachine;
