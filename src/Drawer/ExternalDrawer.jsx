import React, { useEffect, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useLocation, useNavigate } from "react-router-dom";
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const ExternalDrawer = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState('');
    const [pageTitle, setPageTitle] = useState("");

    // navbar desktop and mobile view start

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleExternalMyProfile = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
        setSelectedIndex('external-profile')
        navigate('/external-profile')
    }

    const handleExternalAccount = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
        setSelectedIndex('external-account')
        navigate('/external-account')
    }

    const ITEM_HEIGHT = 100;

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            id={menuId}
            MenuListProps={{
                'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            PaperProps={{
                elevation: 0,
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
            }}
        >
            <MenuItem onClick={handleExternalMyProfile}>
                <Typography variant="inherit" noWrap>
                    Profile
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleExternalAccount}>
                <Typography variant="inherit" noWrap>
                    My account
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
                <Typography variant="inherit" noWrap>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa iusto saepe aliquid dolore vitae vel facere sequi eveniet magni!
                </Typography>
            </MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            PaperProps={{
                elevation: 0,
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5,
                    width: '20ch',
                },
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );


    // navbar desktop and mobile view end


    const itemsList = [
        {
            text: "Home",
            icon: <MailIcon />,
            indexes: 0,
        },
        {
            text: "External Products",
            icon: <InboxIcon />,
            indexes: 1,
        },
        {
            text: "External Users",
            icon: <MailIcon />,
            indexes: 2,
        },
        {
            text: "Sales",
            icon: <InboxIcon />,
            indexes: 3,
        },
        {
            text: "Marketing",
            icon: <MailIcon />,
            indexes: 4,
        }
    ];

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
        if (index === 0) {
            navigate('/')
        }
        else if (index === 1) {
            navigate('/external-products')
        }
        else if (index === 2) {
            navigate('/external-users')
        }
        else if (index === 3) {
            navigate('/sales')
        }
        else if (index === 4) {
            navigate('/marketing')
        }
    };

    React.useEffect(() => {
        let total_url = window.location.pathname.split('/')
        let url = total_url[1];
        if (url == "") {
            setSelectedIndex(0)
        }
        else if (url === "external-products") {
            setSelectedIndex(1)
        }
        else if (url === "external-users") {
            setSelectedIndex(2)
        }
        else if (url === "sales") {
            setSelectedIndex(3)
        }
        else if (url === "marketing") {
            setSelectedIndex(4)
        }
    }, []);

    let pageTitlePath = location.pathname;
    useEffect(() => {
        if (pageTitlePath == '/') {
            setPageTitle("Home")
        } else {
            setPageTitle(pageTitlePath.trim().split('/').join(" ").replace("-", " "))
        }
    }, [pageTitlePath])

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>

                    <IconButton
                        color="inherit"
                        size="large"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {pageTitle.toLocaleUpperCase()}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />

                    {/* this is for desktop view */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>

                    {/* this is for mobile view */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>

                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {itemsList.map((item, index) => {
                        const { text, icon, indexes } = item;
                        return (
                            <ListItem key={index} disablePadding
                                sx={{
                                    backgroundColor:
                                        selectedIndex === indexes
                                            ? "#1976D1"
                                            : "transparent",
                                    color:
                                        selectedIndex === indexes
                                            ? "#fff"
                                            : "#1976D1",
                                    "&$selected:hover": {
                                        backgroundColor: "#1976D1",
                                        color: "#fff"
                                    },

                                    "&:hover": {
                                        backgroundColor: "#606060FF",
                                        color: "#D6ED17FF",
                                        "& .MuiListItemIcon-root": {
                                            color: "#D6ED17FF",
                                        }
                                    },

                                }}
                                onClick={(event) => handleListItemClick(event, indexes)}
                            >
                                <ListItemButton>
                                    <ListItemIcon
                                        sx={{
                                            color:
                                                selectedIndex === indexes
                                                    ? "#fff"
                                                    : "#1976D1",
                                        }}
                                    >
                                        {icon}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1 }}>
                <DrawerHeader />
            </Box>
        </Box>
    );
}

export default ExternalDrawer