import React,{Component} from 'react';
import Toolbar from '../components/toolbar'
import Sidebar from '../components/sidebar'
import ThemeLayout from '../components/theme-layout'
import ContentLayout from '../components/content-layout'

class ThemeContainer extends Component{
    render(){
        return (
            <ThemeLayout>
            <Sidebar />
            <div className="content-wrapper">
            <Toolbar 
            profileImg={"../../src/assets/images/example_profile.jpg"} 
            name="Juan Rivera"
            />
            <ContentLayout>
                {this.props.children}
            </ContentLayout>
            </div>
            </ThemeLayout>
        )
    }
}
export default ThemeContainer