import Header from '../partials/Header/Header'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(() => ({
    Container: {
        padding: '15px 0px',
    }
}))


const Default = ({children}) => {
    const classes = useStyles()
    return (
        <>
            <Header />
            <Container className={classes.Container}>
                {children}    
            </Container>
            
        </>
    )
}

export default Default