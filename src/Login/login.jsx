import React, { Component } from "react";
import { FormErrors } from "./FormErrors";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { NavLink } from "react-router-dom";
import Dashboard from "../views/Dashboard/Dashboard";
import { Router, Route, Switch, Redirect } from "react-router-dom";
class Login extends React.Component {
  state = {};
  constructor(props) {

    super(props);
    if(localStorage.getItem("adminToken")){
      window.location="/admin/news"
    }
    this.state = {
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
      emailValid: false,
      passwordValid: false,
      formValid: false,
    };
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? "" : " is too short";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid,
    });
  }

  _loginHandler = async (e) => {
    e.preventDefault();
    const that=this
    var axios = require("axios");
    var data = JSON.stringify({
      email: this.state.email,
      password: this.state.password,
    });

    var config = {
      method: "post",
      url: "https://sappss.herokuapp.com/admin/admin_login",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
  
    axios(config)
      .then(function ({ data: response }) {
        const { data, error, success } = response;
        console.log("response", response);
        if (success) {
          // alert(data)
          localStorage.setItem('adminToken', data); 
          // that.props.history.push('/admin/news')
         window.location.href="/admin/news"
         
        } else {
          alert(error);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="col-lg-3 col-sm-6 col-xs-10 mx-auto mt-5">
        <div style={{ textAlign: "center" }}>
          <LockOutlinedIcon style={{ color: "#e75480", fontSize: "50px" }} />
          <h2>
            <strong>Sign in</strong>{" "}
          </h2>
        </div>
        <form className="demoForm" onSubmit={this._loginHandler}>
          <div
            className={`form-group mb-2 ${this.errorClass(
              this.state.formErrors.email
            )}`}
          >
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              required
              className="form-control"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleUserInput}
            />
          </div>
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div
            className={`form-group mb-2 ${this.errorClass(
              this.state.formErrors.password
            )}`}
          >
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleUserInput}
            />
          </div>
          {/* <NavLink to="/admin/news"> */}

          <button
            type="submit"
            className="btn btn-primary"
            disabled={!this.state.formValid}
          >
            Sign in
          </button>

          {/* </NavLink> */}
        </form>
      </div>
    );
  }
}

export default Login;
// import React, { useState } from "react";
// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import CssBaseline from "@material-ui/core/CssBaseline";

// import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Link from "@material-ui/core/Link";
// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// // import "./Login.css";
// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function Login() {
//   const classes = useStyles();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [formerror, setFormerror] = useState({email:"",password:""});
//   const [emailvalidation, setEmailvalidation] = useState(false);
//   const [passwordvalidation, setPasswordvalidation] = useState(false);
//   const [formvalidation, setFormvalidation] = useState(false);

//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign in
//         </Typography>

//         <form className={classes.form}>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             value={this.state.email}
//             onChange={(e)=>setEmail(e.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={this.state.password}
//             onChange={(e)=>setPassword(e.target.value)}
//           />

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign In
//           </Button>

//         </form>

//       </div>
//     </Container>
//   );
// }
