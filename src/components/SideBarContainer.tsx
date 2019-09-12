import React,{FunctionComponent } from "react";
import {Sidebar} from 'primereact/sidebar';

interface SideBarProps {
    visible: boolean;
    onHide: () => void
}

export const SideBarContainer: FunctionComponent<SideBarProps> = ({visible, onHide, children}) => {
    return (
        <div className='sidebar-container'>
            <Sidebar visible={visible} baseZIndex={1000000} onHide={onHide}>
                    <h1 style={{fontWeight:'normal'}}>Sidebar Title</h1>
                    {children}
                </Sidebar>
        </div>
    )
}
