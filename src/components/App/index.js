import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../actions/login'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Routes from '../../routes'
import { getToken } from '../../utils/token'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: 36
  },
  title: {
    flexGrow: 1
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  appBar: {
    height: 64
  }
}))

export default ({ history }) => {
  const classes = useStyles()
  const isLogged = useSelector(({ auth }) => auth.isLogged)
  const matches = useMediaQuery('(min-width:600px)')
  const [anchorEl, setAnchorEl] = useState(null)
  const dispatch = useDispatch()

  useEffect(() => {
    !isLogged && history && history.push('/')
  }, [isLogged, history])

  if (getToken()) {
    return (
      <div className={classes.root} >
        <AppBar className={classes.appBar} position='static'>
          <Toolbar>
            <Typography variant='h6' className={classes.title}>
              Controle de Horas

            </Typography>
            {matches &&
              <>
                <Button color='inherit'>Projetos</Button>
                <Button color='inherit'>Apontamentos</Button>
                <Button onClick={() => dispatch(logout())} color='inherit'>Logout</Button>
              </>
            }
            {!matches &&
              <>
                <IconButton
                  edge='start'
                  className={classes.menuButton}
                  color='inherit'
                  onClick={(event) => setAnchorEl(event.currentTarget)}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='simple-menu'
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={() => setAnchorEl(null)}>Projetos</MenuItem>
                  <MenuItem onClick={() => setAnchorEl(null)}>Apontamentos</MenuItem>
                  <MenuItem
                    onClick={() => {
                      setAnchorEl(null)
                      dispatch(logout())
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </>
            }
          </Toolbar>
        </AppBar>
        <main className={classes.content}>
          <Container maxWidth='lg' className={classes.container}>
            <Grid container spacing={3}>
              <Routes />
            </Grid>
          </Container>
        </main>
      </div >
    )
  } else {
    return <Routes />
  }
}
