// import * as React from 'react';
// import PropTypes from 'prop-types';
// import {Box, Collapse, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper} from '@mui/material'
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import accounts from "../../dummyData/accounts.json";
// import styles from "./navbar.module.css";

// function createData(name, calories, fat, carbs, protein, price) {
//   return {
//     name,
//     // calories,
//     // fat,
//     // carbs,
//     // protein,
//     // price,
//     history: [
//       {
//         name: '',
//         balance: 0,
//       },
//       {
//         name: '',
//         balance: 0,  
//       }
//     ],
//   };
// }

// function Row(props) {
//   const { row } = props;
//   const [open, setOpen] = React.useState(false);

//   return (
//     <React.Fragment>
//       <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
//         <TableCell>
//           <IconButton
//             aria-label="expand row"
//             size="small"
//             onClick={() => setOpen(!open)}
//           >
//             {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           </IconButton>
//         </TableCell>
//         <TableCell component="th" scope="row">
//           {row.name}
//         </TableCell>
//       </TableRow>
//       <TableRow>
//         <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
//           <Collapse in={open} timeout="auto" unmountOnExit>
//             <Box sx={{ margin: 1 }}>
//               <Typography variant="h6" gutterBottom component="div">
//                 History
//               </Typography>
//               <Table size="small" aria-label="purchases">
//                 <TableHead>
//                   <TableRow>
//                    <Link to='/transactions'> <TableCell>Name</TableCell> </Link>
//                     <TableCell>Balance</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {row.history.map((historyRow) => (
//                     <TableRow key={historyRow.date}>
//                       <TableCell component="th" scope="row">
//                         {historyRow.date}
//                       </TableCell>
//                       <TableCell>{historyRow.customerId}</TableCell>
//                       <TableCell align="right">{historyRow.amount}</TableCell>
//                       <TableCell align="right">
//                         {Math.round(historyRow.amount * row.price * 100) / 100}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </Box>
//           </Collapse>
//         </TableCell>
//       </TableRow>
//     </React.Fragment>
//   );
// }

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

// const accountRows = accounts
// const rows = [
//   createData('Accounts', 159, 6.0, 24, 4.0, 3.99),
// //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
// //   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
// //   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
// //   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

// export default function CollapsibleTable() {
//   return (
//     <TableContainer className={styles.navbarContainer} component={Paper}>
//       <Table aria-label="collapsible table">
//         <TableHead>
//           <TableRow>
//             <TableCell />
//             <TableCell>Navbar</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <Row key={row.name} row={row} />
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }



// import * as React from 'react';
// import { styled, useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MuiDrawer from '@mui/material/Drawer';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import accounts from "../../dummyData/accounts.json";
// import styles from "./navbar.module.css";
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';

// const drawerWidth = 240;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(9)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );

// export default function MiniDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }} className={styles.navBarContain} >
//       <CssBaseline />
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: '36px',
//               ...(open && { display: 'none' }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//           {/* <Typography variant="h6" noWrap component="div">
//             Title
//           </Typography> */}
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
//           </IconButton>
//         </DrawerHeader>
//         <Divider />
//         <List>
//         {['Accounts'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//               <Tooltip title="Accounts" placement="right" arrow>
//               <Link to='/transactions'> <AccountBalanceWalletIcon className={styles.walletIcon}/> </Link>  
//               </Tooltip>
//                 {/* <Link to='/transactions'> <AccountBalanceWalletIcon className={styles.walletIcon}/> </Link>   */}
//                     {/* {index % 2 === 0 ? <AccountBalanceWalletIcon /> : <MailIcon />} */}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List>
//         {/* <Divider />
//         <List>
//           {['All mail', 'Trash', 'Spam'].map((text, index) => (
//             <ListItem button key={text}>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItem>
//           ))}
//         </List> */}
//       </Drawer>
//     </Box>
//   );
// }





// /////////////

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import accounts from "../../dummyData/accounts.json";
// import styles from "./navbar.module.css";
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import { blue } from '@mui/material/colors';


// const drawerWidth = 80;

// export default function PermanentDrawerLeft() {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, display: 'none' }}
//       >
//         <Toolbar>
//           <Typography variant="h6" noWrap component="div">
//             title
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         className={styles.navbar}
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           '& .MuiDrawer-paper': {
//             width: drawerWidth,
//             boxSizing: 'border-box',
//           },
//         }}
//         variant="permanent"
//         anchor="left"
//       >
//         <Toolbar />
//         <Divider />
//         <List>
          
//             <ListItem >
//               <ListItemIcon>
//                 <Tooltip title="Accounts" placement="right" arrow>
//                     <Link to='/transactions'> <AccountBalanceWalletIcon className={styles.walletIcon}/> </Link>  
//                 </Tooltip>
//               </ListItemIcon>
//               <ListItemText />
//             </ListItem>
          
//         </List>
//       </Drawer>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
//       >
//         <Toolbar />
        
//       </Box>
//     </Box>
//   );
// }

// export default function Navbar() {
//     <>
//     <CssBaseline />
//             <ListItem >
//                <ListItemIcon>
//                  <Tooltip title="Accounts" placement="right" arrow>
//                      <Link to='/transactions'> <AccountBalanceWalletIcon className={styles.walletIcon}/> </Link>  
//                  </Tooltip>
//                </ListItemIcon>
//                <ListItemText />
//             </ListItem>
//     </>

// }
