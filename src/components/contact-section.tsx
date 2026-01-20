'use client';

import React from 'react';
import Link from 'next/link';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContactForm } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';
import { socialLinks } from '@/lib/data';

import SectionHeading from './section-heading';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Mail, Phone } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: '', email: '', message: '' },
  });

  const { formState: { isSubmitting }, handleSubmit } = form;

  const processForm: SubmitHandler<ContactFormValues> = async (data) => {
    const result = await submitContactForm(data);

    if (result.status === 'success') {
      toast({
        title: 'Message Sent!',
        description: result.message,
      });
      form.reset();
    } else if (result.status === 'error') {
      toast({
        title: 'Error',
        description: result.message,
        variant: 'destructive',
      });
    }
  };

  return (
    <section id="contact" className="w-full py-24 sm:py-32 bg-secondary/50">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading>Contact Me</SectionHeading>
        <p className="text-center text-muted-foreground mb-12 -mt-4">
          Have a question, a project idea, or just want to connect? My inbox is always open.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Info */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold font-headline text-white mb-2">Aashish Gupta</h3>
            <p className="text-lg text-accent font-medium mb-6">
              Full-Stack Developer & AI Enthusiast
            </p>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              I'm passionate about building robust web applications and exploring the frontiers of artificial intelligence. I'm currently available for freelance projects and open source collaborations.
            </p>
            <div className="mt-8 space-y-4 text-muted-foreground">
              <a href="mailto:aashishg8160@gmail.com" className="flex items-center gap-3 group">
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-accent/10 transition-colors">
                  <Mail className="h-5 w-5 text-accent" />
                </div>
                <span className="group-hover:text-white transition-colors">aashishg8160@gmail.com</span>
              </a>
            </div>
            <div className="mt-8 flex gap-4">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" aria-label={link.name} className="rounded-full border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all">
                    <link.icon className="h-5 w-5" />
                  </Button>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="glass p-8 rounded-2xl border border-white/10 shadow-2xl">
            <Form {...form}>
              <form onSubmit={handleSubmit(processForm)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-accent/50 focus:ring-accent/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="your.email@example.com" {...field} className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-accent/50 focus:ring-accent/20" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your message..." {...field} rows={6} className="bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-accent/50 focus:ring-accent/20 resize-none" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="text-right">
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg transition-all py-6 text-lg rounded-xl">
                    Send Message
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
