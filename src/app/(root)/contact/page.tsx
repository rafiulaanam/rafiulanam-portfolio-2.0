"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Email must be valid.",
  }),
  subject: z.string().min(4, {
    message: "Subject must be at least 4 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});
export default function Contact() {
  const { toast } = useToast()
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },  
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    console.log(data);
    console.log(response);
    if (response.status !== 200) {
      throw new Error("Failed to send mail");
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Failed to send mail.",
        
      })
    }
    toast({
      description: "Your message has been sent.",
    })
   
  }

  return (
    <div className="mx-auto max-w-xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <Card className="">
            <CardHeader>
              <CardTitle className="text-xl">Contact Me</CardTitle>
              <CardDescription>
                Enter your information to email me
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Name" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid gap-2">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Email" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Write your subject..."
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type your message..."
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

              
                <Button type="submit" className="w-full">
                 Submit
                </Button>
                <Button  type="reset"  variant="outline" className="w-full">
                  Reset
                </Button>
              </div>
              
            </CardContent>
          </Card>
        </form>
      </Form>
    </div>
  );
}
