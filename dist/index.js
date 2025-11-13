import express from 'express';
import user from './routes/user.route.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1', user);
const PORT = process.env.PORT ?? 3001;
app.listen(PORT, () => {
    console.log(`Server Started at PORT ${PORT}`);
});
//# sourceMappingURL=index.js.map