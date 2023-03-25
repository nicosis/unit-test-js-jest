// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

fromDollarToYen = (dollar) => Number((dollar * oneEuroIs.JPY / oneEuroIs.USD).toFixed(2));
fromEuroToDollar = (euro) => Number((euro * oneEuroIs.USD).toFixed(2));
fromYenToPound = (yen) => Number((yen * oneEuroIs.GBP / oneEuroIs.JPY).toFixed(2));

// console.log(fromDollarToYen(10));
// console.log(fromEuroToDollar(10));
// console.log(fromYenToPound(10));

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };
