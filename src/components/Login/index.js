import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as loginActions from '../../actions/login'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import AlarmOnOutlinedIcon from '@material-ui/icons/AlarmOnOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    width: 76,
    height: 76
  },
  icon: {
    fontSize: '2.5em'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default ({ history }) => {
  const classes = useStyles()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const isLogged = useSelector(({ auth }) => auth.isLogged)
  const dispatch = useDispatch()

  useEffect(() => { isLogged && history.push('/') }, [isLogged, history])

  const handlerSubmit = () => {
    dispatch(loginActions.login(username, password))
  }

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.container}>
        <Avatar className={classes.avatar}>
          <AlarmOnOutlinedIcon className={classes.icon} />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Controle de Horas - Login
        </Typography>
        <form className={classes.form}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email'
            autoFocus
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            label='Senha'
            type='password'
            id='password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            onClick={handlerSubmit}
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Login
          </Button>
        </form>
      </div>
    </Container>
  )
}
