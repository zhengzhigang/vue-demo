<template>
    <div>
        <h1 class="h1">{{ msg }}</h1>
        <h2>{{ msgfromfather }}</h2>
        <button @click="onClickMe">open mouse!</button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg: 'Hello ComponentA'
        };
    },
    props: ['msgfromfather'],
    methods: {
        onClickMe () {
            this.$emit('childrenTellMeSomething', this.msg);
        }
    }
};
</script>
<style>
.h1 {
    color: lightblue;
}
</style>


