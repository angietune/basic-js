const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if (Array.isArray(members)) {
    let dream = [];
    for (let i = 0; i < members.length; i++) {
    
      if (typeof members[i] === "string" || members[i] instanceof String) {
        dream.push(members[i].trim()[0].toUpperCase());
      };
    };
    return dream.sort().join('');
  } else return false;
  
};
