document.addEventListener('DOMContentLoaded', function(){
    
    var currencyObj = {
        xhr: null,
        currency: null,
        jsonObj: null,
        init: function(){
            this.currency = document.getElementById('chooseCurrency');
            
            this.xhr = new XMLHttpRequest();
            
            this.xhr.open('GET', 'https://api.coinmarketcap.com/v1/ticker/', false);
            
            this.xhr.send();
            
            this.jsonObj = JSON.parse(this.xhr.responseText);
            
            
            
            for(i=0;i<this.jsonObj.length;i++){

                this.currency.innerHTML += '<option value = "' + this.jsonObj[i].rank + '">' + this.jsonObj[i].name + ' (' + this.jsonObj[i].symbol + ') ' + '</option>';
                
            }
            currencyObj.jsonWriting();
            currencyObj.changeVal();
        },
        jsonWriting: function(){
            var outer = document.getElementById('outer');
            
            if (currencyObj.xhr.status != 200) {

              alert( this.xhr.status + ': ' + xhr.statusText ); 
            }
            else {
                
              outer.innerHTML = this.jsonObj[this.currency.value - 1].price_usd + ' $';            }
        },
        changeVal: function(){
            
            this.currency.onchange =  function(){
                currencyObj.jsonWriting();
            }
        }
    }
    currencyObj.init();
});

    


