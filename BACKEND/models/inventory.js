const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema ({

    iteamId : {
        type : String
        
    },
    iteamName : {
        type : String,
        required : true

    },
    price : {
        type : Number,
        required : true

    },
    quantity : {
    type : Number,
    required : true

    },
    brandName : {
        type : String,
        required : true

    }

})

const Inventory = mongoose.model("inventory",inventorySchema);

module.exports = Inventory;
