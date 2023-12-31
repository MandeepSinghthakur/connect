import Head from 'next/head';
import Link from 'next/link';
import { LockOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import Typography from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from '../styles/Home.module.css';

export default function Registeration() {
  const handleSubmit =() => {
    console.log('submitted')
  }
  return (
    <div className={styles.container}>
        <Head>
        <title>Connect</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Avatar sx={{m:1, bgcolor:'#9400FF'}}>
          <LockOutlined/>
        </Avatar>
        <h5 className={styles.title}>
         Sign up 
        </h5>

        <div className={styles.grid}>
          <div  className={styles.card}>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ m: 1 }}>
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                  <TextField
                    sx={{ mb: 1 }}
                    marginal="normal"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    autoComplete="given-name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                <TextField
                  sx={{ mb: 1 }}
                  marginal="normal"
                  required
                  fullWidth
                  name="lastName"
                  id="lastName"
                  label="Last Name"
                  autoComplete="family-name"
                />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    sx={{ mb: 1 }}
                    marginal="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                <TextField
                  sx={{ mb: 1 }}
                  marginal="normal"
                  required
                  fullWidth
                  name="password"
                  id="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
              >
                Login
              </Button>

            </Box>
            Already have an account? <Link href="/">Click here</Link> to Login.
          </div>

        </div>
      </main>

      <footer>
          Powered by Connect     
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
