import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../contexts/Authcontext';
import { Snackbar } from '@mui/material';
import MouseParticles from "react-mouse-particles";



const defaultTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#7c3aed",
    },
    secondary: {
      main: "#3b82f6",
    },
    background: {
      default: "#020617",
      paper: "rgba(15,23,42,.8)",
    },
  },

  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});
export default function Authentication() {

    

    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [name, setName] = React.useState();
    const [error, setError] = React.useState();
    const [message, setMessage] = React.useState();


    const [formState, setFormState] = React.useState(0);

    const [open, setOpen] = React.useState(false)
    const images = [
  "/video1.png",
  "/video2.png",
  "/video3.png",
  "/video4.png",
];

const [currentImage, setCurrentImage] = React.useState(0);

React.useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, 2500);

  return () => clearInterval(interval);
}, []);


    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            if (formState === 0) {

                let result = await handleLogin(username, password)


            }
            if (formState === 1) {
                let result = await handleRegister(name, username, password);
                console.log(result);
                setUsername("");
                setMessage(result);
                setOpen(true);
                setError("")
                setFormState(0)
                setPassword("")
            }
        } catch (err) {

            console.log(err);
             if (err.response) {
        setError(err.response.data.message);
    } else {
        setError(err.message);
    }
        }
    }


  return (
    <>
        <MouseParticles
            g={1}
            color="#8b5cf6"
            cull="body"
            level={8}
            alpha={0.7}
        />

        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
backgroundImage:
'linear-gradient(rgba(2,6,23,.75),rgba(2,6,23,.75)),url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3")',                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
<Grid
item
xs={12}
sm={8}
md={5}
component={Paper}
elevation={0}
square
sx={{

background:"#0f172a",

display:"flex",

justifyContent:"center",

alignItems:"center",

}}
>                    <Box
                       sx={{

width:"85%",

p:5,

borderRadius:4,

background:"rgba(30,41,59,.6)",

backdropFilter:"blur(20px)",

border:"1px solid rgba(255,255,255,.08)",

boxShadow:"0 0 40px rgba(0,0,0,.4)",

}}
                    >
<Avatar

sx={{

mx:"auto",

mb:3,

width:75,

height:75,

bgcolor:"#7c3aed",

boxShadow:"0 0 25px #7c3aed"

}}

>                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography
variant="h4"
fontWeight="bold"
sx={{
mb:3,
background:"linear-gradient(90deg,#8b5cf6,#3b82f6)",
WebkitBackgroundClip:"text",
WebkitTextFillColor:"transparent"
}}
>
Welcome Back
</Typography>
<Box
    sx={{
        display: "flex",
        justifyContent: "center",
        mb: 3
    }}
>
    <img
        src={images[currentImage]}
        alt="login"
        style={{
            width: "220px",
            height: "220px",
            objectFit: "contain",
            transition: "0.6s",
        }}
    />
</Box>


                        <div>
                            <Button variant={formState === 0 ? "contained" : ""} onClick={() => { setFormState(0) }}>
                                Sign In
                            </Button>
                            <Button variant={formState === 1 ? "contained" : ""} onClick={() => { setFormState(1) }}>
                                Sign Up
                            </Button>
                        </div>

                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            {formState === 1 ? <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Full Name"
                                name="username"
                                value={name}
                                autoFocus
                                onChange={(e) => setName(e.target.value)}
                            /> : <></>}

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={username}
                                autoFocus
                                onChange={(e) => setUsername(e.target.value)}

                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}

                                id="password"
                            />

                            <p style={{ color: "red" }}>{error}</p>

                            <Button
                                type="button"
                                fullWidth
                                variant="contained"

                                sx={{
                                mt:3,
                                height:52,

                                fontWeight:"bold",

                                fontSize:16,

                                borderRadius:3,

                                background:"linear-gradient(90deg,#7c3aed,#2563eb)",

                                transition:".3s","&:hover":{

                                transform:"translateY(-2px)",

                                boxShadow:"0 0 20px #7c3aed"

                            }

}}
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleAuth}
                            >
                                {formState === 0 ? "Login " : "Register"}
                            </Button>

                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Snackbar

                open={open}
                autoHideDuration={4000}
                message={message}
            />

      </ThemeProvider>
    </>
);
}