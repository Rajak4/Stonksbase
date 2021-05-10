const config = require('./config.js')
const coinbase = require('coinbase')

const apiKey = config.coinbase.API_Key
const apiSecret = config.coinbase.API_Secret

const client = new coinbase.Client({apiKey, apiSecret, strictSSL: false})

currencyCode = 'DKK'  // can also use EUR, CAD, etc.

// Make the request
client.getSpotPrice({'currency': currencyCode}, function(err, price) {
  console.log('Current bitcoin price in ' + currencyCode + ': ' +  price.data.amount);
});