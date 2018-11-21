import debug from 'debug';
import { config } from 'dotenv';

import createApp from './app';

config();

const log = debug('app');
const app = createApp();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`Node app is running at localhost: ${port}`);
});
