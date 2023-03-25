const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

test('si ingresamos 1 euro debería retornar 1,20 dolares', () => {
    let total = fromEuroToDollar(1);
    expect(total).toBe(1.2);
});
test('si ingresamos 100 euros debería retornar 120,00 dolares', () => {
    let total = fromEuroToDollar(100);
    expect(total).toBe(120);
});

test('si ingresamos 1 dolar debería retornar 106,58 yenes', () => {
    let total = fromDollarToYen(1);
    expect(total).toBe(106.58);
});

test('si ingresamos 100 dolares debería retornar 10.658,33 yenes', () => {
    let total = fromDollarToYen(100);
    expect(total).toBe(10658.33);
});

test('si ingresamos 1 yen debería retornar 0,06 libras', () => {
    let total = fromYenToPound(1);
    expect(total).toBe(0.01);
});
test('si ingresamos 100 yenes debería retornar 0,63 libras', () => {
    let total = fromYenToPound(100);
    expect(total).toBe(0.63);
});