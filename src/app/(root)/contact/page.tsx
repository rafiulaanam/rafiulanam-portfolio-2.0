"use client";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon, TwitterIcon } from "lucide-react"


import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useToast } from "@/components/ui/use-toast"
import Link from "next/link";

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
 function Contact() {
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-5">
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
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p className="text-muted-foreground">Get in touch with us for more information.</p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-6 w-6 text-primary" />
            <p>Sylhet, Bangladesh</p>
          </div>
          <div className="flex items-center gap-2">
            <PhoneIcon className="h-6 w-6 text-primary" />
            <p>+8801701916034</p>
          </div>
          <div className="flex items-center gap-2">
            <MailIcon className="h-6 w-6 text-primary" />
            <p>rafiulaanam@gmail.com</p>
          </div>
          <div className="flex items-center gap-4">
      <Link
        href="https://x.com/rafiulaanam" target="_blank"
        className="inline-flex items-center justify-center rounded-full bg-[#1DA1F2] text-white w-10 h-10 transition-colors hover:bg-[#0c85d0]"
        prefetch={false}
      >
        <TwitterIcon className="w-5 h-5" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link
        href="https://facebook.com/rafiulaanam" target="_blank"
        className="inline-flex items-center justify-center rounded-full bg-[#1877F2] text-white w-10 h-10 transition-colors hover:bg-[#1163c4]"
        prefetch={false}
      >
        <FacebookIcon className="w-5 h-5" />
        <span className="sr-only">Facebook</span>
      </Link>
      <Link
        href="https://www.instagram.com/rafiulaanam/" target="_blank"
        className="inline-flex items-center justify-center rounded-full bg-[#E1306C] text-white w-10 h-10 transition-colors hover:bg-[#b91b54]"
        prefetch={false}
      >
        <InstagramIcon className="w-5 h-5" />
        <span className="sr-only">Instagram</span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/rafiulaanam/" target="_blank"
        className="inline-flex items-center justify-center rounded-full bg-[#0A66C2] text-white w-10 h-10 transition-colors hover:bg-[#08508e]"
        prefetch={false}
      >
        <LinkedinIcon className="w-5 h-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        href="https://github.com/rafiulaanam" target="_blank"
        className="inline-flex items-center justify-center rounded-full bg-[#24292F] text-white w-10 h-10 transition-colors hover:bg-[#1c2126]"
        prefetch={false}
      >
        <GithubIcon className="w-5 h-5" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href="mailto:rafiulaanam@gmail.com"
        className="inline-flex items-center justify-center rounded-full bg-[#D14836] text-white w-10 h-10 transition-colors hover:bg-[#ac3a2d]"
        prefetch={false}
      >
        <MailIcon className="w-5 h-5" />
        <span className="sr-only">Gmail</span>
      </Link>
      <Link
        href="https://wa.me/8801701916034?text=Hello%2C%20Thanks%20for%20messaging%20me.%20How%20can%20I%20help%20you%20as%20a%20Full-stack%20Web%20Developer" target="_blank"
        className="inline-flex items-center justify-center rounded-full bg-[#25D366] text-white w-10 h-10 transition-colors hover:bg-[#1da851]"
        prefetch={false}
      >
        <PhoneIcon className="w-5 h-5" />
        <span className="sr-only">WhatsApp</span>
      </Link>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

