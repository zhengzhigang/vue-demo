<template>
    <div class="hello">
        <h1 v-text="title"></h1>
        <input type="text" v-model="newItem" @keyup.enter="addNew">
        <ul>
            <li v-for="item in items" :class="{ active:item.isFinished }" @click="toggleFinish(item)">{{ item.label }}</li>
        </ul>
        <p>children tells me: {{ childWorlds }}</p>
        <ComponentA msgfromfather="you die!" v-on:childrenTellMeSomething="listenToMyBoy"></ComponentA>  
    </div>
</template>

<script>
import Store from '../store';
import ComponentA from './componentA';
export default {
    name: 'HelloWorld',
    data () {
        return {
            title: 'this is a todo list',
            items: Store.fetch(),
            newItem: '',
            childWorlds: ''
        };
    },
    components: {ComponentA},
    props: ['msg'],
    watch: {
        items: {
            handler (items) {
                Store.save(items);
            },
            deep: true
        }
    },
    methods: {
        toggleFinish (item) {
            item.isFinished = !item.isFinished;
            console.log(this.msg);
        },
        addNew () {
            if (this.newItem === '') {
                alert('请输入内容');
                return;
            };
            this.items.push({ label: this.newItem, isFinished: true });
            this.newItem = '';
        },
        listenToMyBoy (msg) {
            this.childWorlds = msg;
        }
    },
    create () {
        alert(2);
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.active {
  text-decoration: underline;
}
</style>
