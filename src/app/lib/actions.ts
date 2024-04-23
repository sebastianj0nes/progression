'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { signIn } from '@/auth';
import { AuthError } from 'next-auth';
import { User } from "./definitions";
import bcrypt from 'bcrypt';


// Form Validation Schema
const FormSchema = z.object({
    id: z.string(),
    date: z.string(),
    feelings: z.string(),
    goals: z.string(),
    accomplishments: z.string(),
    score: z.string()
});

const SignupSchema = z.object({
    id: z.string(),
    name : z.string(),
    email : z.string(),
    password : z.string(),
    signupDate : z.string()
})

const CreateEntry = FormSchema.omit({ id: true});
const CreateUser = SignupSchema.omit({ id:true});

export async function createEntry(entryData: FormData) {

    const { date, feelings, goals, score, accomplishments } = CreateEntry.parse({
        date: entryData.get('date'),
        feelings: entryData.get('feelings'),
        goals: entryData.get('goals'),
        accomplishments: entryData.get('accomplishments'),
        score: entryData.get('score')
    })

    console.log("Creating entry in db...");
    await sql`
    INSERT INTO entries (date, feelings, goals, accomplishments, score)
    VALUES (${date}, ${feelings}, ${goals}, ${accomplishments}, ${score})
  `;
    console.log("Creation Done");

    revalidatePath('/newentry');
    // Come back to when finished further logic -   redirect('/dashboard/invoices');
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}

export async function signUpUser(userData: FormData){

    console.log("Initiating signupUser func...");

    const {name, email, password } = CreateUser.parse({
        name : userData.get("name"),
        email : userData.get("email"),
        password : userData.get("password"),
        signupDate : Date.toString()
    })

    const hashedPassword = await bcrypt.hash(password, 10);


    // Before signing up a user ensure that user doesn't already exist
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;

    const date = new Date();
    const currentDate = date.toDateString();

    if (user.rows.length >= 1){
        console.log("User already exists!");
        return
    } else {
        console.log("User can be signed up");
        try{
            await sql<User>`INSERT INTO users (name, email, password, signup_date) VALUES (${name}, ${email}, ${hashedPassword}, ${currentDate})`;
            console.log(`Inserting ${name}, ${email}, ${password} into DB as a new user`);
        }
        catch (error) {
            console.log(error)

        }

    }


}

