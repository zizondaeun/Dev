const template = /*html */`
    <table class="table table-hover table-striped">
        <thead>
            <tr>
                <th>순번</th>
                <th>제품명</th>
                <th>가격</th>
            </tr>
        </thead>
        <tbody>
            <tr :key="idx" v-for="(prod, idx) in prods">
            <td>{{idx}}</td>
            <td>{{prod.prodNm}}</td>
            <td>{{prod.price}}</td></tr>
        </tbody>
    </table>
`;
export default {
    template,
    data(){
        return {
            prods : [ {prodNm : '키보드', price : 4000},
                        {prodNm : '모니터', price : 5000},
                        {prodNm : '노트북', price : 6000}
             ],

        }
    },
    methods : {}
}