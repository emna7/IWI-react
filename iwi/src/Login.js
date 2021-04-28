import React from 'react';
import { Route, Link } from 'react-router-dom';
import App from './App';
import Club from './Clubs';
import Event from './Events';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core';
import Paper from '@material-ui/core';
import Avatar from '@material-ui/core';
import Link from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login=()=>{

	const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
	const avatarStyle={backgroundColor:'#1bbd7e'}
	const btnstyle={margin:'8px 0'}
	return(
		<Grid>
			<Paper elevation={10} style={paperStyle}>
				<Grid align='center'>
					<Avater style={avatarStyle}><LockOutlinedIcon/></Avatar>
					<h2>Sign In</h2>
				</Grid>
				<TextField label='Username' placeholder='Enter username' fullWidth required/>
				<TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
				<FormControlLabel
					control={
					<Checkbox
						name="checkedB"
						color="primary"
					/>
					}
					label="Remember me"
				/>
				<Button type='submit' color='primary' variant="Contained" style={btnstyle} fullWidth>sign in</Button>
				<Typography> 
					<Link href="#" >
    				Forgot Password?
  					</Link>
  				</Typography>
  				<Typography> Do you have an account?
					<Link href="#" >
    				Sign Up
  					</Link>
  				</Typography>
			</Paper>
		</Grid>
	)
}

export default Login;
