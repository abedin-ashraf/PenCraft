import { Hono } from "hono";
import { decode, sign, verify } from 'hono/jwt';

import { createBlogInput, updateBlogInput } from "@abedin-ashraf/pencraft-common";

//Initializing the Prisma Client
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
    }
}>();

blogRouter.use("/*", async (c, next) => {
    const authHeader = c.req.header("authorization") || "";
    if (authHeader === "") {
        c.status(401);
        return c.json({
            error: "Unauthorized"
        })
    }
    try {
        const user = await verify(authHeader, c.env.JWT_SECRET);
        if (!user) {
            c.status(403);
            return c.json({
                message: "You are not logged in"
            })
        }
        c.set("userId", user.id);
        await next();
    }
    catch (error) {
        c.status(401);
        return c.json({
            error: "Unauthorized"
        })
    }
    //Extract userId
    //pass it down to the route handler
});

blogRouter.post('/post', async (c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const { success } = createBlogInput.safeParse(body);
    if (!success) {
        c.status(411);
        return c.json({
            message: "Input is not correct"
        })
    }

    const authorId = c.get("userId");

    const blog = await prisma.post.create({
        data: {
            tittle: body.title,
            content: body.content,
            authorId: authorId,
        }
    })

    return c.json({ id: blog.id });
})

blogRouter.put('/put', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const body = await c.req.json();
        const { success } = updateBlogInput.safeParse(body);
        if (!success) {
            c.status(411);
            return c.json({
                message: "Input is not correct"
            })
        }

        const userId = c.get('userId');

        const blog = await prisma.post.update({
            where: {
                id: body.id,
                authorId: userId,
            },
            data: {
                tittle: body.title,
                content: body.content,
            }
        })

        return c.json({ id: blog.id });
    } catch (err) {
        c.status(403);
        return c.json({ message: err });
    }
})

//Should add pagination -> Task
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const userId = c.get('userId');

    const blogs = await prisma.post.findMany({})

    return c.json({ blogs });
})

blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();

    const blog = await prisma.post.findFirst({
        where: {
            id: id,
        }
    })

    return c.json({ blog });




})



