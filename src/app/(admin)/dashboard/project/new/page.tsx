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
import { CloudImage } from '@/components/CloudImage'
import { useRouter } from 'next/navigation'
import { useCreateProMutation } from '@/redux/features/project/projectApi'

import { FRAMEWORKS } from '@/utils/techused'
import { Framework } from '@/interface/techUsed'
import { TechUsed } from '@/components/TechUsed'
import { TechUsed2 } from '@/components/TechUsed2'
const CustomEditor = dynamic(()=>import('@/components/CustomEditor'),{ssr:false})
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  overview: z.string().min(10, {
    message: "Overview must be at least 10 characters.",
  }),
  videoLink: z.string().min(10, {
    message: "Youtube Video must be at least 10 characters.",
  }),
  liveLink: z.string().min(10, {
    message: "Preview Link must be at least 10 characters.",
  }),
  githubLink: z.string().min(10, {
    message: "Github Link must be at least 10 characters.",
  }),
 
  category: z.string(),
 
});

export default function NewProject() {
  const router = useRouter()
  const { toast } = useToast()
  const [content,setContent] = useState('')
  const [techUsed, setTechUsed] = React.useState<Framework[]>([FRAMEWORKS[0]]);
  const [image1, setImage1] =useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);
  
  const [createPro, {data:result}] = useCreateProMutation();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      overview: "",
      videoLink: "",
      liveLink: "",
      githubLink: "",
      category: "",
      
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
        ...values,
        description:content,
        coverImage:img1,
        fullPageImage:img2,
        techUsed,

      }

      
      await createPro(data).then(()=>{
        toast({
          description: "Project successfully created.",
        })
    router.push("/dashboard/project")
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
                      <FormField
                      control={form.control}
                      name="overview"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Overview</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Project Overview" {...field} />
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
                {/* <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Stock</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">SKU</TableHead>
                          <TableHead>Stock</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead className="w-[100px]">Size</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow>
                          <TableCell className="font-semibold">
                            GGPC-001
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="stock-1" className="sr-only">
                              Stock
                            </Label>
                            <Input
                              id="stock-1"
                              type="number"
                              defaultValue="100"
                            />
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="price-1" className="sr-only">
                              Price
                            </Label>
                            <Input
                              id="price-1"
                              type="number"
                              defaultValue="99.99"
                            />
                          </TableCell>
                          <TableCell>
                            <ToggleGroup
                              type="single"
                              defaultValue="s"
                              variant="outline"
                            >
                              <ToggleGroupItem value="s">S</ToggleGroupItem>
                              <ToggleGroupItem value="m">M</ToggleGroupItem>
                              <ToggleGroupItem value="l">L</ToggleGroupItem>
                            </ToggleGroup>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold">
                            GGPC-002
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="stock-2" className="sr-only">
                              Stock
                            </Label>
                            <Input
                              id="stock-2"
                              type="number"
                              defaultValue="143"
                            />
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="price-2" className="sr-only">
                              Price
                            </Label>
                            <Input
                              id="price-2"
                              type="number"
                              defaultValue="99.99"
                            />
                          </TableCell>
                          <TableCell>
                            <ToggleGroup
                              type="single"
                              defaultValue="m"
                              variant="outline"
                            >
                              <ToggleGroupItem value="s">S</ToggleGroupItem>
                              <ToggleGroupItem value="m">M</ToggleGroupItem>
                              <ToggleGroupItem value="l">L</ToggleGroupItem>
                            </ToggleGroup>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className="font-semibold">
                            GGPC-003
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="stock-3" className="sr-only">
                              Stock
                            </Label>
                            <Input
                              id="stock-3"
                              type="number"
                              defaultValue="32"
                            />
                          </TableCell>
                          <TableCell>
                            <Label htmlFor="price-3" className="sr-only">
                              Stock
                            </Label>
                            <Input
                              id="price-3"
                              type="number"
                              defaultValue="99.99"
                            />
                          </TableCell>
                          <TableCell>
                            <ToggleGroup
                              type="single"
                              defaultValue="s"
                              variant="outline"
                            >
                              <ToggleGroupItem value="s">S</ToggleGroupItem>
                              <ToggleGroupItem value="m">M</ToggleGroupItem>
                              <ToggleGroupItem value="l">L</ToggleGroupItem>
                            </ToggleGroup>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </CardContent>
                  <CardFooter className="justify-center border-t p-4">
                    <Button size="sm" variant="ghost" className="gap-1">
                      <PlusCircle className="h-3.5 w-3.5" />
                      Add Variant
                    </Button>
                  </CardFooter>
                </Card> */}
                <Card x-chunk="dashboard-07-chunk-2">
                  <CardHeader>
                    <CardTitle>Project TechStack</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="">
                      <div className="">
                        
                        <TechUsed techUsed={techUsed} setTechUsed={setTechUsed}/>
                      </div>
{/* <TechUsed2/> */}
                      {/* <div className="grid gap-3">
                        <Label htmlFor="subcategory">
                          Subcategory (optional)
                        </Label>
                        <Select>
                          <SelectTrigger
                            id="subcategory"
                            aria-label="Select subcategory"
                          >
                            <SelectValue placeholder="Select subcategory" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="t-shirts">T-Shirts</SelectItem>
                            <SelectItem value="hoodies">Hoodies</SelectItem>
                            <SelectItem value="sweatshirts">
                              Sweatshirts
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div> */}
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
                <Card
                  className="overflow-hidden" x-chunk="dashboard-07-chunk-4"
                >
                  <CardHeader>
                    <CardTitle>Full Page Image</CardTitle>
                    <CardDescription>
                     Upload a ScreenShort of your website Home Section
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-2">
                       <Image
                        alt="Cover image"
                        className="aspect-square w-full rounded-md object-cover"
                        height="300"
                        src={image2 ? URL.createObjectURL(image2): uploadImage2}
                        
                        width="300"
                      />
                      <div className="grid grid-cols-3 gap-2">
                      
                       <Label htmlFor="picture2"> <div  className="flex aspect-square w-full items-center cursor-pointer justify-center rounded-md border border-dashed">
                          <Upload className="h-4 w-4 text-muted-foreground" />
                          <span className="sr-only">Upload</span>
                          
                          <Input id='picture2' type='file' onChange={(e:any) =>setImage2(e.target.files[0])} className='hidden' />
                        </div></Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card x-chunk="dashboard-07-chunk-5">
                  <CardHeader>
                    <CardTitle>Project Links</CardTitle>
                    <CardDescription>
                     Attach all links here.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                  <FormField
                      control={form.control}
                      name="liveLink"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Live Link</FormLabel>
                          <FormControl>
                            <Input placeholder="Project Live Preview link" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                      control={form.control}
                      name="githubLink"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Github Link</FormLabel>
                          <FormControl>
                            <Input placeholder="Project Github Preview link" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  <FormField
                      control={form.control}
                      name="videoLink"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Overview Video Link</FormLabel>
                          <FormControl>
                            <Input placeholder="Project Youtube video link" {...field} />
                          </FormControl>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
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
