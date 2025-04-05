
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Check, Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  company: z.string().optional(),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
  services: z.array(z.string()).optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must agree to the terms.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

const servicesOptions = [
  { id: 'meta', label: 'Meta Advertising' },
  { id: 'google', label: 'Google Ads' },
  { id: 'local', label: 'Local Services' },
  { id: 'premium', label: 'Premium Networks' },
  { id: 'organic', label: 'Organic Growth' },
  { id: 'analytics', label: 'Analytics & Insights' },
];

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
      services: [],
      consent: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', data);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: 'Success!',
      description: 'Your message has been sent. We will contact you shortly.',
    });
  };

  return (
    <div className="max-w-xl mx-auto">
      {isSubmitted ? (
        <div className="text-center p-8">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-gradient">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-advizall-white mb-4">Message Received!</h3>
          <p className="text-advizall-silver-text mb-6">
            Thank you for reaching out. Our team will review your information and get back to you within 24 hours.
          </p>
          <Button
            onClick={() => setIsSubmitted(false)}
            className="bg-blue-gradient hover:opacity-90 text-white font-medium px-6 py-2"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-advizall-silver-text">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        className="bg-advizall-darkGray/50 border-advizall-silver-dark/20 focus:border-advizall-vividBlue-light"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-advizall-silver-text">Company (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your Company"
                        className="bg-advizall-darkGray/50 border-advizall-silver-dark/20 focus:border-advizall-vividBlue-light"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-advizall-silver-text">Email</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="bg-advizall-darkGray/50 border-advizall-silver-dark/20 focus:border-advizall-vividBlue-light"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-advizall-silver-text">Phone (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="(123) 456-7890"
                        className="bg-advizall-darkGray/50 border-advizall-silver-dark/20 focus:border-advizall-vividBlue-light"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="services"
              render={() => (
                <FormItem>
                  <FormLabel className="text-advizall-silver-text">Interested Services</FormLabel>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    {servicesOptions.map((service) => (
                      <FormField
                        key={service.id}
                        control={form.control}
                        name="services"
                        render={({ field }) => {
                          return (
                            <FormItem
                              key={service.id}
                              className="flex flex-row items-start space-x-3 space-y-0"
                            >
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(service.id)}
                                  onCheckedChange={(checked) => {
                                    const updatedValue = checked
                                      ? [...(field.value || []), service.id]
                                      : field.value?.filter((value) => value !== service.id) || [];
                                    field.onChange(updatedValue);
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="text-advizall-silver-text cursor-pointer">
                                {service.label}
                              </FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-advizall-silver-text">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your project or ask us a question..."
                      className="min-h-[120px] bg-advizall-darkGray/50 border-advizall-silver-dark/20 focus:border-advizall-vividBlue-light"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-advizall-silver-text">
                      I agree to the privacy policy and allow Advizall to contact me via email.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-gradient hover:opacity-90 text-white font-semibold py-6 text-lg rounded-md shadow-md hover:shadow-glow transition-all duration-300"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default ContactForm;
