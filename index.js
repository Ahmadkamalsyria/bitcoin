


fetch('https://apiv2.bitcoinaverage.com/constants/exchangerates/global')
    .then(response => {
        return response.json()
    })
    .then(data => {
        let rates = data.rates;
        let wholeData = data;
        console.log(rates)
        let display = document.getElementById("display");
        for (var element in rates) {
            console.log(wholeData.rates[element].name)
            let HTML = `<p>${element} ${" :  "}${wholeData.rates[element].name} ${': '} ${wholeData.time}</p>`
            display.insertAdjacentHTML('beforeend', HTML);

        }
    })
    .catch(err => {
        // Do something for an error here
    })