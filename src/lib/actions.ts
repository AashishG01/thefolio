'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormState = {
  message: string;
  status: 'success' | 'error';
} | {
  message: string;
  status: 'idle';
}

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors[Object.keys(validatedFields.error.flatten().fieldErrors)[0] as string][0] as string,
      status: 'error',
    };
  }

  const { name, email, message } = validatedFields.data;

  // Here you would integrate with an email sending service like Nodemailer, Resend, or SendGrid.
  // For this example, we'll simulate a successful submission.
  console.log('Form data received:', { name, email, message });
  
  try {
    // const { data, error } = await resend.emails.send({ ... });
    // if (error) { throw error }
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      message: 'Thank you for your message! I will get back to you soon.',
      status: 'success',
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      message: 'Something went wrong. Please try again later.',
      status: 'error',
    };
  }
}
