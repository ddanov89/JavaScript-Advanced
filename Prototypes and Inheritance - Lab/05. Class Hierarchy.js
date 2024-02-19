function classHierarchy() {
    class Figure{
        units;
        constructor(units ="cm"){
            if(new.target == Figure){
                throw new Error("Cannot make instances of abstract Class Figure");
            }
            this.units = units;
        }

        toString(){
            return  `Figures units: ${this.units}`;
        }

        get area() {
            return undefined;
        }
        changeUnits(unit){
            this.units = unit;
        }

        scaleParam(param) {
            switch (this.units) {
                case 'm':
                    param /= 10;
                    break;
                case 'cm':
                    break;
                case 'mm':
                    param *= 10;
                    break;
                default:
                    break;
            }
            return param;
        }
    }

    class Circle extends Figure{
        constructor(radius, units){
            super(units);
            this._radius = radius;
        }

        toString(){
            return super.toString() + ` Area: ${this.area} - radius: ${this.radius}`;
        }

        get area(){
            return Math.PI * Math.pow(this.radius, 2);
        }
        get radius() {
            return this.scaleParam(this._radius);
        }
    }

    class Rectangle extends Figure{
        constructor(width, height, units){
            super(units);
            this._width = width;
            this._height = height;
        }

        toString(){
            return super.toString() + ` Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }

        get area(){
            return this.width * this.height;
        }
        get width() {
            return this.scaleParam(this._width);
        }
        get height() {
            return this.scaleParam(this._height);
        }
    }

    return {Figure, Circle, Rectangle}
}