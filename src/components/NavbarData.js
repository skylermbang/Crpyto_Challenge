import React from 'react'

import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from "@material-ui/icons/Group"
import MailIcon from "@material-ui/icons/Mail"

export const NavbarData = [{
    title: "Home",
    icon: <HomeIcon />,
    link: "/"
},
{
    title: "Repository",
    icon: <MailIcon />,
    link: "/repositories"
},
{
    title: "User",
    icon: <GroupIcon />,
    link: "/users"
},

]

