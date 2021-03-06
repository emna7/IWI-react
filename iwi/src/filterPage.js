import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from './topbar.js'
import SearchClubs from './searchClubs0';
import ClubsList from './clubsList0';
import Footer from './footer.js'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import "./topbar.css";
import './filterPage.css';
import { Search} from "@material-ui/icons";



const useStyles = makeStyles((theme) => ({
  root: {
     flexGrow: 1,
   },
   paper: {
     height: 140,
     width: 100,
   },
   control: {
     padding: theme.spacing(1),
   },
}));

function FilterPage() {
  const classes = useStyles();

  return (
    <React.Fragment>
    <TopBar/>
    <div className="buttonList" >
    <Button variant="contained" color="secondary">
    Club
    </Button>
    <Button variant="contained" color="secondary">
    Event
    </Button>
    <Button variant="contained" color="secondary">
    Gig
    </Button>
    </div>
    <div className="FilterMain">
    <div className="searchWrapper">
    <SearchClubs/>
    </div>
    <div className="listWrapper">
    <div className="topbarCenter">
      <div className="searchNamebar">
        <Search className="searchNameIcon" />
        <input
          placeholder="Enter a name"
          className="searchNameInput"
        />
      </div>
    </div>
    <ClubsList/>
    </div>
    </div>
    <Footer/>
    </React.Fragment>

  );
}

export default FilterPage;
