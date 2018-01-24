<template>
    <div>
        <com-header></com-header>
        <com-content></com-content>
        <com-footer></com-footer>
    </div>
</template>
<script>
import ComHeader from './header';
import ComContent from './content';
import ComFooter from './footer';
export default {
    components: { ComHeader, ComContent, ComFooter }
};
</script>
<style scoped>
</style>


