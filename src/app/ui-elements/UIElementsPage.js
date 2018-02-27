import React from 'react';
import ButtonElement from '../../widgets/elements/buttons/button-element'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'

const UIElementsPage = (props)=>{
    return (
         <div>
        <Link to="ui-elements-page/buttons">
          <ButtonElement type="success" text="Go to Buttons" />
        </Link>
        {props.routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
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

export default UIElementsPage;