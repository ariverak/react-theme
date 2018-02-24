import React,{Component} from 'react';
import ThemeContainer from '../shared/theme/containers/theme-container'
import PropTypes from 'prop-types'
import * as actions from '../actions/index' 
import { connect } from 'react-redux'
import Home from './home/containers/home-page'
import Buttons from './ui-elements/containers/ui-elements-page'
import  {BrowserRouter, StaticRouter,Switch,Route} from 'react-router-dom'
import routes from '../shared/routes'

export default ({server,location,context})=>{
    const routesMap = routes.map((route,i)=>{ return <Route key={i} {...route} />})
    // ClientRouter
    let router = (
        <BrowserRouter>
             <ThemeContainer>
                <Switch>
                    {routesMap} 
                </Switch>
            </ThemeContainer>
        </BrowserRouter>
    )
    if(server){
        router (
            <StaticRouter location={location} context={context}>
                 <ThemeContainer>
                    <Switch>
                        {routesMap}
                    </Switch>
                 </ThemeContainer>
            </StaticRouter>
        )
    }
    return (
        <div>
            {router}
        </div>
    )
}