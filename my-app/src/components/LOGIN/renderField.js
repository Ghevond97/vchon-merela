import React from 'react';
import Typography from  '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';



const styles = {
  container: {
    //display: 'flex',
    //justifyContent: 'center',
    //marginTop: '30px',
    
    borderRadius: '3px'
  },

};

const renderField = ({
                       input,
                       width,
                       type,
                       label,
                       meta: { touched, error },
                       classes
                     }) =>{
  return(
    <div className={classes.container}>
      <div >
        <TextField
          {...input}
          type={type}
          label={label}
          margin='normal'
        />
        <Typography variant='Subheading' color='grey'>
          {touched &&
          ((error && <span>{error}</span>))
          }
        </Typography>
      </div>
    </div>
  )
};

renderField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(renderField);