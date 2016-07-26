<script>
    export default{
        data () {
            return {
                message:1,
                peoples:[{
                    name: "小红",
                    age:20
                }, {
                    name: "张三",
                    age: 12
                }, {
                    name: "三五",
                    age: 78
                },  {
                    name: "阿文",
                    age: 22
                }, {
                    name: "李六",
                    age: 78
                }, ]
            }
        }
    }
</script>
<template>
<ul>
    <input type="test" name="name"   v-model="message" value=""/>
    <span>{{message}}</span>
    <li v-for="person in peoples">
        {{person.name}} : {{person.age}}
    </li>
</ul>
</template>
<style lang="sass">

</style>
