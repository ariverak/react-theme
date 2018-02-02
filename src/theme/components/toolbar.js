import React from 'react';
import MdMenu from 'react-icons/lib/md/menu';
import MdMesagge from 'react-icons/lib/md/message';
import MdAccountBox from 'react-icons/lib/md/account-box';
import MdMail from 'react-icons/lib/md/mail';
import MdStar from 'react-icons/lib/md/star';
import MdSearch from 'react-icons/lib/md/search';
import MdToc from 'react-icons/lib/md/toc';
import MdCheckCircle from 'react-icons/lib/md/check-circle';
import MdExitToApp from 'react-icons/lib/md/exit-to-app';
import Navbar from '../../widgets/elements/navbar/navbar';

const Toolbar = (props)=>{
    return (
        <Navbar>
        <div className="row no-gutters align-items-center flex-nowrap">
    
            <div className="col">
    
                <div className="row no-gutters align-items-center flex-nowrap">
    
                    
    
                        <button type="button" className="toggle-aside-button btn btn-icon d-block d-lg-none"
                                data-fuse-bar-toggle="aside">
                             <MdMenu size={24} />
                        </button>
    
                        <div className="toolbar-separator d-block d-lg-none"></div>
    
                    
    
    
                    <div className="shortcuts-wrapper row no-gutters align-items-center px-0 px-sm-2">
    
                        <div className="shortcuts row no-gutters align-items-center d-none d-md-flex">
    
                            <a href="apps-chat.html" className="shortcut-button btn btn-icon mx-1">
                                {/* <i className="icon icon-hangouts"></i> */}
                                <MdMesagge size={24}/>
                            </a>
    
                            <a href="apps-contacts.html" className="shortcut-button btn btn-icon mx-1">
                                {/* <i className="icon icon-account-box"></i> */}
                                <MdAccountBox size={24}/>
                            </a>
    
                            <a href="apps-mail.html" className="shortcut-button btn btn-icon mx-1">
                                {/* <i className="icon icon-email"></i> */}
                                <MdMail size={24} />
                            </a>
    
                        </div>
    
                        <div className="add-shortcut-menu-button dropdown px-1 px-sm-3">
    
                            <div className="dropdown-toggle btn btn-icon" role="button"
                                 id="dropdownShortcutMenu"
                                 data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                               <MdStar size={24} color="#ffb300" />
                            </div>
    
                            <div className="dropdown-menu" aria-labelledby="dropdownShortcutMenu">
    
                                <a className="dropdown-item" href="#">
                                    <div className="row no-gutters align-items-center justify-content-between flex-nowrap">
                                        <div className="row no-gutters align-items-center flex-nowrap">
                                            <i className="icon icon-calendar-today"></i>
                                            <span className="px-3">Calendar</span>
                                        </div>
                                        <i className="icon icon-pin s-5 ml-2"></i>
                                    </div>
                                </a>
    
                                <a className="dropdown-item" href="#">
                                    <div className="row no-gutters align-items-center justify-content-between flex-nowrap">
                                        <div className="row no-gutters align-items-center flex-nowrap">
                                            <i className="icon icon-folder"></i>
                                            <span className="px-3">File Manager</span>
                                        </div>
                                        <i className="icon icon-pin s-5 ml-2"></i>
                                    </div>
                                </a>
    
                                <a className="dropdown-item" href="#">
                                    <div className="row no-gutters align-items-center justify-content-between flex-nowrap">
                                        <div className="row no-gutters align-items-center flex-nowrap">
                                            <i className="icon icon-checkbox-marked"></i>
                                            <span className="px-3">To-Do</span>
                                        </div>
                                        <i className="icon icon-pin s-5 ml-2"></i>
                                    </div>
                                </a>
    
                            </div>
                        </div>
                    </div>
    
                    <div className="toolbar-separator"></div>
    
                </div>
            </div>
    
            <div className="col-auto">
    
                <div className="row no-gutters align-items-center justify-content-end">
    
                    <div className="user-menu-button dropdown">
    
                        <div className="dropdown-toggle ripple row align-items-center no-gutters px-2 px-sm-4" role="button"
                             id="dropdownUserMenu"
                             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="avatar-wrapper">
                                <img className="avatar" src={props.profileImg} />
                                <i className="status text-green icon-checkbox-marked-circle s-4"></i>
                            </div>
                            <span className="username mx-3 d-none d-md-block">{props.name}</span>
                        </div>
    
                        <div className="dropdown-menu" aria-labelledby="dropdownUserMenu">
    
                            <a className="dropdown-item" href="#">
                                <div className="row no-gutters align-items-center flex-nowrap">
                                    <MdMail size={24}/>
                                    <span className="px-3">Mi Perfil</span>
                                </div>
                            </a>
    
                            <a className="dropdown-item" href="#">
                                <div className="row no-gutters align-items-center flex-nowrap">
                                    <MdMesagge size={24}/>
                                    <span className="px-3">Mensajes</span>
                                </div>
                            </a>
    
                            <a className="dropdown-item" href="#">
                                <div className="row no-gutters align-items-center flex-nowrap">
                                    <MdCheckCircle size={24} color="green" />
                                    <span className="px-3">Online</span>
                                </div>
                            </a>
    
                            <div className="dropdown-divider"></div>
    
                            <a className="dropdown-item" href="#">
                                <div className="row no-gutters align-items-center flex-nowrap">
                                    <MdExitToApp size={24} />
                                    <span className="px-3">Cerrar Sesión</span>
                                </div>
                            </a>
    
                        </div>
                    </div>
    
                    <div className="toolbar-separator"></div>
    
                    <button type="button" className="search-button btn btn-icon">
                        <MdSearch size={24}/>
                    </button>
    
                    <div className="toolbar-separator"></div>
    
                    <button type="button" className="quick-panel-button btn btn-icon"
                            data-fuse-bar-toggle="quick-panel-sidebar">
                        <MdToc size={24} />
                    </button>
                </div>
            </div>
        </div>
        </Navbar>
    )
}

export default Toolbar;