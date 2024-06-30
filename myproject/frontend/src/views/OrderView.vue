<template>
    <div>
        가격 : <input type="text" id="price" v-bind="price">
        <button @click="payments" class="btn btn-success">결제하기</button>
    </div>
</template>
<script>
    import PortOne from '@portone/browser-sdk/v2';
    import axios from 'axios';
    export default {
        data(){
            return{
                price : {},                 
            };
        },
        created(){
            $(document).ready(function (e) {
                console.log(123);
            })
        },
        methods : {
            payments(){
                const IMP = window.IMP; 
                IMP.init(''); // 'your-imp-key'를 실제 포트원 키로 변경
    
                // 주문번호 생성
                const today = new Date();
                const hours = today.getHours(); 
                const minutes = today.getMinutes();  
                const seconds = today.getSeconds();  
                const milliseconds = today.getMilliseconds();
                const makeMerchantUid = `${hours}${minutes}${seconds}${milliseconds}`;

                 // 결제 요청 데이터 설정
                const data = {
                    pg: 'kakaopay.TC0ONETIME', 
                    pay_method: 'card',
                    merchant_uid: `merchant_${makeMerchantUid}`, 
                    amount: 10000,
                    name: '5,6,7',
                    buyer_name: 'kimdaeun',
                    buyer_tel: '010-1234-5678',
                    buyer_email: 'buyer@example.com',
                    buyer_addr: '서울특별시 강남구 삼성동',
                    buyer_postcode: '123-456'
                };
                // 결제 요청
                IMP.request_pay(data, rsp => {
                    if (rsp.success) {
                        // 결제 성공 시 로직
                        alert('결제가 완료되었습니다.');
                        console.log(rsp)
                        //order table
                        let buyerName = rsp.buyer_name;
                        let buyerTel = rsp.buyer_tel;
                        let buyerAdd = rsp.buyer_addr;
                        let paidAmount = rsp.paid_amount;
                        let merchantUid = rsp.merchant_uid;
                        //orderDatail table
                        let prodName = rsp.name.split(',');
                        let cnt = [1, 2, 3];
                        //let price = [5000,6000,7000]
                        
                        let orderData = {
                            buyerName: buyerName,
                            buyerTel: buyerTel,
                            buyerAdd: buyerAdd,
                            paidAmount: paidAmount,
                            merchantUid: merchantUid,
                            products: prodName.map((name, index) => ({
                                prod_no: name,
                                cnt: cnt[index]
                            }))
                        };

                        axios.post("/api/order", orderData)
                        .then(result => console.log(result))
                        .catch(err => console.log(err))
                    } else {
                        // 결제 실패 시 로직
                        alert(`결제에 실패하였습니다. 에러 내용: ${rsp.error_msg}`);
                    }
                });
            }

        }
    }
</script>
<style>
</style>