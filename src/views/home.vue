<template>
    <div>
        <h1>姓名{{name}}</h1>
        <h2>这里是年龄啊： {{age}}</h2>
    </div>
    <div class="">
        <mt-range :value.sync="rangeValue"></mt-range>
        <span>{{rangeValue}}</span>
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </div>
</template>
<script>
    import Vue from 'vue';
    import { Range } from 'mint-ui';
    Vue.component(Range.name, Range);
    import { Picker } from 'mint-ui';
    Vue.component(Picker.name, Picker);
export default {
    data() {
        return {
            name: "guowenfh",
            age: "21",
            rangeValue: 1,
            slots: [{
                flex: 1,
                values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                className: 'slot1',
                textAlign: 'right'
            }, {
                divider: true,
                content: '-',
                className: 'slot2'
            }, {
                flex: 1,
                values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
                className: 'slot3',
                textAlign: 'left'
            }]
        }
    }, methods: {
        golist() {
            this.$route.router.go({
                name: "list"
            });
        },
        onValuesChange(picker, values) {
            if (values[0] > values[1]) {
                picker.setSlotValue(1, values[0]);
            }
        }
    },
    components:{
    }
}
</script>

<style lang="sass">
    
</style>
