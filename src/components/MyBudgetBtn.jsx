import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import './styles/myBudgetBtn.css'
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        borderRadius:'15px',
        border: 'none',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

function MyBudgetBtn() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [limit, setLimit]=useState({
        bills: 150,
        food: 200,
        transport: 150,
        entertainment: 400,
        others: 100
    })

    function handleChange(event){
        const {name,value}=event.target
        setLimit((prevValues) => {
            return {
                ...prevValues,
                [name]:value
            }
        })
    }

    return (
        <>
            <div>
                <div className="profileOptions" onClick={handleOpen}>
                    <h3>My budget</h3>
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <h2 id="transition-modal-title">My budget</h2>
                            <div className="myBudgets">
                                <h5>Bills</h5>
                                <input className="myBudgetInput"
                                name="bills" 
                                placeholder="Enter budget" 
                                value={limit.bills}
                                onChange={handleChange} />
                            </div>
                            <div className="myBudgets">
                                <h5>Food</h5>
                                <input className="myBudgetInput" 
                                name="food"
                                placeholder="Enter budget" 
                                value={limit.food}
                                onChange={handleChange} />
                            </div>
                            <div className="myBudgets">
                                <h5>Transport</h5>
                                <input className="myBudgetInput" 
                                name="transport"
                                placeholder="Enter budget" 
                                value={limit.transport}
                                onChange={handleChange} />
                            </div>
                            <div className="myBudgets">
                                <h5>Entertainment</h5>
                                <input className="myBudgetInput" 
                                name="entertainment"
                                placeholder="Enter budget" 
                                value={limit.entertainment}
                                onChange={handleChange} />
                            </div>
                            <div className="myBudgets">
                                <h5>Others</h5>
                                <input className="myBudgetInput" 
                                name="others"
                                placeholder="Enter budget" 
                                value={limit.others}
                                onChange={handleChange} />
                            </div>
                            <center>
                                <Button style={{backgroundColor:"#1976D2",marginTop:"0.5rem"}}>Update budget</Button>
                            </center>
                        </div>
                    </Fade>
                </Modal>
            </div>
        </>
    )
}

export default MyBudgetBtn