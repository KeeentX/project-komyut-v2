import {Prisma, PrismaClient} from "@prisma/client";
import RegisterForm from "./components/register_form";

const prisma = new PrismaClient();


export default async function Register() {
    return (
        <main>
            <RegisterForm/>
        </main>
    )
}