import HomePage from '../app/home/containers/HomePage'
import UIElementsPage from '../app/ui-elements/UIElementsPage'
import ButtonsPage from '../app/ui-elements/buttons/containers/ButtonsPage'
import NoFoundPage from '../app/no-found/containers/NoFoundPage'

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
        component : UIElementsPage,
        routes: [
            {
             path : '/ui-elements-page/buttons',
             component : ButtonsPage
            }
          ]
    },
    {
        component : NoFoundPage
    }
]

export default routes;