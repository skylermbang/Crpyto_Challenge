//REACT
import React from 'react';
import { Link } from "react-router-dom";
// HELPER
import styled from "styled-components";

class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: '/',
            items: [
                {
                    path: '/', /* path is used as id to check which NavItem is active basically */
                    name: 'Home',
                    css: 'fa  fa-fw fa-home',
                    key: 1 /* Key is required, else console throws error. Does this please you Mr. Browser?! */
                },
                {
                    path: '/about',
                    name: 'About',
                    css: 'fa fa-fw fa-users',
                    key: 2
                },

                {
                    path: '/cryptos',
                    name: 'Crypto',
                    css: 'fa fa-solid fa-coins',
                    key: 3
                },

                {
                    path: '/trends/1',
                    name: 'Trend',
                    css: 'fa fa-solid fa-chart-line',
                    key: 4
                },
            ]
        }
    }
    onItemClick = (path) => {
        this.setState({ activePath: path }); /* Sets activePath which causes rerender which causes CSS to change */
    }
    render() {
        const { items, activePath } = this.state;
        return (
            <StyledSideNav>
                {
                    /* items = just array AND map() loops thru that array AND item is param of that loop */
                    items.map((item) => {
                        /* Return however many NavItems in array to be rendered */
                        return (
                            <NavItem path={item.path} name={item.name} css={item.css} onItemClick={this.onItemClick} /* Simply passed an entire function to onClick prop */ active={item.path === activePath} key={item.key} />
                        )
                    })
                }
            </StyledSideNav>
        );
    }
}






class NavItem extends React.Component {

    handleClick = () => {
        const { path, onItemClick } = this.props;
        onItemClick(path);
    }
    render() {
        const { active } = this.props;
        return (
            <StyledNavItem active={active}>
                <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>
                    <NavIcon></NavIcon>
                </Link>
            </StyledNavItem>

        );
    }
}

export default class Sidebar extends React.Component {
    render() {
        return (
            <SideNav></SideNav>
        );
    }
}

const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 60px;     /* Set the width of the sidebar */
  z-index: 1;      /* Stay on top of everything */
  top:0;      /* Stay at the top */
  background-color: #222; /* Black */
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 100px;
  font-size: 8px;
  text-align: center;
 
`;

const StyledNavItem = styled.div`
  height: 70px;
  width: auto; /* width must be same size as NavBar to center */
  text-align: center; /* Aligns <a> inside of NavIcon div */
  display:flex;
  justify-content:center;
  margin-bottom: 0;   /* Puts space between NavItems */
  a {
    font-size: 2.7em;
    color: ${(props) => props.active ? "#c61b6b" : "white"};
    :hover {
      opacity: 0.7;
      text-decoration: none; /* Gets rid of underlining of icons */
    }  
  }
`;
const NavIcon = styled.div`
`;
