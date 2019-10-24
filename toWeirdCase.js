/*
describe('toWeirdCase', function(){
  it('should return the correct value for a single word', function(){
    Test.assertEquals(toWeirdCase('This'), 'ThIs');
    Test.assertEquals(toWeirdCase('is'), 'Is');
  });
  it('should return the correct value for multiple words', function(){
    Test.assertEquals(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
  });
});
*/
function toWeirdCase(string) {
    return string
        .split(' ').map(item => {
            return item
                .split('').map((it, index) => {
                    return index % 2 === 0 ? it.toUpperCase() : it;
                }).join('')
        }).join(' ');
}
console.log(toWeirdCase('This'))
console.log(toWeirdCase('is'))
console.log(toWeirdCase('This is a test'))

console.log(toWeirdCase("String"));//=> returns "StRiNg"
console.log(toWeirdCase("Weird string case"));//=> returns "WeIrD StRiNg CaSe"