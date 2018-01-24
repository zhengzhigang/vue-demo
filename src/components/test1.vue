<template>
    <div>
        <h1>我是第一个测试组件</h1>     
        <button @click="show = !show">子组件项福组件传递信息</button>
        <transition name="my-trans">
            <p v-if="show">我是一个会显示隐藏的部分</p>
        </transition>
    </div>
</template>
<script>
export default {
    data () {
        return {
            hello: '我是向父组件传递的一个信息',
            show: true
        };
    },
    methods: {
        giveFather () {
            this.$emit('my-event', this.hello);
        }
    }
};
</script>
<style>
.fade-enter-active, .fade-leave-active {
    transition: all 6.5s;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
}

.my-trans-enter-active, .my-trans-leave-active {
    transition: all 6.5s ease-out;
}
.my-trans-enter {
    transform: translateY(-500px);
    opacity: 0;
}
.my-trans-leave-active {
    transform: translateY(500px);
    opacity: 0;
}
</style>

