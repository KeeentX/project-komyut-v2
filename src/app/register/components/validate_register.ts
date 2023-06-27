import bcrypt from "bcrypt";
import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();
const randomString = () => {
    const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 12; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
export default async function register(emailInput, passwordInput, confirm_password) {

}