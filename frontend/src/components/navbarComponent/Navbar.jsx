import React, { useState } from 'react';
import { Box, SpeedDial, SpeedDialAction } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
    position: 'absolute',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
        top: theme.spacing(2),
        left: theme.spacing(2),
    },
}));

const theme = createTheme({
    palette: {
        primary: {
            main: '#003459',
            light: '#757ce8',
            dark: '#00476D',
        },
        action: {
            hover: '#00476D',
        },
    },
    components: {
        MuiSpeedDialAction: {
            styleOverrides: {
                staticTooltipLabel: {
                    backgroundColor: '#003459',
                    color: '#F5F5F5',
                },
                fab: {
                    backgroundColor: '#003459',
                    color: '#F5F5F5',
                },
            },
        },
    },
});

const actions = [
    { icon: <AttachMoneyIcon />, name: 'Checking' },
    { icon: <AttachMoneyIcon />, name: 'Savings' },
    { icon: <AttachMoneyIcon />, name: 'Wallet' },
    { icon: <AttachMoneyIcon />, name: 'Investments' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <ThemeProvider theme={theme}>
                <div className={styles.navBarContainer}>
                    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
                        <Box sx={{ position: 'relative', mt: 3, height: 50 }}>
                            <Link to="/transactions">
                                <StyledSpeedDial
                                    ariaLabel=""
                                    icon={
                                        <AccountBalanceRoundedIcon
                                            sx={{ color: '#F5F5F5' }}
                                        />
                                    }
                                    direction={'down'}
                                    onClose={handleClose}
                                    onOpen={handleOpen}
                                    open={open}
                                >
                                    {actions.map((action) => (
                                        <SpeedDialAction
                                            key={action.name}
                                            icon={action.icon}
                                            tooltipTitle={action.name}
                                            tooltipPlacement="right"
                                            tooltipOpen
                                            onClick={handleClose}
                                        />
                                    ))}
                                </StyledSpeedDial>
                            </Link>
                        </Box>
                    </Box>
                </div>
            </ThemeProvider>
        </>
    );
}