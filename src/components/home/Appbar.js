import React from 'react'
import { AppBar, Select, MenuItem, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'



const useStyles = makeStyles({
    app : {
        backgroundColor : 'white',
        width : '100%',
        marginLeft : '270px',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'flex-end',
        alignItems : 'center'
    },
    form : {
        marginRight : '70px',
        padding : '20px'
    },
    logout: {
        marginRight : 20,
    }

})

const Appbar = ({handleLogout}) => {
    const classes = useStyles()

    return(
        <AppBar position="fixed" className={classes.app}>
            <div className={classes.form}>
                <Select id="loc" defaultValue="Kochi, IN">
                    <MenuItem value="Kochi, IN">Kochi, IN</MenuItem>
                </Select>
            </div>
            <div className={classes.logout}>
                <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
            </div>
        </AppBar>
    )
}

export default Appbar
