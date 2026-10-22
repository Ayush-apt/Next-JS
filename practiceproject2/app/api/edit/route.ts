import authOptions from "@/lib/auth";
import uploadOnCloudinary from "@/lib/cloudinary";
import connectDB from "@/lib/db";
import User from "@/model/user.model";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse, userAgent } from "next/server";

export async function POST(req:NextRequest) {
    try {
        await connectDB();
        const session = await getServerSession(authOptions)
        if(!session || !session.user.email || !session.user.id){
            return NextResponse.json(
                {message: "User does not have session"},
                {status:400}
            )
        }

        const formData = await req.formData()
        const name = formData.get("name") as string 
        const file = formData.get("Image") as Blob | null

        let imageUrl = session.user.image ?? null

        if(file){ 
            imageUrl = await uploadOnCloudinary(file)
        }

        const user = await User.findByIdAndUpdate(session.user.id,{
            name, image:imageUrl
        })

        if(!user){
            return NextResponse.json(
                {messgae: "user does not have session"},
                {status: 400}
            )
        }
    }
    catch(error){
        
    }
}