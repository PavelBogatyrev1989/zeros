module.exports = function getZerosCount(number) {
  S = 0;
  while (number>=5){
    number = Math.floor(number/5);
    S = number + S;
  }   
return S;
}
