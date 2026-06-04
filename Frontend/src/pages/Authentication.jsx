import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Snackbar from '@mui/material/Snackbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AuthContext } from '../context/AuthContext'; 

const defaultTheme = createTheme();

export default function Authentication() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");
    const [error, setError] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [formState, setFormState] = React.useState(0); // 0 = Login, 1 = Register
    const [open, setOpen] = React.useState(false);

    const { handleRegister, handleLogin } = React.useContext(AuthContext);

    let handleAuth = async () => {
        try {
            setError("");
            setMessage("");
            
            if (formState === 0) {
                // Login validation logic
                let result = await handleLogin(username, password);
                if(result) setMessage("Login Successful!");
            }
            if (formState === 1) {
                // Register validation logic
                let result = await handleRegister(name, username, password);
                if(result) {
                setMessage("Registration Successful! Please Sign In.");
                setOpen(true);
                setUsername("");
                setError("");
                setFormState(0);
                setPassword("")
                }
            }
        } catch (err) {
          // Log error details for internal debugging purposes
          console.error("Authentication error encountered:", err);
          
          // Safe fallback structure to prevent runtime crashes if err.response is undefined
          const errMsg = err.response?.data?.message || err.message || "An unexpected authentication error occurred.";
          setError(errMsg);
      } 
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex', height: '100vh', width: '100vw' }}>
                <CssBaseline />
                <Box
                    sx={{
                        flex: { xs: 0, sm: 4, md: 7 },
                        display: { xs: 'none', sm: 'block' },
                        backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1664036937350-4ca5ae06dd4e?w=600&auto=format&fit=crop&q=60")',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Box
                    component={Paper}
                    elevation={6}
                    square
                    sx={{
                        flex: { xs: 12, sm: 8, md: 5 },
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '100%'
                    }}
                >
                    <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '400px' }}>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        
                        <Box sx={{ mb: 2 }}>
                            <Button variant={formState === 0 ? "contained" : "text"} onClick={() => { setFormState(0) }}>
                                Sign IN
                            </Button>
                            <Button variant={formState === 1 ? "contained" : "text"} onClick={() => { setFormState(1) }}>
                                Sign UP
                            </Button>
                        </Box>
                        {message && <p style={{ color: 'green' }}>{message}</p>}

                        <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
                            {formState === 1 && (
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="fullName"
                                    label="Full Name"
                                    name="fullName"
                                    value={name}
                                    autoFocus
                                    onChange={(e) => setName(e.target.value)}
                                />
                            )}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                value={username}
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
                                id="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <p style={{color: "red"}}>{error}</p>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleAuth}
                            >
                                {formState === 0 ? "Sign In" : "Sign Up"}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Snackbar
            open={open}
            autoHideDuration={4000}
            message={message}
            />
        </ThemeProvider>
    );
}