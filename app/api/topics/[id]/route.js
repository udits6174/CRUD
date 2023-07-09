import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Topic from "@/models/topic";

export async function PUT(request, { params }) {
  const { id } = params;
  const { title, description } = await request.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
}
  
export async function GET(req, {params}){
    const {id} = params;
    await connectMongoDB();
    const topic = await Topic.findOne({_id: id});
    return NextResponse.json({topic}, {status: 200});
}

