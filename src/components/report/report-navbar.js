import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { UserCircle as UserCircleIcon } from '../../icons/user-circle';
import { Users as UsersIcon } from '../../icons/users';
import  Diagnosoft  from 'src/icons/diagnosoft';
import NextLink from 'next/link';

const ReportNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[0],
  borderBottom: '1px solid #E5E5E5',
  backgroundColor: 'neutral.900',
}));

export const ReportNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;

  return (
    <>
      <ReportNavbarRoot
        sx={{
          width: {
            lg: '100%'
          }
        }}
        {...other}>

        
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
            <Box>
            <NextLink
              href="/"
              passHref
            >
              <a>
                <Diagnosoft
                  sx={{
                    height: 40,
                    width: 40
                  }}
                />
              </a>
            </NextLink>
          </Box>
          
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Contacts">
            <IconButton sx={{ ml: 1 }}>
              <UsersIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Avatar
            sx={{
              height: 40,
              width: 40,
              ml: 1
            }}
            src="/static/images/avatars/avatar_1.png"
          >
            <UserCircleIcon fontSize="small" />
          </Avatar>
        </Toolbar>
      </ReportNavbarRoot>
    </>
  );
};

ReportNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
