class CalcController {

    constructor(){
        this._calcDisplay = "0";
        this._currentDate;
    }

    get calcDisplay(){
        return this._calcDisplay;
    }

    set calcDisplay(value){
        this._calcDisplay = value;
    }

    get currentDate(){
        return this._currentDate;
    }

    set currentDate(date){
        this.currentDate = date;
    }


}