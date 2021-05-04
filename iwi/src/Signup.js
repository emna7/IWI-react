import React from 'react';
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Signup=()=>{
const paperStyle={padding:'30px 20px', width:300, margin:"20px auto"}
const headerStyle={margin:0}
const avatarStyle={backgroundColor:'#1bbd7e'}
const marginTop={marginTop:20}
const btnstyle={backgroundColor:'#1bbd7e', color:'white'}
	return (
		<Grid>
			<Paper elevation={20} style={paperStyle}>
				<Grid align='center'>
					<Avatar style={avatarStyle}>
						<AddCircleOutlineOutlinedIcon/>
					</Avatar>
					<h2 style={headerStyle}>Sign Up</h2>
					<Typography variant='caption' gutterBottom>Please fill this form to create an account!</Typography>
				</Grid>	
				<form>
			  		<TextField fullWidth label='First Name' placeholder="Enter your first name"/>
			  		<TextField fullWidth label='Last Name' placeholder="Enter your last name"/>
			  		<TextField fullWidth label='Email' placeholder="Enter your email"/>
			  		<FormControl component="fieldset" style={marginTop}>
    					<FormLabel component="legend">Gender</FormLabel>
      					<RadioGroup aria-label="gender" name="gender" style={{display: 'initial'}}>
        					<FormControlLabel value="female" control={<Radio />} label="Female" />
        					<FormControlLabel value="male" control={<Radio />} label="Male" />
      					</RadioGroup>
    				</FormControl>
			  		<TextField fullWidth label='Phone Number' placeholder="Enter you phone number"/>
			  		<TextField fullWidth label='Location'/>
			  		<TextField fullWidth label='Password'/>
			  		<TextField fullWidth label='Confirm Password'/>
			  		<FormControlLabel
        				control={<Checkbox name="checkedA" />}
        				label="I accept the terms and conditions"
      				/>
			  		<Button type='submit' color='#1bbd7e' variant="Contained" style={btnstyle} fullWidth>sign in</Button>
			  	</form>
			</Paper>
		</Grid>
		)
}

export default Signup;
