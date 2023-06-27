import {NextRequest, NextResponse} from "next/server";
import theme from "tailwindcss/defaultTheme";
import {PrismaClient} from "@prisma/client";
import bcrypt from "bcrypt";

const randomString = () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 12; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

export async function POST(request: NextRequest) {
    const prisma = new PrismaClient();
    let email, password, confirm_password = '', responseType;
    await request.json().then((data) => {
        email = data.email;
        password = data.password;
        confirm_password = data.confirm_password;
    });

    // Check if already registered
    const isRegistered = (await prisma.$queryRaw`SELECT "UserID" FROM "Users" WHERE "Email"=${email}`) != '';
    if(isRegistered) {
        responseType = -1;
    } else {
        if(password === confirm_password) {
            const UserID = randomString();
            password = await bcrypt.hash(password, 10);
            await prisma.$queryRaw`INSERT INTO "Users" ("UserID", "Email", "Password") VALUES(${UserID}, ${email}, ${password})`;
            responseType = 1;
        } else {
            responseType = 0;
        }
    }

    return NextResponse.json({responseType: responseType})
}