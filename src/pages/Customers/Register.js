import {useState} from 'react'
import axios from 'axios'
import {makeStyles} from '@material-ui/core/'
import {useHistory} from 'react-router-dom'

import {TextField, Button,} from '@material-ui/core'

import Toasty from '../../components/Toasty'

const useStyles = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(3),
    }
}))

const Register = () => {
    let history = useHistory()
    const classes = useStyles()

    const [form, setForm] = useState({
        name: {
            value: '',
            error: false,
        },
        job: {
            value: '',
            error: false,
        },
    })

    const [openToasty, setOpenToasty] = useState(false)


    const handleInputChange = (e) => {
        const {name, value} = e.target

        setForm({
            ...form,
            [name]: {
                value,
            },
        })
    }

    const handleRegisterButton = () => {
        let haserror = false
        let newFormState = {
            ...form,
        }

        if(!form.name.value) {
            haserror = true
            
            newFormState.name = {
                value: form.name.value,
                error: true,
                helperText: 'Digite seu nome corretamente',            
            }
            
        }
        if(!form.job.value) {
            haserror = true
            newFormState.job = {
                value: form.job.value,
                error: true,
                helperText: 'Digite seu cargo corretamente',
            
            }
        } 
        if (haserror) {
            return setForm(newFormState)
        }
        
        axios.post('https://reqres.in/api/users', {
            name: form.name.value,
            job: form.job.value,
        }).then((response) => {
            history.push("/customers")
            setOpenToasty(true)
        })
        
    }
    return(
        <>  
            
                <h1>Cadastro de clientes</h1>
                <div className={classes.wrapper}>
                    <TextField
                        helperText={form.name.error ? form.name.helperText : ""}
                        error={form.name.error}
                        label="Digite seu nome"
                        name="name"
                        value={form.name.value}
                        onChange={handleInputChange}
                        />
                </div>
                <div className={classes.wrapper}>
                    <TextField 
                    helperText={form.job.error ? form.job.helperText : ""}
                    error={form.job.error}
                    label="Digite seu cargo" 
                    name="job" 
                    value={form.job.value} 
                    onChange={handleInputChange} 
                    />
                </div>
                <div className={classes.wrapper}>
                    <Button variant="contained" color="primary" onClick={handleRegisterButton}>Cadastrar</Button>
                </div>
                <Toasty 
                open={openToasty} 
                severity="success" 
                message="cadastro realizado com sucesso" 
                onClose={() => setOpenToasty(false)}
                />
        </>
    )
}

export default Register