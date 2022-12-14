import express from 'express';
import { auth, requiresAuth } from 'express-openid-connect';

import myConfig from 'dotenv';
myConfig.config();

import DEBUG from 'debug';
import superheroRouter from './routes/superheroRoutes.js';

export const debug = DEBUG('server:routes');
debug.enabled = true;
const PORT = 5001;
const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SESSION_SECRET,
  baseURL: process.env.OIDC_BASE_URL,
  clientID: process.env.OIDC_CLIENT_ID,
  issuerBaseURL: process.env.OIDC_ISSUER_BASE_URL,
  routes: {
    login: false,
    callback: '/api/callback'
  }
};
app.use(auth(config)); //middleware
app.use(express.json());

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/api/login', (req, res) =>
  res.oidc.login({ returnTo: '/superheroes' })
);

app.get('app/profile', requiresAuth(), (req, res) => {
  const profile = req.oidc.user;
  res.send(profile);
});

app.get('/slow', (req, res) => {
  console.log('delay for 3 seconds');
  setTimeout(() => {
    let seconds = new Date().getTime();
    res.send({ currentTime: seconds });
  }, 3000);
});
app.use('/api/superhero', superheroRouter);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
