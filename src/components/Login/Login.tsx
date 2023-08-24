import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import {useFormik} from "formik";
import {LoginParamsType, loginTC, logoutTC} from "../../redux/auth-reducer";
import {FormControl, FormGroup, FormLabel} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../redux/redux-store";
import {Navigate} from "react-router-dom";
import {validateFromLogin} from "../../utils/validator/validators";
import {connect} from "react-redux";


export default function LoginForm() {
    const isAuth = useAppSelector(state => state.auth.isAuth)

    const dispatch = useAppDispatch()
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            return validateFromLogin(values);
        },

        onSubmit: (values: LoginParamsType) => {
            dispatch(loginTC(values))
            formik.resetForm()
            console.log(values)
        },
    })
    if (isAuth) return <Navigate to={'/profile'}/>

    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <FormControl>
                <FormLabel>
                    <p>To log in get registered
                        <a href={'https://social-network.samuraijs.com/'}
                           target={'_blank'}> here
                        </a>
                    </p>
                    <p>or use common test account credentials:</p>
                    <p>Email: free@samuraijs.com</p>
                    <p>Password: free</p>
                </FormLabel>
                <form onSubmit={formik.handleSubmit}>
                    <FormGroup>

                        <TextField label="Email"
                                   margin="normal"
                                   {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email &&
                            <div style={{color: 'red'}}>{formik.errors.email}</div>}
                        <TextField type="password"
                                   label="Password"
                                   margin="normal"
                                   {...formik.getFieldProps('password')}
                        />
                        {formik.touched.password && formik.errors.password &&
                            <div style={{color: 'red'}}>{formik.errors.password}</div>}

                        <FormControlLabel
                            label={'Remember me'}
                            control={<Checkbox checked={formik.values.rememberMe}
                                               {...formik.getFieldProps('rememberMe')}
                            />}
                        />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            Login
                        </Button>
                    </FormGroup>
                </form>
            </FormControl>
        </Grid>
    </Grid>
}

// const Login = (props: any) => {
//     return <>
//         <LoginForm/>
//     </>
// }
// export default connect(null, {loginTC, logoutTC})(Login)


//     <ThemeProvider theme={defaultTheme}>
//         <Container component="main" maxWidth="xs">
//             <CssBaseline />
//             <Box
//                 sx={{
//                     marginTop: 8,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                 }}
//             >
//                 <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                     <LockOutlinedIcon />
//                 </Avatar>
//                 <Typography component="h1" variant="h5">
//                     Sign in
//                 </Typography>
//                 <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
//                     <TextField
//                         margin="normal"
//                         required
//                         fullWidth
//                         id="email"
//                         label="Email Address"
//                         name="email"
//                         autoComplete="email"
//                         autoFocus
//                     />
//                     <TextField
//                         margin="normal"
//                         required
//                         fullWidth
//                         name="password"
//                         label="Password"
//                         type="password"
//                         id="password"
//                         autoComplete="current-password"
//                     />
//                     <FormControlLabel
//                         control={<Checkbox value="remember" color="primary" />}
//                         label="Remember me"
//                     />
//                     <Button
//                         type="submit"
//                         fullWidth
//                         variant="contained"
//                         sx={{ mt: 3, mb: 2 }}
//                     >
//                         Sign In
//                     </Button>
//                     <Grid container>
//                         <Grid item xs>
//                             <Link href="#" variant="body2">
//                                 Forgot password?
//                             </Link>
//                         </Grid>
//                         <Grid item>
//                             <Link href="#" variant="body2">
//                                 {"Don't have an account? Sign Up"}
//                             </Link>
//                         </Grid>
//                     </Grid>
//
//                 </Box>
//             </Box>
//             <Copyright sx={{ mt: 8, mb: 4 }} />
//         </Container>
//     </ThemeProvider>
//
// );