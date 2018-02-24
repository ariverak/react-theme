import HomePage from '../app/home/containers/home-page'
import UIElementsPage from '../app/ui-elements/containers/ui-elements-page'

const routes = [
    {
        path : '/',
        component : HomePage,
        exact : true
    },
    {
        path : '/home',
        component : HomePage
    }
    ,
    {
        path : '/ui-elements-page',
        component : UIElementsPage
    }
]

export default routes;