const express = require('express');
const router = express.Router();
const query = require("../mysql/index"); 

router.post('/', async (req, res) => {
    let orderData = {
        name : req.body.buyerName,
        amount : req.body.paidAmount,
        phone : req.body.buyerTel,
        address : req.body.buyerAdd,
        merchant_uid : req.body.merchantUid //결제번호
    };
    let orderDetail = req.body.products;
    let id ;
    let result = await query("orderInsert", orderData);
    console.log('id:' + result.insertId);

    orderDetail.forEach(dtorder => {
        dtorder.order_no = result.insertId;
        console.log(dtorder);
        query("orderDtInsert", dtorder)
        .then(val => console.log(val))
    })
    

})

module.exports = router;