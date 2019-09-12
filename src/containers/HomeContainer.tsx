import './HomeContainer.css'
import React, {Component} from 'react';
import {Router, Route, Link } from "react-router-dom";
// custom containers
import {SideBarContainer} from '../components/SideBarContainer'
import {TaskContainer} from './TaskContainer'
import {ThreeInputForm} from '../components/ThreeInputForm'

//primereact components
import {MegaMenu} from 'primereact/megamenu'
import {Button} from 'primereact/button'

import {BrowserView, MobileView} from 'react-device-detect'
import {MenuItem} from "primereact/api";
import {Toolbar} from "primereact/toolbar";

interface HomeState {
    showSideNav: boolean
    menuItems: MenuItem[]
}

interface HomeProps {
    history: any
}


export class HomeContainer extends Component<HomeProps, HomeState> {
    state = {
        showSideNav: false,
        menuItems: [
            {
                label: 'Videos', icon: 'pi pi-fw pi-video',
                url: '/inputs',
                command: (e: {originalEvent: Event, item: MenuItem}) => {this.onClickedCommand("/inputs")}
            },
            {
                label: 'Users', icon: 'pi pi-fw pi-users',
                url: '/test',
                command: (e: {originalEvent: Event, item: MenuItem}) => {this.onClickedCommand("/test")}
            },
            {
                label: 'Events', icon: 'pi pi-fw pi-calendar',
                command: (e: {originalEvent: Event, item: MenuItem}) => {this.onClickedCommand("/events")}
            },
            {
                label: 'Settings', icon: 'pi pi-fw pi-cog',
                command: (e: {originalEvent: Event, item: MenuItem}) => {this.onClickedCommand("/settings")}
            }
        ]
    };

    private onClickedCommand = (route: string) => {
        this.props.history.push(route);
    }

    private onHideNavBar = () => {
        this.setState({showSideNav: false});
    }

    private onShowNavBar = () => {
        this.setState({showSideNav: true});
    }

    private changeNavBarStatus = () => {
        this.setState({showSideNav: !this.state.showSideNav})
    }

    render() {
        return (
            <Router history={this.props.history}>
                <div className="home-container">
                <BrowserView viewClassName="p-grid browser-view">
                    {this.state.showSideNav && <MegaMenu className="p-col-2" model={this.state.menuItems} orientation="vertical"/>}
                    <div className={`body ${this.state.showSideNav ? 'p-col-10' : 'p-col-12'}`}>
                        <Toolbar>
                            <div className="p-toolbar-group-left">
                                <Button onClick={this.changeNavBarStatus} icon="pi pi-bars" className="p-button-primary p-button-raised" style={{marginRight:'.25em'}} />
                                <Button label="Upload" icon="pi pi-upload" className="p-button-success" />
                                <i className="pi pi-bars p-toolbar-separator" style={{marginRight:'.25em'}} />
                                <Button label="Save" icon="pi pi-check" className="p-button-warning" />
                            </div>
                            <div className="p-toolbar-group-right">
                                <Button icon="pi pi-search" style={{marginRight:'.25em'}} />
                                <Button icon="pi pi-calendar" className="p-button-success" style={{marginRight:'.25em'}} />
                                <Button icon="pi pi-times" className="p-button-danger" />
                            </div>
                        </Toolbar>
                        <Route path="/inputs" component={ThreeInputForm}/>
                        <Route path="/test" component={TaskContainer}/>
                    </div>
                </BrowserView> 
                <MobileView>
                    <SideBarContainer visible={this.state.showSideNav} onHide={this.onHideNavBar}>
                        <MegaMenu className="col-sm-4" model={this.state.menuItems} orientation="vertical"/>
                    </SideBarContainer>
                    <div className={'body p-col-10'}>
                        <Button icon="pi pi-bars" className="p-button-secondary p-button-raised" onClick={this.onShowNavBar}/>
                        <Route path="/inputs" component={ThreeInputForm}/>
                        <Route path="/test" component={TaskContainer}/>
                    </div>
                </MobileView>
                </div>
            </Router>
            
        );
    }
}

