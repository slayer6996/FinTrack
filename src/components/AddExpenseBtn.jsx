import React from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Input } from '@material-ui/core';
import './styles/addExpenseBtn.css'


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: 'none',
        borderRadius:'15px',
        boxShadow: theme.shadows[5],
        margin:'1rem',
        padding: '1rem',
    },
}));

function AddExpenseBtn() {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className="addExpense">
                <center>
                    <Fab size="small" color="primary" aria-label="add">
                        <div>
                            <div onClick={handleOpen}><AddIcon /></div>
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
                                        <center>
                                            <Input placeholder="Amount"/>
                                        </center>
                                        <div className="addExpenseCategory" >
                                        <button className="loginBtn">Bills</button>
                                        <button className="loginBtn">Food</button>
                                        <button className="loginBtn">Transport</button>
                                        <button className="loginBtn">Entertainment</button>
                                        <button className="loginBtn">Others</button>
                                        </div>
                                    </div>
                                </Fade>
                            </Modal>
                        </div>
                    </Fab>
                    <h4 className="addExpenseText">Add Expense</h4>
                </center>
            </div>
        </>
    )
}

export default AddExpenseBtn