import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormValidation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fName: '',
            lName: '',
            fNameError: false,
            lNameError: false
        }
    }

    validation = () => {
        let isError = false;
        const errors= this.state;
        errors.lNameError= this.state.lName === '' ? true : false;
        errors.fNameError= this.state.fName === '' ? true : false;
        this.setState({
            ...errors,
            // ...this.state
        })
        return isError = (errors.fName!=='' && errors.lName!=='') ? true : false
    }

    Next = () => {
        
        var isValidated = this.validation();
        if(isValidated){
            alert("validation successfull");
        }
    }

    change = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    render() {
        return (
            <div className="validation">
                <TextField 
                    error = {this.state.fNameError}
                    label="First Name"
                    type="text"
                    name="fName"
                    variant="outlined"
                    fullWidth
                    onChange={e => this.change(e)}
                    helperText={this.state.fNameError ? "Enter first name" : ''}/>
                <TextField 
                    error = {this.state.lNameError}
                    label="Last Name"
                    type="text"
                    name="lName"
                    fullWidth
                    variant="outlined"
                    onChange={e => this.change(e)}
                    helperText={this.state.lNameError ? "Enter Last name" : ''} />
                    <div>
                <Button variant="contained" color="primary" onClick={this.Next}>
                    Next
                </Button>
                </div>
            </div>
        )
    }
}

export default FormValidation
