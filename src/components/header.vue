<template>
    <header @click.stop="stopHideSlideBar">
        <div class="head-box">
            <div class="head clearfix">
                <a :href="head.linkSite" class="logo fl"><img :src="head.logo" alt=""></a>
                <div class="fr" style="display: none;">
                    <a href="javascript:;" @click="loginClick">登陆</a>
                </div>
                <ul class="list fr list-unstyled">
                    <li class="fl" v-for="item in head.navItem">
                        <a class="nav-link" :href="item.titleLink">{{ item.title }}</a>
                    </li>
                </ul>
                <div class="mobile-bar fr" @click.stop="showSlideBar"></div>
            </div>
        </div>
        <div class="slide-bar" :class="{ 'slide-bar-show':isShow }">
            <ul class="slide-list list-unstyled text-left">
                <li v-for="item in head.navItem">
                    <a class="nav-link" :href="item.titleLink">{{ item.title }}</a>
                </li>
            </ul>
        </div>
         <com-dialog :is-show="isShowDialog" @on-close="closeDialog">
            <div>我是一个插槽</div>
        </com-dialog>
    </header>
</template>
<script>
import ComDialog from './dialog';
export default {
    components: { ComDialog },
    data () {
        return {
            head: {
                logo: require('../assets/img/logo.png'),
                linkSite: 'https://cn.vuejs.org/',
                navItem: [
                    {
                        title: '主页面',
                        titleLink: 'https://cn.vuejs.org/'
                    },
                    {
                        title: '中文歌',
                        titleLink: 'https://cn.vuejs.org/'
                    },
                    {
                        title: '英文歌',
                        titleLink: 'https://cn.vuejs.org/'
                    }
                ]
            },
            isShow: false,
            isShowDialog: false
        };
    },
    methods: {
        showSlideBar () {
            this.isShow = !this.isShow;
        },
        hideSlideBar () {
            this.isShow = false;
        },
        stopHideSlideBar () {
            return false;
        },
        loginClick () {
            this.isShowDialog = true;
        },
        closeDialog () {
            this.isShowDialog = false;
        }
    },
    mounted () {
        document.addEventListener('click', this.hideSlideBar);
    }
};
</script>
<style scoped>
header {
    width: 100%;
    height: 60px;
    transition: all .3s;
}
.head-box {
    width: 100%;
    height: 100%;
    background-color: #fff;
    box-shadow: 0 2px 3px #ddd;
}
.head {
    max-width: 950px;
    margin: auto;
    padding: 0 15px;
    height: 100%;
}
.head .logo img {
    display: block;
    margin: 10px 0;
    height: 40px;
    transition: all .3s;
}
.head .list li {
    height: 60px;
    font-size: 1rem;
    line-height: 60px;
    margin: 0 10px;
}
.nav-link {
    color: #333;
    padding-bottom: 3px;
    text-decoration: none;
}
.nav-link:hover {
    border-bottom: 3px solid #42b983; 
}
.mobile-bar {
    display: none;
    width: 100%;
    max-width: 40px;
    height: 40px;
    cursor: pointer;
    background: url(../assets/img/menu.png) center center no-repeat;
    background-size: 30px;
}
.slide-bar {
    position: fixed;
    width: 200px;
    height: 100%;
    top: 40px;
    right: 0;
    padding: 10px 20px 10px 40px;
    z-index: -1;
    background-color: #fff;
    transform: translateX(200px);
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
}
.slide-bar.slide-bar-show {
    transform: translateX(0);
}
.slide-list li {
    margin-top: 10px;
    font-size: 1rem;
    text-decoration: none;
    color: #555;
}
.slide-list li a {
    text-decoration: none;
    color: #555;
}
@media screen and (max-width: 768px) {
    .head .list {
        display: none;
    }
    .mobile-bar {
        display: block; 
    }
    header {
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        height: 40px;
    }
    .head .logo img {
        margin: 5px 0;
        height: 30px;
    }
}
</style>


