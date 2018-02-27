import React,{Component} from 'react';
import ThemeContainer from '../shared/theme/containers/theme-container'
import PropTypes from 'prop-types'
import * as actions from '../actions/index' 
import { connect } from 'react-redux'
import  {BrowserRouter, StaticRouter,Switch,Route,Redirect} from 'react-router-dom'
import routes from '../shared/routes'

export default ({server,location,context})=>{
    
    // ClientRouter
    let router = (
        <BrowserRouter>
             <ThemeContainer>
                <Switch>
                {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
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

const RouteWithSubRoutes = route => (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );