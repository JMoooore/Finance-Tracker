import React, { useState } from 'react';
import { Box, SpeedDial, SpeedDialAction } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import { useNavigate } from 'react-router-dom';
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
    { icon: <AttachMoneyIcon />, name: 'Transactions' },
    { icon: <AttachMoneyIcon />, name: 'Dashboard' },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();

    const handleNavigateTransactions = () => {
        navigate('/transactions');
    };

    const handleNavigateDashboard = () => {
        navigate('/dashboard');
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <div className={styles.navBarContainer}>
                    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
                        <Box sx={{ position: 'relative', mt: 3, height: 50 }}>
                            <div>
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
                                        <SpeedDialAction
                                            key={actions[0].name}
                                            icon={actions[0].icon}
                                            tooltipTitle={actions[0].name}
                                            tooltipPlacement="right"
                                            tooltipOpen
                                            onClick={handleNavigateTransactions}
                                        />

                                        <SpeedDialAction
                                            key={actions[1].name}
                                            icon={actions[1].icon}
                                            tooltipTitle={actions[1].name}
                                            tooltipPlacement="right"
                                            tooltipOpen
                                            onClick={handleNavigateDashboard}
                                        />
                                </StyledSpeedDial>
                            </div>
                        </Box>
                    </Box>
                </div>
            </ThemeProvider>
        </>
    );
}
