import React from "react";
import profilephoto from '../images/profilephoto.png';
import { Link, animateScroll as scroll } from 'react-scroll'
import { UserIcon, CodeBracketIcon, BriefcaseIcon } from '@heroicons/react/24/solid'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

class NavMenu extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            darkMode: false,
            fixedMenu: false
        }
        this.changeMode = this.changeMode.bind(this);
    }
    changeMode = () => {
        const element = document.getElementById("app");
        this.setState( prevState => ({ 
            darkMode: !prevState.darkMode
        }));
        element.classList.toggle("dark");
    }
    ismyMobile = (isfixedMenu) => {
        if(this.props.isMobile){
            return true;
        }
        else{
            return isfixedMenu;
        }
    }
    setFixedMenu = () => {
        this.setState((prevState) => ({ 
            fixedMenu: !prevState.fixedMenu
        }));
    }
    FixedMenuActive = (to) => {
        const element = document.getElementById("main-menu");
        if( !this.props.isMobile ){
            if( to === 'section-profile' ){
                element.className="fixed";
                    this.setFixedMenu();
            }
        }
    }
    FixedMenuInactive = (to) => {
        const element = document.getElementById("main-menu");
        if( !this.props.isMobile ){
            if( to === 'section-profile' ){
            element.className="flex";
                this.setFixedMenu();
            }
        }
    }
    navIcon = ( section ) => {
        const classes= "inline-block w-4 h-4";
        if( this.ismyMobile(this.state.fixedMenu) ){
            switch(section) {
                case 'section-profile' : 
                    return <UserIcon className={classes} />;
                case 'section-experiences' : 
                    return <CodeBracketIcon className={classes} />;
                case 'section-works' : 
                    return <BriefcaseIcon className={classes} />;
            }
        }
        
    }
    render(){
        const { myProfile } = this.props;
        const navItems = [
            { "name" : "Profile" , "section" : "section-profile"},
            { "name" : "Skills & Experiences", "section" : "section-experiences" },
            { "name" : "Works", "section" : "section-works" },
            ];
        return(
            <nav id="main-menu" className="hidden">
                <div className={ 'w-full flex justify-between items-center z-10 text-white ' + (this.ismyMobile(this.state.fixedMenu) ? 'bg-darkmain h-12 ': 'h-8') }>
                    { this.ismyMobile(this.state.fixedMenu) &&
                        <div className="profile w-1/5 md:w-2/6 h-full inline-flex px-4 py-1 items-center">
                            <img className="rounded-full border-1 inline-block w-8 h-8 object-cover mr-2" alt="profilephoto" src={ profilephoto }/>
                            <div className="hidden sm:block">
                                <p className="font-bold text-sm">{ myProfile.name }</p>
                                <p className="text-[11px]">{ myProfile.title }</p>
                            </div>
                        </div>
                    }
                    <div className={ 'h-full ' + (this.ismyMobile(this.state.fixedMenu) ? 'w-4/5 md:w-4/6':'w-full') }>
                        <div className="h-full items-center justify-center flex justify-between">
                            <div className="menu text-sm flex items-center px-3 h-full">
                            { navItems.map( ( navItem ) => (
                                <Link activeClass="active" key={ navItem.section }
                                    className="flex px-6 hover:bg-main space-x-2" spy={ true } smooth={ true } duration={ 300 }
                                    to={ navItem.section } 
                                    onSetActive={ this.FixedMenuInactive } 
                                    onSetInactive={ this.FixedMenuActive }
                                    >
                                    { this.navIcon(navItem.section) }
                                    <span className="hidden sm:flex">{ navItem.name }</span>
                                </Link>
                            )
                            ) }
                            </div>
                            <div className={ 'mode h-full px-4 flex ' + (this.ismyMobile(this.state.fixedMenu) ? 'py-2':'') }>
                                <a onClick= { this.changeMode } 
                                className={ 'flex px-4 rounded-full float-right items-center justify-center dark:bg-white dark:text-darkmain ' + (this.ismyMobile(this.state.fixedMenu) ? 'border-2 border-gray-300 bg-amber-900': 'bg-rose-600') }>
                                    { this.state.darkMode ? 
                                        <SunIcon className="w-4 inline-block dark:text-darkmain"/> : 
                                        <MoonIcon className="w-4 inline-block dark:text-darkmain"/> 
                                    }
                                    { !this.ismyMobile(this.state.fixedMenu) && 
                                        <span>
                                        { this.state.darkMode ? 'Light' : 'Dark' } mode
                                       </span>
                                    }
                                    
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavMenu;