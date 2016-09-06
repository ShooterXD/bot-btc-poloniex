var params = {

    MARGIN_TO_SELL: 2, // margin to sell when currency increases its value (example: sell when currency increases 2.5% of paid value)
    MARGIN_TO_BUY: 5, // margin to buy when currency decreases its value (example: buy when currency decreases 5% of last order)
    SECURITY_MARGIN: 10 // sell all balance if currency decreases x% after you bought it

};

module.exports = params;


// selling uses bid
// buying uses asks