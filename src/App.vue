<template>
    <div id="app">
        <!-- <router-link to="/b">链接到b.vue</router-link> 
        <router-view msg="我是福组件的字符串"/> -->
        <!-- <test @my-event="addMyValue"></test> -->
        <!-- <button @click="changeTpl">动态切换组件</button>
        <transition name="fade" mode="out-in">
            <div :is="currentView"></div>
        </transition>
        <h3>{{ myValue }}</h3>
        <test-a></test-a>
        <test-b></test-b> -->
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'app'
};
</script> 

<style>
body {
    margin: 0;
    font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
}
* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
ul,
ol {
  margin: 0;
}
.list-unstyled {
  padding-left: 0;
  list-style: none;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: " ";
}
.clearfix:after {
  clear: both;
}
.dp-block {
    display: block;
}
.text-center {
    text-align: center;
}
.text-left {
    text-align: left;
}
.text-right {
    text-align: right;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active, .fade-leave-active {
    transition: all .5s;
}
.fade-enter, .fade-leave-active {
    opacity: 0;
}
</style>
