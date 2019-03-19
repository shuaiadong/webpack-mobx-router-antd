import App from 'src/app';
import Layout from 'comps/layout'

const routers = [
    {
        path: '/',
        exact: true,
        component: App
    },
    {
        path: '/layout',
        exact: true,
        component: Layout
    }
]

export default routers;