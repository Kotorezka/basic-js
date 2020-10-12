const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let res = '';
  if ((!Array.isArray(members))||(members.length == 0)||(members == null)||(members == undefined)) {
    return false;
  }
  else {
    members.sort();
    for (let i = 0; i < members.length; i++) {
      if (typeof(members[i]) == 'string') {
        res+= members[i].trim().split('')[0].toUpperCase();
    }
  }
  
}
  return res.split('').sort().join('');
}
