import React, {useState } from 'react';
import SearchAppBar from '../Appbar/index';
import {Grid, Container,Paper} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme =>({
    root:{
        display:'fixed',
        width:'100%',
        alignItems:'center',
        backgroundColor:'#e6ffff',
    },
    paper:{
        display:'flex',
        borderRadius:'10px',
        width:'80vw',
        height:'50vh',
        
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(5),


    },
    paper2:{

    },

}));

export default function Main(){
    const classes = useStyles();

    return (
        <> 
        <div className={classes.root}>
            <SearchAppBar/>
                    <Grid container direction="column" alignItems="baseline" justify="flex-start" spacing={-1}>
                        <Grid item xs={12} spacing={1} >
                            <Paper className={classes.paper} elevation={20}>
                                sauhsuah
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper} elevation={20}>
                                saasuh
                                </Paper>
                        </Grid>

                    </Grid>
                    </div>
      </>
    );
}
