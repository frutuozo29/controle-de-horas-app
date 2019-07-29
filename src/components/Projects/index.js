import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { getProjetos } from '../../actions/project'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  }
}))

export default () => {
  const isLoading = useSelector(({ project }) => project.isLoading)
  const hasError = useSelector(({ project }) => project.hasError)
  const items = useSelector(({ project }) => project.items)

  const dispatch = useDispatch()

  useEffect(() => { !items.length && !isLoading && !hasError && dispatch(getProjetos()) }, [isLoading, hasError, items, dispatch])

  const classes = useStyles()

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align='right'>Total de horas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(item => (
            <TableRow key={item.id}>
              <TableCell component='th' scope='row'>
                {item.name}
              </TableCell>
              <TableCell align='right'>{10}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  )
}
