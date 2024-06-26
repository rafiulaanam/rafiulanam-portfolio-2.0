"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import {
  ChevronLeft,
  Upload
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Link from 'next/link'

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
// import CustomEditor from '@/components/CustomEditor'
import { uploadImage, uploadImage2 } from '@/assets'
import dynamic from 'next/dynamic'
import TechUsed, { Tag } from '@/components/TechUsed'
import { CloudImage } from '@/components/CloudImage'
import { useRouter } from 'next/navigation'
import { useCreateProMutation } from '@/redux/features/project/projectApi'
import { useCreateBlogMutation } from '@/redux/features/blog/blogApi'
const CustomEditor = dynamic(()=>import('@/components/CustomEditor'),{ssr:false})
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),

 
  category: z.string(),
 
});

export default function NewProject() {
  const router = useRouter()
  const { toast } = useToast()
  const [content,setContent] = useState('')
  const [techUsed, setTechUsed] = useState<Tag[]>([]);
  const [image1, setImage1] =useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  
  const [createBlog, {data:result}] = useCreateBlogMutation();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ""
     
      
    },  
  });
  
const submitImage = async (file:any) =>{
  const preset = process.env.NEXT_PUBLIC_PRESET;
  
  if (file) {
    const form_data1 = new FormData();
    if (preset) {
      form_data1.append('upload_preset', preset);
    }
    form_data1.append('file', file);
    const imageUrl1:any = await CloudImage(form_data1);
    // setImageUrl1(imageUrl1);
    return imageUrl1
  }
}




  async function onSubmit(values: z.infer<typeof formSchema>) {
   

const img1 = await submitImage(image1)
const img2 = await submitImage(image2)
      const data = {
        title:values?.title,
        description:content,
        coverImage:img1

      }

      
      await createBlog(data).then(()=>{
        toast({
          description: "Blog successfully created.",
        })
    router.push("/dashboard/blog")
      })
      
    if (!result ) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Failed to send mail.",
        
      })
      throw new Error("Failed to send mail");
    }
   
   
  }
  return (
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
  <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">

  <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
            <Link href="/dashboard/project">
             <Button variant="outline" size="icon" className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
             
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Add A New Project to your Portfolio
              </h1>
              <Badge variant="outline" className="ml-auto sm:ml-0">
                New
              </Badge>
              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                  Discard
                </Button>
                <Button type="submit" size="sm">Save Product</Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                    <CardDescription>
                      Write all information about your project
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                      <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <FormControl>
                            <Input placeholder="Project Title" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                      </div>
                    
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Card>

                        <CustomEditor setContent={setContent} content={content} />
                        </Card>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
             
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Product Category</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                      <FormField
                      control={form.control}
                      name="category"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Category</FormLabel>
                          <FormControl>
                           <Select  onValueChange={field.onChange} defaultValue={field.value}>
                          <SelectTrigger
                            id="category"
                            aria-label="Select category"
                          >
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="personal">Personal</SelectItem>
                            <SelectItem value="professional">
                              Professional
                            </SelectItem>
                            <SelectItem value="assignment">
                              Assignment
                            </SelectItem>
                          </SelectContent>
                        </Select>
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card
                  className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                >
                  <CardHeader>
                    <CardTitle>Cover Image</CardTitle>
                    <CardDescription>
                     Upload a ScreenShort of your website Hero Section
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                       <Image
                        alt="Cover image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="300"
                        src={image1 ? URL.createObjectURL(image1): uploadImage}
                        
                        width="300"
                      />
                      <div className="grid grid-cols-3 gap-2">
                      
                       <Label htmlFor="picture1"> <div  className="flex aspect-square w-full items-center cursor-pointer justify-center rounded-md border border-dashed">
                          <Upload className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">Upload</span>
                          
                          <Input id='picture1' type='file' onChange={(e:any) =>setImage1(e.target.files[0])} className='hidden' />
                        </div></Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              
              
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm">Save Product</Button>
            </div>
          </div>
        </main>
      </form>
        </Form>
        
  )
}
