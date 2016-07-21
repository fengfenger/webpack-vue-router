import './home.scss';

module.exports = {
    template: require('./home.html'),
    replace: true,
    data: function() {
        return {
            name: "guowenfh",
            age: "21"
        }
    },
    methods: {
        golist: function() {
            this.$route.router.go({
                name: "list"
            });
        }
    },
    components: {

    }
}
