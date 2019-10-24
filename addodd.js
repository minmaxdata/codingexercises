function addOdds(newInputArray, boolean) {
  var numArr = newInputArray.filter(e=> typeof e === 'number')
  for (var i = 0; i < numArr.length; i++) {
    if (boolean === true) {
      return numArr.filter(e=>e % 2 != 0).reduce((a,b)=> a+b)
    } else if (boolean === false) {
      return numArr.filter(e=>e % 2).reduce((a,b)=> a+b)
    }
  }
}