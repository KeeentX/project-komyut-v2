import {NextRequest, NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {cookies} from "next/headers";

const prisma = new PrismaClient();
const randomString = () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 6; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
export async function POST(request: NextRequest) {
    const data = await request.json();
    const departure = data.departure;
    const depType = data.depType;
    const destination = data.destination;
    const desType = data.desType;
    const jeepCode = data.routeCode;
    const distance = data.distance;
    const fare = data.fare;
    const UserID = cookies().get('UserID').value;
    const depTypeID = randomString();
    const desTypeID = randomString();
    const RouteID = randomString();
    const PlaceID1 = randomString();
    const PlaceID2 = randomString();
    await prisma.$queryRaw`INSERT INTO "Routes" ("RouteID", "Departure", "Destination", "JeepneyCode", "UserID", "Payment", "Distance") VALUES(${RouteID}, ${departure}, ${destination}, ${jeepCode}, ${UserID}, ${fare}, ${distance})`;
    await prisma.$queryRaw`INSERT INTO "Places" ("PlaceID", "Name", "TypeID") VALUES(${PlaceID1}, ${departure}, ${depTypeID})`;
    await prisma.$queryRaw`INSERT INTO "PlaceTypes" ("TypeID", "TypeName") VALUES(${depTypeID}, ${depType})`;
    await prisma.$queryRaw`INSERT INTO "Places" ("PlaceID", "Name", "TypeID") VALUES(${PlaceID2}, ${destination}, ${desTypeID})`;
    await prisma.$queryRaw`INSERT INTO "PlaceTypes" ("TypeID", "TypeName") VALUES(${desTypeID}, ${desType})`;

    return NextResponse.json(request.json());
}