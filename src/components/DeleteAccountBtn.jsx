import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
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
        margin:'1rem',
        padding: theme.spacing(2, 4, 3),
    },
}));

function DeleteAccountBtn() {
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
            <div>
                <div className="profileOptions" onClick={handleOpen}>
                    <h3 id="deleteOption">Delete account</h3>
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
                            <h2 id="transition-modal-title">Do you want to delete your account?</h2>
                            <center>
                                <Button style={{backgroundColor:"#c71313",color:'white',marginTop:"0.5rem"}}>Delete</Button>
                            </center>
                        </div>
                    </Fade>
                </Modal>
            </div>
        </>
    )
}

export default DeleteAccountBtn