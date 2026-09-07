import express from 'express';
import router from './routes/index';

const app = express();
const dbPath = process.argv[2];

app.set('dbPath', dbPath);
app.use(router);

app.listen(1245);

export default app;
