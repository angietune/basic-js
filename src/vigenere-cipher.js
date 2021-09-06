import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(condition = true) {
    this.condition = condition;
  }

  encrypt(message, key) {
    if (!message || !key || message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    let alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let sk = key;
    let li = 0;
    while (sk.length < message.length) sk += sk;
    sk = sk.substring(0, message.length);

    let output = "";
    if (!message || !key) throw new Error();
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      li = alp.indexOf(message[i]);
      if (li == -1) {
        output += message[i];
      } else {
        output += alp[(26 + li + alp.indexOf(sk[j])) % 26];
        j++;
      }
    }

    if (this.condition) {
      return output;
    } else {
      return output.split("").reverse().join("");
    }
  }
  decrypt(message, key) {
    if (!message || !key || message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let alp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    key = key.toUpperCase();
    let sk = key;
    let li = 0;
    while (sk.length < message.length) sk += sk;
    sk = sk.substring(0, message.length);

    let output = "";
    if (!message || !key) throw new Error();
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      li = alp.indexOf(message[i]);
      if (li == -1) {
        output += message[i];
      } else {
        output += alp[(26 + li - alp.indexOf(sk[j])) % 26];
        j++;
      }
    }
    if (this.condition) {
      return output;
    } else {
      return output.split("").reverse().join("");
    }
  }
}
