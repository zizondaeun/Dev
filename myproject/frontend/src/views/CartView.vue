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
                    <td><input type="checkbox" v-model="checks" @change="selected($event)"></td>
                    <td>{{ c.PROD_NO }}</td>
                    <td><img src=""></td>
                    <td>{{ c.PROD_NAME }}</td>
                    <td><input type="number" v-model="c.CNT" min='1' max='10'></td>
                    <td>{{ c.PRICE }}</td>
                    <td><button @click="orderHandler(c.PROD_NO)" class="btn btn-primary">주문하기</button><button @click="delHandler(c.CART_NO)" class="btn btn-warning">삭제하기</button></td>
                </tr>
            </tbody>
        </table>
        <div>
            <button @click="selDel(c.CART_NO)" class="btn btn-primary">선택삭제</button>
            <button @click="allDel" class="btn btn-primary">전체삭제</button>
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
            axios.get('/api/cart/')
            .then(result => {
                console.log(result)
                this.cart = result.data
                //console.log(this.cart)
            })
        },
        methods : {
            async delHandler(no){
                await axios.delete(`/api/cart/${no}`)
                this.$router.push({path : '/cart'});
            },
            orderHandler(pno){

            },
            checkedAll(checked){
                this.allChecked = checked
                for(let i in this.cart){
                    this.cart[i].selected = this.allChecked;
                }
            },
            selected(e){
                for (let i in this.cart){
                    if(! this.cart[i].selected){
                        this.allChecked = false;
                        return;
                    }else{
                        this.allChecked = true;
                    }
                }
            },
            selDel(no){
                axios.delete(`/api/cart/${no}`)
                this.$router.push('/cart')
            },
            allDel(){

            }
        }
    }
</script>
<style>
</style>