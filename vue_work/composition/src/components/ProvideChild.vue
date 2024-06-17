<template>
    <div>child - child</div>
    {{ title }}
</template>
<script>
    import { inject } from 'vue';

    export default {
        setup(){
            const title = inject('title');
            return {title};
        }
    }
</script>