import React from 'react'
import Grid from '@material-ui/core/Grid'
import  { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core';
import Container from "@material-ui/core/Container";

const useStyle = makeStyles(theme =>({
    container:{
        textAlign: 'center'
    }
}))

export const ListCapsNames = ({caps,capsMin,capsMax}) => {
    const classes = useStyle()
    return(
            <Grid item xs={12} sm={5} className={classes.container}>
                <Container style={{display:'flex'} }>
                    <Typography style={{width: 90, }} >
                        {capsMin+'º'}
                    </Typography>
                    <Typography style={{width: 90}}>
                        {capsMax+'º '}
                    </Typography>
                    <Typography style={{fontWeight:'bold'}}>
                       {caps}
                    </Typography>
                </Container>
            
            </Grid>
    )
}

export default ListCapsNames