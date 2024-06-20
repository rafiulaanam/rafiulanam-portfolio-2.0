import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import { NextRequest, NextResponse } from "next/server";


// get all project list
export const GET = async (req: NextRequest) => {
  const searchQuery = req.nextUrl.searchParams.getAll("search");
  const tag = req.nextUrl.searchParams.get("tag");

  try {
    await connectDB();
    if (searchQuery?.length) {
      const project: object[] = await Blog.find({
        title: { $in: searchQuery },
      });
      return new NextResponse(JSON.stringify(project), { status: 200 });
    } else if (tag) {
      const project: object[] = await Blog.find({
        tag: tag,
      });
      return new NextResponse(JSON.stringify(project), { status: 200 });
    } else {
      const project: object[] = await Blog.find();
      return new NextResponse(JSON.stringify(project), { status: 200 });
    }
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};

// add new project
export const POST = async (req: Request) => {
  const payload = await req.json();
  console.log("🚀 ~ POST ~ payload:", payload)

  try {
    await connectDB();
    // const blog = new Blog(payload);
    const addBlog = await Blog.create(payload);
    return NextResponse.json(addBlog, { status: 201 });
  } catch (error: any) {
    console.error(error.message);
    if (error.name === "ValidationError") {
      return NextResponse.json({ error: error.message }, { status: 422 });
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
