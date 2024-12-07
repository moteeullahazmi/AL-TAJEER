import mongoose from 'mongoose'

const orderSchema = new mongoose.Schema({
    userId : { type: String, requird: true},
    items : { type: Array, requird: true},
    amount : { type: Number, requird: true},
    address : { type: Object, requird: true},
    status : { type: String, requird: true, default: "Order Placed"},
    paymentMethod : {type: String, required:true},
    payment: { type: Boolean, required:true, default: false},
    date: {type: Number, requird:true}
});

const orderModel = mongoose.models.order || mongoose.model('order', orderSchema);
export default orderModel;