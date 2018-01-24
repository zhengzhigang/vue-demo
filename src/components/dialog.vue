<template>
    <div class="dialog-wrap" v-if="isShow">
        <div class="dialog-cover" @click="closeMySelf"></div>
        <div class="dialog-content">
            <div class="dialog-close" @click="closeMySelf">X</div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isShowDialog: false
        };
    },
    props: {
        isShow: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        closeMySelf () {
            this.$emit('on-close');
        }
    }
};
</script>
<style>
.dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
}
.dialog-cover {
    background-color: #000;
    opacity: .3;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.dialog-content {
    width: 50%;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background-color: #fff;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    z-index: 10;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
}
.dialog-close {
    position: absolute;
    right: 5px;
    top: 5px;
    line-height: 1;
}
</style>

