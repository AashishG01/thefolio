'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export type ContactFormState = {
  message: string;
  status: 'success' | 'error';
}

export async function submitContactForm(
  data: ContactFormValues
): Promise<ContactFormState> {
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0]?.[0];
    return {
      message: firstError || 'Invalid input.',
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
