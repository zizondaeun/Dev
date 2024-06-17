<template>
    <div>child</div>
    <ProvideChild />
</template>
<script>
    import ProvideChild from './ProvideChild';

    export default {
        components : {
            ProvideChild
        }
    }
</script>