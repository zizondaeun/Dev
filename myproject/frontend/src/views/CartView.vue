<template>
    <div>장바구니</div>
    <div class="row">
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>번호</th><th><input type="checkbox" v-model="allChecked" @click="checkedAll($event.target.checked)"></th><th>상품번호</th><th>이미지</th><th>상품명</th><th>개수</th><th>금액</th><th>삭제</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="c in cart">
                    <td>{{ c.CART_NO }}</td>
                    <td><input type="checkbox" v-model="c.selected" @change="AllChecked"></td>
                    <td>{{ c.PROD_NO }}</td>
                    <td><img src=""></td>
                    <td>{{ c.PROD_NAME }}</td>
                    <td><input type="number" v-model="c.CNT" min='1' max='10'></td>
                    <td>{{ c.PRICE }}</td>
                    <td>
                        <button @click="delSel(c.CART_NO)" class="btn btn-warning">삭제하기</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <button @click="delAll" class="btn btn-warning">전체삭제</button>
        </div>
        <div>
            <button @click="orderSel" class="btn btn-primary">선택주문</button>
            <button @click="orderAll" class="btn btn-primary">전체주문</button>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';

    export default {
        data(){ 
            return{
                 cart : [], c : {}, allChecked : false
            };   
        },
        created(){
            this.getCart();
        },
        methods : {
            getCart(){
                axios.get('/api/cart/')
                .then(result => {
                    console.log(result)
                    this.cart = result.data
                    //console.log(this.cart)
                })
            },
            async delSel(no){
                await axios.delete(`/api/cart/${no}`)
                .then(this.getCart()); //db에서 삭제처리된 리스트를 불러옴
                //this.$router.push({path : '/cart'});
            },
            delAll(){
                axios.delete('/api/cart/')
                .then(this.getCart()); 
                //this.$router.push('/cart')
            },
            orderSel(){
                let selectedCart = [];
                this.cart.forEach( a => {
                    if(a.selected){
                        selectedCart.push(a);
                    }
                })
                this.$router.push({
                    path: '/orderForm',
                    query: { Cart: JSON.stringify(selectedCart) }
                });
            },
            orderAll(){

            },
            checkedAll(checked){
                this.cart.forEach(a => a.selected = checked);
            },
        }
    }
</script>
<style>
</style>