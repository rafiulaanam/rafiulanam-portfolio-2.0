"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image"
import {
  File,
   SquarePen ,
  ListFilter,
  PlusCircle,
  Trash,
 
} from "lucide-react"

import { Badge } from "@/components/ui/badge"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Link from "next/link";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useDeleteProMutation, useGetProItemsQuery } from "@/redux/features/project/projectApi";
import Loading from "@/components/Loading";


export default function Project() {
  const [deletePro] = useDeleteProMutation();
  
  const { data: getProjectsFromDB, isLoading } = useGetProItemsQuery(undefined);


  return (
<section>
{ !getProjectsFromDB?.length ?
   
    <main className="flex flex-1 flex-col  gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
          </div>
          <div
            className="flex flex-1  items-center justify-center rounded-lg border border-dashed shadow-sm" x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
              {isLoading ? <Loading loadingText="Loading"/> : "You have no Projects"}
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Link href="/dashboard/project/new">
              
              <Button className="mt-4">Add Product</Button>
              </Link>
            </div>
          </div>
        </main>
:
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Tabs defaultValue="all">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="draft">Draft</TabsTrigger>
                <TabsTrigger value="archived" className="hidden sm:flex">
                  Archived
                </TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-8 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      Active
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Archived
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-8 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Link href="/dashboard/project/new">
                
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Product
                  </span>
                </Button>
                </Link>
              </div>
            </div>
            <TabsContent value="all">
              <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                  <CardTitle>Inventory</CardTitle>
                  <CardDescription>
                    Manage your project and view their details.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="hidden w-[100px] sm:table-cell">
                          <span className="sr-only">Image</span>
                        </TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead className="hidden md:table-cell">
                          Preview Link
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Github Link
                        </TableHead>
                        <TableHead className="hidden md:table-cell">
                          Created at
                        </TableHead>
                        <TableHead>
                          <span className="sr-only">Actions</span>
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                   
                    { isLoading ? <Loading loadingText="Loading"/>
                    :
                    <TableBody>
                    {
                      getProjectsFromDB?.map((item:any, i:any)=><TableRow key={i}>
                      <TableCell className="hidden sm:table-cell">
                        <Image
                          alt="Product image"
                          className="aspect-square rounded-md object-cover w-14"
                          height="500"
                          src={item.coverImage}
                          width="500"
                        />
                      </TableCell>
                      <TableCell className="font-medium">
                        {item.title}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{item.category}</Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <Link href={item.liveLink}>
                        
                        <Button variant="link">Preview</Button>
                        </Link>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                      <Link href={item.githubLink}>
                        
                        <Button variant="link">Github</Button>
                        </Link>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                     Date 22
                       {/* {Date(item.createdAt).toLocaleDateString()} */}
                      </TableCell>
                      <TableCell>
                      <div className="flex gap-4">
                      <Link href={`/dashboard/project/edit/${item._id}`}>< SquarePen  /></Link>
                      
                      <Dialog>
    <DialogTrigger asChild>
    
    <Trash className="cursor-pointer"/>
    </DialogTrigger>
    <DialogContent  className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Delete </DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when you're done.
        </DialogDescription>
      </DialogHeader>
   
      <DialogFooter>
      <DialogClose asChild>
          <Button type="button" variant="secondary">
            Close
          </Button>
        </DialogClose>
        <DialogClose asChild>

        <Button onClick={()=>deletePro(item._id)}>Yes</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
                      </div>
                        {/* <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              aria-haspopup="true"
                              size="icon"
                              variant="ghost"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem><Link href={`/dashboard/project/edit/${item._id}`}>Edit</Link></DropdownMenuItem>
                            <DropdownMenuItem>
                          
                             </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu> */}
                      </TableCell>
                    </TableRow>)
                    }
                    
                   
                  </TableBody>
                   }
                  </Table>
                </CardContent>
                <CardFooter>
                  <div className="text-xs text-muted-foreground">
                    Showing <strong>1-10</strong> of <strong>32</strong>{" "}
                    products
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
}
</section>
    
  )
}
