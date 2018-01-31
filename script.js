window.onload = function(){

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
            currencyObj.submitObj();
        },
        jsonWriting: function(){
            var outer = document.getElementById('outer');
            
            if (currencyObj.xhr.status != 200) {

              alert( this.xhr.status + ': ' + xhr.statusText ); 
            }
            else {
                
              outer.innerHTML = this.jsonObj[this.currency.value - 1].price_usd + ' $';
            }
        },
        submitObj: function(){

            var form = document.getElementById('form');
            
            form.addEventListener('submit', function(e){
            e.preventDefault();

            currencyObj.jsonWriting();
        });
        }
    }
    currencyObj.init();
}

