import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarRoute, SideBtnWrap, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

export const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle}>
                        vision
                    </SidebarLink>
                    <SidebarLink to="Partner" onClick={toggle}>
                        Partners
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="Accomplishments" onClick={toggle}>
                        Accomplishments
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="guest" onClick={toggle}>
                        Contact Us
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}