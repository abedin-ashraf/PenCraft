import { Hono } from 'hono';
import { decode, sign, verify } from 'hono/jwt';
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';

//Initializing the Prisma Client
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';


// Create the main Hono app
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  }
}>();

//Routing
app.route("api/v1/user", userRouter);
app.route("api/v1/blog", blogRouter);






export default app;


