import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, MenuItem, Tooltip, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const Header = () => {
  const navigate = useNavigate();
	const [anchorMenu, setAnchorMenu] = React.useState<null | HTMLDivElement>(null);
  const openMenu = (event: any): void => setAnchorMenu(event.target);
  const closeMenu = (): void => setAnchorMenu(null);

	const logout = (): void => {
    localStorage.clear();
    navigate("/auth/login");
	}

	return (
		<React.Fragment>
      <AppBar position="static" sx={{ background: '#F5F5F5' }}>
        <Container sx={{ pl: { xs: 2 }, pr: { xs: 2 } }} maxWidth="xxl">
          <Toolbar disableGutters sx={{ minHeight: { xs: '3rem' } }}>
            <Box sx={{ mr: 2, flexGrow: 1 }}>
              <Typography variant="h6" noWrap color="#666666"><Link to="/" style={{ fontSize: 16 }}>HRM</Link></Typography>
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open menu">
                <IconButton onClick={openMenu} sx={{ p: 0.625, backgroundColor: '#70707020' }}>
                  <AccountCircle sx={{ fontSize: 20 }} />
                </IconButton>
              </Tooltip>
              <Menu
                keepMounted
                sx={{ mt: '24px', ml: '4px' }}
                anchorEl={anchorMenu}
                open={Boolean(anchorMenu)}
                onClose={closeMenu}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <MenuItem onClick={closeMenu}>
                  <Typography textAlign="center" sx={{ fontSize: 12 }}>Profile</Typography>
                </MenuItem>
                <MenuItem onClick={logout}>
                  <Typography textAlign="center" sx={{ fontSize: 12 }}>Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
	)
}

export default Header;