import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(req){
    const {title, description} = await req.json();
    await connectMongoDB();
    await Topic.create({title, description});
    return NextResponse.json({message: "Topic Created"}, {status: 201});
}

export async function GET(){
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({topics}, {status: 200});
}
export async function DELETE(req){
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    // await Topic.deleteOne({ "_id" : ObjectId(id) });
    return NextResponse.json({message: "Topic Deleted"}, {status: 200});
}

// export async function handler (req, res) {
//     const { method } = req;
  
//     await connectMongoDB();
  
//     switch (method) {
//       case 'GET':
//         try {
//           const topics = await Topic.find({})
//           res.status(200).json({ success: true, data: topics })
//         } catch (error) {
//           res.status(400).json({ success: false })
//         }
//         break
//       case 'POST':
//         try {
//             const {title, description} = await req.json();
//             await Topic.create({title, description});
//             res.status(201).json({ success: true})
//         } catch (error) {
//           res.status(400).json({ success: false })
//         }
//         break
//         case 'DELETE':
//         try {
//             const id = req.nextUrl.searchParams.get("id");
//             await Topic.findByIdAndDelete(id);
//             res.status(201).json({ success: true})
//         } catch (error) {
//           res.status(400).json({ success: false })
//         }
//         break
//       default:
//         res.status(400).json({ success: false })
//         break
//     }
//   }