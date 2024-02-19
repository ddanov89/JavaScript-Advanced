function ballonCreator() {


    class Balloon {
        color;
        gasWeight;
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }

    class PartyBalloon extends Balloon {
        ribbonColor;
        ribbonLength;
        constructor(color, gasWeight, ribbonColor, ribbonLength) {
            super(color, gasWeight);

            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
            this.ribbon = {
                color: ribbonColor,
                length: ribbonLength,
            };
        }
        get ribbon(){
           return this._ribbon;
        }
        set ribbon(data){
            this._ribbon = data;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        color;
        gasWeight;
        ribbonColor;
        ribbonLength;
        
        constructor(color, gasWeight, ribbonColor, ribbonLength, text){
            super(color, gasWeight, ribbonColor, ribbonLength);
            this.text = text;
        }

        get text() {
            return this._text;
        }

        set text(text){
            this._text = text;
        }
    }

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon   
    }
}
let classes = ballonCreator();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);