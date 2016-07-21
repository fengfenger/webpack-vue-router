import home from './views/home/home.js'
import list from './views/list/list.js'

export default function(router) {
    router.map({
        '/': {
            name: 'home',
            component: home
        },
        '/list': {
            name: 'list',
            component: list
        }
    });

}
