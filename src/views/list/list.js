import './list.scss';

module.exports = {
    template: require('./list.html'),
    replace: false,
    data: function() {
        return {
            peoples: [{
                name: "小红",
                age: 20
            }, {
                name: "张三",
                age: 12
            }, {
                name: "三五",
                age: 78
            }, {
                name: "阿文",
                age: 22
            }, {
                name: "李六",
                age: 78
            }, ]
        }
    },
    methods: {

    },
    components: {

    }
}
