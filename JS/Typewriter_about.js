var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    let x = 0;
    TxtType.prototype.tick = function() {
        var fullTxt = this.toRotate[0];
        if(this.loopNum < 4){
           let con = "CON";

           this.txt = '"<span class="con">'+con.substring(0, this.loopNum) + '</span>';
        }else if(this.loopNum < 8 && this.loopNum > 3){
            let coin = "COIN";

            this.txt = '"<span class="con">CON</span><span class="coin">' + coin.substring(0, x) + '</span>';
            x++;
        }else if(this.toRotate[0].length-1 + 8 === this.loopNum){
            this.txt = '"<span class="con">CON</span><span class="coin">COIN</span>' + fullTxt.substring(0, this.loopNum-8) + '"';
        }else{
            this.txt = '"<span class="con">CON</span><span class="coin">COIN</span>' + fullTxt.substring(0, this.loopNum-8);
        }
        

        this.el.innerHTML = '<div class="wrap">'+this.txt+'</div>';

        var that = this;
        var delta = 40;
        this.loopNum++;
        
        setTimeout(() => {
            if(this.loopNum !== this.toRotate[0].length +8){
                that.tick();
            }
            }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate =  '[" ist eine Kryptowährung und somit eine dezentral organisierte Währung, die schwer mit unserem Bankensystem vergleichbar ist."]';
            var period = 100;
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
    };