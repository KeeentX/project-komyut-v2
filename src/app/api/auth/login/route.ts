import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import bcrypt from "bcrypt";
import {encodeText} from "next/dist/server/stream-utils/encode-decode";
import {cookies} from "next/headers";

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    let email, password = '', responseType = 0;
    await request.json().then((data) => {
        email = data.email;
        password = data.password;
    })


    const exist = (await prisma.$queryRaw`SELECT "UserID" FROM "Users" WHERE "Email"=${email}`) != '';
    if(exist) {
        const dbPassword = await prisma.$queryRaw`SELECT "Password" FROM "Users" WHERE "Email"=${email}`;
        const match = await bcrypt.compare(password, dbPassword[0]['Password']);
        if(match) {
            responseType = 1;
            const UserID = (await prisma.$queryRaw`SELECT "UserID" FROM "Users" WHERE "Email"=${email}`)[0].UserID;
            cookies().set('UserID', UserID);
        }
    } else {
        console.log("Not exist");
        responseType = 0;
    }
    return NextResponse.json({responseType: responseType});
}