<template>
    <nav aria-label="Page navigation example">
    <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item" v-for="page in pageArr">
            <a class="page-link" href="#" @click.prevent="goPage(page)">{{ page }}</a>
        </li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
    </nav>
</template>
<script>
    export default {
        props : ["currentPage",
                    "firstPage",
                    "lastPage", //제일 마지막 페이지 번호
                    "startIdx", //페이지 그룹내에서 시작
                    "endIdx"   //페이지 그룹내에서 마지막
                ],
        data(){
            return{
                //page : {}
            };
        },
        computed : {
            pageArr(){
                const pages = []
                for(let i=this.startIdx; i<=this.endIdx; i++){
                    pages.push(i);
                }
                return pages;
            }
        },
        methods : {
            goPage(page){
                console.log(page);
                this.$emit('go-page', page);
            }
        }
    }
</script>
<style>
.pagination{
    justify-content: center;
}
.pagination > li > a {
    float: none;
}
</style>