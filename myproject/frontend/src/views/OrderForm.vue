<template>
    <div>주문서</div>
    <div class="mb-3 p-2">주문자 정보
        <label for="exampleFormControlInput1" class="form-label">이름</label>
        <input type="text" class="form-control" id="name" >
    </div>
    <div class="mb-3 p-2">
        <label for="exampleFormControlInput1" class="form-label">전화번호</label>
        <input type="text" class="form-control" id="phone" >
    </div>
    <div class="mb-3 p-2">배송 정보
        <label for="exampleFormControlInput1" class="form-label">이름</label>
        <input type="text" class="form-control" id="name" >
    </div>
    <div class="mb-3 p-2">
        <label for="exampleFormControlInput1" class="form-label">전화번호</label>
        <input type="text" class="form-control" id="phone" >
    </div>
    <div class="row">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>이미지</th><th>상품명</th><th>수량</th><th>주문금액</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="c in selectedCart">
                    <td><img src=""></td>
                    <td>{{ c.PROD_NAME }}</td>
                    <td>{{ c.CNT }}</td>
                    <td>{{ c.PRICE }}</td>
                </tr>
            </tbody>
        </table> 
    </div>
    <div id="discount">
        <input readonly v-model="totalPrice">
    </div>
    <div>
        <button class="btn btn-secondary" @click="pointHandler">적립금 사용</button>
        <button class="btn btn-secondary" @click="payHandler">결제</button>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                selectedCart : [],
                totalPrice : 0
            };
        },
        created() {
            const queryCart = this.$route.query.Cart;
            if (queryCart) {
                this.selectedCart = JSON.parse(queryCart);
            }
        },
        mounted(){
            this.discount();
        },
        methods : {
            payHandler(){

            },
            discount(){
                this.selectedCart.forEach(a => {
                    this.totalPrice += Number(a.PRICE);
                });
            },
            pointHandler(){
                let point = 100
                this.totalPrice -= point;
            }
        }
    }
</script>
<style>
</style>