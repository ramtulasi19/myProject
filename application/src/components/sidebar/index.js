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
                    <SidebarLink to="partners" onClick={toggle}>
                        Partners
                    </SidebarLink>
                    <SidebarLink to="services" onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to="accomp" onClick={toggle}>
                        Accomplishments
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarLink to="guest" onClick={toggle}>
                        Contact Us
                    </SidebarLink>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}