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
const defaultTheme = createTheme();

export default function Authentication() {
    const [username, setUsername] = React.useState();
    const[password, setPassword] = React.useState();
    const[name, setName] = React.useState();
    const [error, setError] = React.useState();
    const [messages, setMessages] = React.useState();
    const [formState, setFormState] = React.useState(0);
    const [open, setOpen] = React.useState(false);


  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex', height: '100vh', width: '100vw' }}>
        <CssBaseline />
        <Box
          sx={{
            flex: { xs: 0, sm: 4, md: 7 }, 
            display: { xs: 'none', sm: 'block' },
            backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1664036937350-4ca5ae06dd4e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmVvbiUyMG1vb24lMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D")',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
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
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              maxWidth: '400px'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <div>
              <Button variant={formState === 0 ? "contained" : ""} onClick={()=>{setFormState(0)}}>
                Sign IN
              </Button>
              <Button variant={formState === 1 ? "contained" : ""} onClick={()=>{ setFormState(1)}}>
                Sign UP
              </Button>
              
            </div>
            <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
              <p>{name}</p>
              {formState === 1 ? <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Full Name"
                name="username"
                autoFocus
                onChange={(e)=> setName(e.target.value)}
              /> : <></>}
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
                onChange={(e)=>setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                id="password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}