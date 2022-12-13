import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, useMediaQuery } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar'; //
import { BrowserView, MobileView } from 'react-device-detect';
import MenuList from './MenuList/index'
import MenuListTeacher from './MenuList/index'
import { drawerWidth } from '../../store/constant';
import { useMatch } from "react-router-dom";
  





const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    const isRouteStudent = useMatch("/Student");
    const isRouteTeacher = useMatch("/Teacher");

    const drawer = (
        <>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
                    aaaaaaa
                </Box>
            </Box>
            <BrowserView>
                <PerfectScrollbar component="div" style={{ height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
                    paddingLeft: '16px', paddingRight: '16px'}}>
                    <MenuList />
                    {/* <MenuCard /> */}
                </PerfectScrollbar>
            </BrowserView>
            <MobileView>
                <Box sx={{ px: 2 }}>
                    <MenuList />
                    {/* <MenuCard /> */}
                </Box>
            </MobileView>
        </>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }} aria-label="mailbox folders">
            <Drawer container={container} variant={matchUpMd ? 'persistent' : 'temporary'} anchor="left"
                open={drawerOpen} onClose={drawerToggle} sx={{ '& .MuiDrawer-paper': { width: drawerWidth, background: theme.palette.background.default,
                    color: theme.palette.text.primary, borderRight: 'none', [theme.breakpoints.up('md')]: {top: '88px'}}}}
                ModalProps={{ keepMounted: true }} color="inherit">
                {drawer}
            </Drawer>
        </Box>
    );
};

Sidebar.propTypes = {
    drawerOpen: PropTypes.bool,
    drawerToggle: PropTypes.func,
    window: PropTypes.object
};

export default Sidebar;
