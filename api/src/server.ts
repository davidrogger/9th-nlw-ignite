import express from 'express';
import adRoute from './routes/ad.route';
import gameRoute from './routes/game.route';

const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.json());

app.use('/games', gameRoute);
app.use('/ads', adRoute)

app.listen(PORT, () => console.log(`Listening at port ${PORT}`));