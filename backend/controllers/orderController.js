import orderModel from "../models/oderModel.js";
import userModel from "../models/userModels.js";
import razorpay from "razorpay";

// global variable
const currency = "inr";
const deliveryCharge = 40


// gateway initilize
const razorpayInstanse = new razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

//  Placing Orders using COD method
const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//  Placing Orders using Stripe method
const placeOrderStripe = async (req, res) => {};

//  Placing Orders using Razorpay method
const placeOrderRazorpay = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Razorpay",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const options = {
      amount: amount * 100, // Convert to paise
      currency: currency.toLocaleUpperCase(),
      receipt: newOrder._id.toString()
    }
    

    await razorpayInstanse.orders.create(options, (error, order)=> {
      if(error){
        console.log(error)
        return res.json({success:false, message:error})
      }
      res.json({success:true, order})
    })

  } catch (error) {
    console.log(error);
    res.json({success:false, message:error.message})
  }
};

// verifyRazorPay
const verifyRazorpay = async (req,res) => {
  try {
    const {userId, razorpay_order_id} = req.body;

    const orderInfo = await razorpayInstanse.orders.fetch(razorpay_order_id)
    if(orderInfo.status === 'paid') {
      await orderModel.findByIdAndUpdate(orderInfo.receipt, {payment:true})
      await userModel.findByIdAndUpdate(userId,{cartData:{}})
      res.json({success:true, message: "Payment Successfulll"})
    } else {
      res.json({ success:false, message: "Payment failed"})
    }
  } catch (error){
    console.log(error);
    res.json({success:false, message:error.message})
  }
}

// All Orders data for Admin Panel
const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// User Order Data For frontend
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    const orders = await orderModel.find({ userId });

    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// update order status from Admin Panel
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ success: true, message: "Status Updated" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export {
  verifyRazorpay,
  placeOrder,
  placeOrderRazorpay,
  placeOrderStripe,
  allOrders,
  userOrders,
  updateStatus,
};
