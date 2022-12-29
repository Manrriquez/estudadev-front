import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Breadcrumbs from '../../components/ui-component/extended/Breadcrumbs';
import Header from '../Header/index';
import Sidebar from '../Sidebar/index';
import navigation from '../menu-items/index';
import { drawerWidth } from '../../utils/constant';
import { SET_MENU } from '../../utils/actions';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { IconChevronRight } from '@tabler/icons';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: -(drawerWidth - 20),
            width: `calc(100% - ${drawerWidth}px)`
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px',
            marginRight: '10px'
        }
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px'
        }
    })
}));

const fabStyle = {
    position: 'fixed',
    top: 'calc(100vh - 80px)',
    right: 26,
    color: '#ffffff'
  };
  
  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];
const MainLayout = () => {
    
    const theme = useTheme();
    const leftDrawerOpened = useSelector((state) => state.customization.opened);
    const dispatch = useDispatch();
    const handleLeftDrawerToggle = () => {
        dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar enableColorOnDark position="fixed" color="inherit" elevation={0}
                sx={{ bgcolor: theme.palette.background.default,
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'}}>
                <Toolbar>
                    <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </Toolbar>
            </AppBar>

            <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />
            
            <Main open={leftDrawerOpened} sx={{bgcolor: '#FAFAFA'}}>
                {/* <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign /> */}
                <Outlet />
                <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1, position: 'fixed', left: 'calc(100% - 30px)',
                 top: 'calc(100vh - 30px)' }}>
                    <SpeedDial
                        ariaLabel="SpeedDial basic example"
                        sx={{ position: 'absolute', bottom: 16, right: 16 }}
                        icon={<SpeedDialIcon />}
                    >
                        {actions.map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            tooltipTitle={action.name}
                        />
                        ))}
                    </SpeedDial>
                </Box>
            </Main>
        </Box>
    );
};

export default MainLayout;
