import { Hono } from "hono";
import { decode, sign, verify } from 'hono/jwt';

//Initializing the Prisma Client
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { signupInput, signinInput } from "@abedin-ashraf/pencraft-common";


export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();


userRouter.post('/signup', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())


    const body = await c.req.json();

    const { success } = signupInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Input is not correct"
        })
    }

    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                name: body.name
            }
        })
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.text(jwt)
    }
    catch (e) {
        c.status(411);
        return c.json({ message: "Invalid" })
    }
})

userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const { success } = signinInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Input is not correct"
        })
    }

    try {
        const user = await prisma.user.findFirst({
            where: {
                email: body.email,
                password: body.password,
            }
        })
        console.log(user);
        if (!user) {
            c.status(403); // Unauthorized
            return c.json({ message: "User doesn't exist/ Invalid credential" });
        }
        const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
        return c.text(jwt)
    }
    catch (e) {
        c.status(411);
        return c.json({ message: "Invalid" })
    }
})