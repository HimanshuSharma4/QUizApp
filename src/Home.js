import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ClickAwayListener } from '@material-ui/core';

function Home() {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  
  const classes = useStyles();
  const [Level, setLevel] = React.useState('');

  const handleChange = (event) => {
    setLevel(event.target.value);
  };
    return (
        <div className = "home">
          <h1>HomePage</h1>
          <div>
          <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-helper-label">Level</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            onChange={handleChange}
          >
            
            <MenuItem value={10}>Beginner</MenuItem>
            <MenuItem value={20}>Intermediate</MenuItem>
            <MenuItem value={30}>Advance</MenuItem>
          </Select>
          <FormHelperText>Select Your Level</FormHelperText>
        </FormControl>
      </div>
      </div>
    )
}

export default Home



          