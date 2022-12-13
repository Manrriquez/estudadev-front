import { Grid, Paper } from '@mui/material'
import React from 'react'
import LayoutDashboard from '../../../components/Layout/Index'

const StudenDashboard = () => {
  return (
    <LayoutDashboard>
      <Grid item xs={12} md={8} lg={9}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240,}}>
                  aaaaaaaaaaaaaa
                </Paper>
      </Grid>

              <Grid item xs={12} md={4} lg={3}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 240,}}>
                  bbbbbbbbbbbbbbbbbbb
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  ccccccccccccccccccccc
                </Paper>
              </Grid>
    </LayoutDashboard>
  )
}

export default StudenDashboard