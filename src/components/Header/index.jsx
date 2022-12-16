import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';
import LogoSection from '../../assets/img/LOGOTYPE.svg';
import SearchSection from './SearchSection/index';
import ProfileSection from './ProfileSection/index';

import { IconMenu2 } from '@tabler/icons';
import NotificationSection from './NotificationSection';



const Header = ({ handleLeftDrawerToggle }) => {
    const theme = useTheme();

    return (
        <>
            <Box sx={{ width: 228, display: 'flex', [theme.breakpoints.down('md')]: { width: 'auto'}}}>
                <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                    <img src={LogoSection} alt="Logotipo" />
                </Box>

                <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <Avatar variant="rounded" sx={{ ...theme.typography.commonAvatar, ...theme.typography.mediumAvatar,
                    transition: 'all .2s ease-in-out', background: theme.palette.secondary.light,  color: theme.palette.secondary.dark,
                    '&:hover': { background: theme.palette.secondary.dark, color: theme.palette.secondary.light}}} onClick={handleLeftDrawerToggle} color="inherit">
                        <IconMenu2 stroke={1.5} size="1.3rem" />
                    </Avatar>
                </ButtonBase>
            </Box>

            {/* <SearchSection /> */}

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />

            <NotificationSection />

            <ProfileSection />
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;
