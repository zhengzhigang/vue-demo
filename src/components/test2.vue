<template>
    <div>
        <h2 v-color="red">自定义指令</h2>
    </div>
</template>
<script>
export default {
    data () {
        return {
            red: '#ec6517'
        };
    },
    directives: {
        color (el, binding) {
            console.log(binding);
            el.style.color = binding.value;
        }
    }
};
</script>

