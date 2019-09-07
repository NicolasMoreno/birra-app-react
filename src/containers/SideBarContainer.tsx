import React,{ Component } from "react";
import {Sidebar} from 'primereact/sidebar';
import {Button} from 'primereact/button'

interface SideBarProps {
    visible: boolean
}

interface SideBarState {
    visible: boolean
}

export class SideBarContainer extends Component<SideBarProps, SideBarState> {

    constructor(props: SideBarProps) {
        super(props)
        this.state = {
            visible: props.visible,
        }
    }
    render () {
        return (
            <div className='sidebar-container'>
                <Sidebar visible={this.state.visible} baseZIndex={1000000} onHide={() => this.setState({visible: false})}>
                        <h1 style={{fontWeight:'normal'}}>Left Sidebar</h1>
                        <Button type="button" onClick={(e) => this.setState({visible: false})} label="Save" className="p-button-success" style={{marginRight:'.25em'}} />
                        <Button type="button" onClick={(e) => this.setState({visible: false})} label="Cancel" className="p-button-secondary"/>
                    </Sidebar>
            </div>
        )
    }

}