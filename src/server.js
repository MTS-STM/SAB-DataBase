import mongoose from 'mongoose';
import helmet from 'helmet';
import hidePoweredBy from 'hide-powered-by';
import nosniff from 'dont-sniff-mimetype';
import express from 'express';
import cors from 'cors';
import locationsRoutes from './routes/locations.routes';
import appointmentsRoutes from './routes/appointments.routes';
import path from 'path';
import bodyParser from 'body-parser';
require('dotenv').config();

let app = express();
mongoose.connect(process.env.CONNECTION_STRING);

mongoose.connection
  .once('open', () => {
    console.log('connection has been made');
  })
  .on('error', error => {
    console.log(`Connection error: ${error}`);
  });

// Helmet options for production environment
if (process.env.NODE_ENV === 'production') {
  app.use(helmet());
  app.use(hidePoweredBy());
  app.use(nosniff());
}

// Parser for request handlers
app.use(bodyParser.json());

// Enable CORS for all requests
app.use(cors());

// See the request on console
app.use((req, res, next) => {
  console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
  next(); // breaks the pipeline request
});

// Routes or route modules for the app to use
app.use(locationsRoutes);
app.use(appointmentsRoutes);

//handler for 404 - resources not found
app.use((req, res, next) => {
  res.status(404).send('we think you are lost');
});

// Handler for Error 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.sendFile(path.join(__dirname, '../public/500.html'));
});

// Server port
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => console.info(`Server has started on ${PORT}`));
