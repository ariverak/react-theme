import React,{Component} from 'react';
import ThemeContainer from '../../theme/containers/theme-container'
import Home from '../components/home'

class HomeContainer extends Component{
    render(){
        return (
            <ThemeContainer>
                    <Home />
            </ThemeContainer>
        )
    }
}
export default HomeContainer