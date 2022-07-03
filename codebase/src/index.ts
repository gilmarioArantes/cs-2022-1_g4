import express, { Request, Response } from "express";

const app = express();

app.get('/', (_req: Request, res: Response) => {
  return res.send('first route');
})

app.listen(3001, () => console.log('Server is up!'));