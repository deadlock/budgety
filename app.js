//#####  CONSTANTS   #####//
const BUTTON_CLASS =  '.add__btn';
const ENTER_KEYCODE = 13;
const TRANSACTION_TYPE_CLASS = '.add__type';
const TRANSACTION_DESCRIPTION_CLASS = '.add__description';
const TRANSACTION_VALUE_CLASS = '.add__value';

//##### GLOBAL OBJECTS #####//
var Transaction = function(type, description, value){
    this.type = type;
    this.description = description;
    this.value = value;
}

//#####  UI MODULE   #####//
var uiModule = (function(){
    // == private variables and functions == //

    // == public functions == //
    return {
        getInput: function(){
            return new Transaction(
                    document.querySelector(TRANSACTION_TYPE_CLASS).value,
                    document.querySelector(TRANSACTION_DESCRIPTION_CLASS).value,
                    document.querySelector(TRANSACTION_VALUE_CLASS).value
                );
            
        } 
    };

})();

//##### DATA MODULE #####//
var dataModule = (function(){

    
})();

//#####  CONTROLLER #####//
var ControlerModule = (function(UIControler, DataController){

    var addItem = function(){ 
        console.log(UIControler.getInput()); 
    };

    document.querySelector(BUTTON_CLASS).addEventListener('click', addItem);
    
    document.addEventListener('keypress', function(event){
        if(event.keyCode == ENTER_KEYCODE || event.which == ENTER_KEYCODE) {
            addItem();        
        }
    });


})(uiModule, dataModule);