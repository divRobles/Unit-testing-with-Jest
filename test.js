
const {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound

} = require('./script.js')

test('2 dolares = 213.1666 yenes',()=>{
    expect(fromDollarToYen(2)).toBe(213.16666666666669);
});

test('2 euros = 2.4 dolares',()=>{
    expect(fromEuroToDollar(2)).toBe(2.4);
});

test('2 yenes = 0.012509773260359656 pounds',()=>{
    expect(fromYenToPound(2)).toBe(0.012509773260359656)
});