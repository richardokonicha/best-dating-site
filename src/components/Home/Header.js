import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Card, CardHeader, CardContent, Button, Typography } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
      height: "80vh",
      padding: '7em',
      paddingRight: '14em',
      backgroundColor: '#E90D66',
    },

    form: {
        backgroundColor: "#ffffff",
        color: 'black',
        width: '26vw',
        height: '50vh',
        borderRadius: "25px"
    },

    header: {
        alignContent: 'center',
        textAlign: 'center',
    }

}));

const TopSection = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.root} container spacing={2}>
                <Grid className="col-md-8 text-center p-3">
                    <Typography variant="h3" color="primary">
                        Are you looking for love?
                    </Typography>
                    <p style={{'color': '#ffffff', 'paddingTop': '1rem', 'fontSize': '25px'}}>We are looking for you</p>
                </Grid>
                <Grid className="col-md-4">
                    <Card className={classes.form} variant="outlined">
                        <CardHeader
                            className={classes.header}
                            title="Mitglied werden"
                        />
                        <CardContent>
                            <Button variant='outlined' color="primary">
                                Anmelden
                            </Button>

                            <Button variant='outlined' color="primary">
                                Anmelden
                            </Button>

                            <Button variant='outlined' color="primary">
                                Anmelden
                            </Button>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
};

export default TopSection;