import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

export default () => {
  const app = express();

  app.use(morgan('tiny'));
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.send('Hello');
  });
  app.get('/users', (req, res) => {
    res.json([
      {
        id: 1, firstName: 'Bob', lastName: 'Smith', email: 'bob@gmail.com',
      },
      {
        id: 2, firstName: 'Tammy', lastName: 'Norton', email: 'tammy@gmail.com',
      },
      {
        id: 3, firstName: 'Tina', lastName: 'Lee', email: 'tina@gmail.com',
      },
    ]);
  });
  return app;
};
