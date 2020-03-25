//##### GLOBAL OBJECTS #####//
var Transaction = function(type, description, value){
    this.type = type;
    this.description = description;
    this.value = value;
}


//##### DATA MODULE #####//
var dataModule = (function(){
    // == private variables and functions == //

    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
    
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }

    var data = {
        transactions:{
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }

    }

    // == public functions == //
    return {
        addItem: function(type, description, value){
            var newItem, id;

            id = (data.transactions[type].length > 0
                ? id = data.transactions[type][data.transactions[type].length - 1].id + 1
                :  id = 0);

            newItem = (type === 'exp' 
                ? new Expense(id, description, value) 
                : new Income(id, description, value))
            
            data.transactions[type].push(newItem);
            return newItem;    
        }
    };

})();

//#####  UI MODULE   #####//
var uiModule = (function(){
    // == private variables and functions == //
    var DOMStrings = {
        BUTTON_CLASS:  '.add__btn',
        ENTER_KEYCODE: 13,
        TRANSACTION_TYPE_CLASS: '.add__type',
        TRANSACTION_DESCRIPTION_CLASS: '.add__description',
        TRANSACTION_VALUE_CLASS: '.add__value'
    }
    // == public functions == //
    return {
        getInput: function(){
            return new Transaction(
                    document.querySelector(DOMStrings.TRANSACTION_TYPE_CLASS).value,
                    document.querySelector(DOMStrings.TRANSACTION_DESCRIPTION_CLASS).value,
                    document.querySelector(DOMStrings.TRANSACTION_VALUE_CLASS).value               
                );               
        }, 

        getDOMStrings: function(){
            return DOMStrings;
        }
       
    };

})();

//#####  CONTROLLER #####//
var ControlerModule = (function(UIControler, DataController){
 
    // == private variables and functions == //
    var setupEventListeners = function(){
        var DOM = UIControler.getDOMStrings();
        document.querySelector(DOM.BUTTON_CLASS).addEventListener('click', addItem);
    
        document.addEventListener('keypress', function(event){
            if(event.keyCode == DOM.ENTER_KEYCODE || event.which == DOM.ENTER_KEYCODE) {
                addItem();        
            }
        });
    }

    var addItem = function(){ 
        var input = UIControler.getInput();  
        
        var item = DataController.addItem(input.type, input.description, input.value);
        console.log(item);

    };

    
    

    // == public functions == //
    return {
        init: function(){
            console.log("Application started");
            setupEventListeners();           
        }
    }


})(uiModule, dataModule);


ControlerModule.init();