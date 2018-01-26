<template>
    <div class="content">
        <!-- <h1>我是内容</h1>
        <button @click="sendData">请求数据</button> -->
        <play-music></play-music>
    </div>
</template>
<script>
import playMusic from './music';
export default {
    components: { playMusic },
    methods: {
        sendData () {
            this.$http.get('http://localhost:8080/mock/db.json')
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }
};
</script>
<style scoped>
.content {
    width: 100%;
    max-width: 1000px;
    min-height: 600px;
    margin: auto;
    padding: 0 15px;
}
@media screen and (max-width: 768px) {
    .content {
        margin-top: 40px;
    }
}
</style>


