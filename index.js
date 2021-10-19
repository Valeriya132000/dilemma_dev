const express = require('express');
const app = express();
const PORT = process.env.PORT || 3834;
const userRouter = require('./routers/user.router');

app.use(express.json());
app.use('/api', userRouter);

app.listen(PORT, () => console.log(`server on port: ${PORT}`));