import React from 'react';
import { Icon, CloseIcon, SidebarContainer, SideBtnWrap, SidebarWrapper, SidebarMenu, SideBarRoute, SidebarLink } from './styled';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">
            About
          </SidebarLink>
          <SidebarLink to="about">
            About
          </SidebarLink>
          <SidebarLink to="about">
            About
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideBarRoute to='about'>About</SideBarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
