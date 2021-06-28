import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import './styles/sidebar.css'
import StatsPage from './StatsPage';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ProfilePage from './ProfilePage';
import HomePageReport from './HomePageReport';

function Home(props){
    return(
        <>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={HomePageReport} exact/>
                <Route path="/stats" component={StatsPage} exact/>
                <Route path="/settings" component={() => <ProfilePage user={props.user} />} exact/>
            </Switch>
            <footer>
            <div className="sidebarTray">
                <div>
                    <Link to="/">
                        <HomeIcon color="primary" fontSize="large"/>
                    </Link>                    
                </div>
                <div>
                <Link to="/stats">
                    <TimelineIcon color="primary" fontSize="large"/>
                </Link>   
                </div>
                <div>
                <Link to="/settings">
                    <PersonRoundedIcon color="primary" fontSize="large"/>
                </Link>    
                </div>
            </div>  
            </footer>

        </BrowserRouter>
        </>
    )
}

export default Home