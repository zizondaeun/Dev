<template>
    <div>{{ props.title }}</div>
    <div>{{ props.subject }}</div>
</template>
<script setup>
    import { defineProps } from 'vue';

    //let props = defineProps(['title', 'subject']); //배열으로 하던가
    let props = defineProps({title : { type : String, //객체타입으로 하던가
                                        default : '타이틀 초기값' 
                                        }, 
                            subject : { type : String, 
                                        required : true
                                        }
                             }); 
</script>