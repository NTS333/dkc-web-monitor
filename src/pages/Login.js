import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import $ from "jquery";
import info  from '../info';

import {
    Paper,
    Box,
    Grid,
    TextField,
    Typography,
    FormControlLabel,
    Checkbox,
    Button,
    Container
} from '@material-ui/core';
import ToastNotification from '../components/ToastNotification';
var bcrypt = require('bcryptjs');
const useStyles = makeStyles((theme) => ({
    wrapper: {
        background: '#444343'
    },
    container: {
        background: '#fbfbfbdb',
        padding: 20,
        marginTop: 10,
        borderRadius: 20,
        height: 250
    },
    center: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

const Login = () => {
    const [message, setMessage] = useState({
        status: "error",
        content: "",
        action: false,
      });
    const history = useHistory();
    const validationSchema = Yup.object().shape({
        // fullname: Yup.string().required('Fullname is required'),
        username: Yup.string()
            .required('Username is required')
            .min(5, 'Username must be at least 5 characters')
            .max(20, 'Username must not exceed 20 characters'),
        // email: Yup.string()
        //     .required('Email is required')
        //     .email('Email is invalid'),
        password: Yup.string()
            .required('Password is required')
            .min(5, 'Password must be at least 5 characters')
            .max(40, 'Password must not exceed 40 characters'),
        // confirmPassword: Yup.string()
        //     .required('Confirm Password is required')
        //     .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
        // acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
    });

    const {
        register,
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const classes = useStyles();

    const onSubmit = data => {
        window.setTimeout(() => {
            var Status = $("#status");
            console.log(Status);
            if (window.isStarted) {
              Status.css({ background: "green", color: "white" });
              Status.html("Connected");

            }
          },0);
        let isSuccess = true;
        var salt = bcrypt.genSaltSync(10);
        var hash_us = bcrypt.hashSync("admin", salt);
        var hash_pw = bcrypt.hashSync("admin", salt);
        // localStorage.setItem('info',JSON.stringify({
        //     usn:hash_us,
        //     pw:hash_pw
        // }));
        bcrypt.compare(data.username, info.usn, function(err, res) {
           if (res){
            bcrypt.compare(data.password, info.pw, function(errPW, resPW) {
                if (resPW){
                    history.replace('/dashboard')
                }
                else
                isSuccess = false;
             });
           }
           else{
            isSuccess = false;
           }
           handleOpen(isSuccess);

        });
        

    };
    const handleOpen = (isSuccess) => {
        isSuccess
          ? setMessage({
              status: "success",
              content: "Đăng nhập thành công",
              action: true,
            })
          : setMessage({
              status: "error",
              content: "Đăng nhập thất bại",
              action: true,
            });
      };
      const handleClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setMessage({
          ...message,
          content: "",
          action: false,
        });
      };
    
    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
                className={classes.wrapper}

            >
                <Container maxWidth='xs'>
                    <Typography variant="h5" align="center" margin="dense" style={{ color: 'whitesmoke' }}>
                        SIGN IN
                    </Typography>
                    <Grid container spacing={1} justify='center' className={classes.container}>
                        {/* <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        id="fullname"
                                        name="fullname"
                                        label="Full Name"
                                        fullWidth
                                        margin="dense"
                                        {...register('fullname')}
                                        error={errors.fullname ? true : false}
                                    />
                                    <Typography variant="inherit" color="textSecondary">
                                        {errors.fullname?.message}
                                    </Typography>
                                </Grid> */}
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="username"
                                name="username"
                                label="Username"
                                fullWidth
                                margin="dense"
                                {...register('username')}
                                error={errors.username ? true : false}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.username?.message}
                            </Typography>
                        </Grid>
                        {/* <Grid item xs={12} sm={12}>
                                    <TextField
                                        required
                                        id="email"
                                        name="email"
                                        label="Email"
                                        fullWidth
                                        margin="dense"
                                        {...register('email')}
                                        error={errors.email ? true : false}
                                    />
                                    <Typography variant="inherit" color="textSecondary">
                                        {errors.email?.message}
                                    </Typography>
                                </Grid> */}
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                fullWidth
                                margin="dense"
                                {...register('password')}
                                error={errors.password ? true : false}
                            />
                            <Typography variant="inherit" color="textSecondary">
                                {errors.password?.message}
                            </Typography>
                        </Grid>
                        {/* <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        label="Confirm Password"
                                        type="password"
                                        fullWidth
                                        margin="dense"
                                        {...register('confirmPassword')}
                                        error={errors.confirmPassword ? true : false}
                                    />
                                    <Typography variant="inherit" color="textSecondary">
                                        {errors.confirmPassword?.message}
                                    </Typography>
                                </Grid> */}
                        <Grid item xs={12}>
                            {/* <FormControlLabel
                                        control={
                                            <Controller
                                                control={control}
                                                name="acceptTerms"
                                                defaultValue="false"
                                                inputRef={register()}
                                                render={({ field: { onChange } }) => (
                                                    <Checkbox
                                                        color="primary"
                                                        onChange={e => onChange(e.target.checked)}
                                                    />
                                                )}
                                            />
                                        }
                                        label={
                                            <Typography color={errors.acceptTerms ? 'error' : 'inherit'}>
                                                I have read and agree to the Terms *
                                            </Typography>
                                        }
                                    />
                                    <br />
                                    <Typography variant="inherit" color="textSecondary">
                                        {errors.acceptTerms
                                            ? '(' + errors.acceptTerms.message + ')'
                                            : ''}
                                    </Typography> */}
                            <Box mt={1}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSubmit(onSubmit)}
                                    style={{ float: 'right' }}
                                >
                                    Sign in
                                </Button>
                            </Box>
                        </Grid>

                    </Grid>

                </Container>



            </Grid>
                <ToastNotification
                message={message}
                handleOpen={handleOpen}
                handleClose={handleClose}
            ></ToastNotification>

        </>
    );
};

export default Login;
