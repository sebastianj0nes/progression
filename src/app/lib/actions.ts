'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// Form Validation Schema
const FormSchema = z.object({
    id: z.string(),
    date: z.string(),
    feelings: z.string(),
    goals: z.string(),
    accomplishments: z.string(),
    score: z.string()
});

const CreateEntry = FormSchema.omit({ id: true});

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

