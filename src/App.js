import React,{ useState } from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import firebase from 'firebase/app'
import 'firebase/auth'
import './components/styles/navbar.css'
import { useEffect } from 'react';
import './App.css';
import Home from './components/Home';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#152238',
    border: 'none',
    borderRadius:'15px',
    boxShadow: theme.shadows[5],
    color:'white',
    padding: "2.5rem"
  },
}));

function App() {
  const [auth,setAuth]=useState(false)
  const [user,setUser]=useState({
    name:"",
    email:""
  })
  
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    firebase.auth().onAuthStateChanged(userCredentials => {
        if(userCredentials){
          console.log(userCredentials)
          setUser({
            name: userCredentials.displayName,
            email: userCredentials.email
          })
          setAuth(true)
        }
    })
  },[])

  function googleLogin(){
     firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
         userCredentials => {
            if(userCredentials){
              setAuth(true)
              setOpen(false)
            }
         }
     )
  }

  function signout(){
    firebase.auth().signOut().then(() => {
      setAuth(false)
    })
  }
 
  
  return (
    <div>
        <div className="nav">
                <h2>FinTrack</h2>
                {/* <Button className="loginBtn" variant="contained"> */}
                    <div>
                        {
                        auth? (
                            <button className="loginBtn" type="button" onClick={signout}>
                            Sign out
                            </button>
                        ) : (
                            <button className="loginBtn" type="button" onClick={handleOpen}>
                            Sign in
                            </button>
                        )
                        }
                        
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
                                <p id="transition-modal-description"><Button className="loginBtn" variant="contained" style={{backgroundColor:"#DB4437"}} onClick={googleLogin} >Continue with Google</Button></p>
                            </center>
                            </div>
                        </Fade>
                        </Modal>
                    </div>
                {/* </Button>     */}
        </div>
            {
                auth && <Home user={user} />
            }

    </div>
  );
}

export default App;