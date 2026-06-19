import express, { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import 'dotenv/config';
import AuthRouter from './Router/AuthRouter';

const PORT: number = parseInt(process.env.PORT!) || 8001;
const API_PREFIX = '/api/v1';
const WHITE_LIST = 'http://localhost:5173,http://localhost:3000';

const app = express();
// const corsOptions: CorsOptions = {
//   origin: function (
//     origin: string | undefined,
//     callback: (err: Error | null, allow?: boolean) => void,
//   ) {
//     if (!origin || WHITE_LIST.split(',').includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };
// app.use(cors(corsOptions));

app.use(express.json());
app.use(`${API_PREFIX}/auth`, AuthRouter);
// app.use(`${API_PREFIX}/articles`, ArticlesRouter);

app.use((err: any, _: Request, res: Response, __: NextFunction) => {
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    message: err?.message,
    data: null,
  });
});

if (process.env.NODE_ENV === 'development') {
  app.listen(PORT, () => {
    console.log(`[⚡APP] Application is running on port: ${PORT}`);
  });
}

export default app;
