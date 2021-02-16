import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Button, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: '3em',
      paddingLeft: '10%',
      backgroundColor: '#E90D66',
      float: 'left'
    },

    navRoot: {
        paddingTop: '1em',
        paddingLeft: '35vw'
    }

}));


const NavSection = () => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item>
                <Typography variant='h4' color='primary'>
                    atemlos24
                </Typography>
            </Grid>

                <div className="row">
                    <Grid container className={classes.navRoot} spacing={8}>
                        <Grid item>
                            <Typography variant='h6' color='primary'>
                                Startseite
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6' color='primary'>
                                Uber uns
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h6' color='primary'>
                                Support
                            </Typography>
                        </Grid>

                        <Grid item>
                            <Button variant='outlined' color="primary">
                                Anmelden
                            </Button>
                        </Grid>
                    </Grid>

                </div>


        </Grid>
    )
};

export default NavSection;