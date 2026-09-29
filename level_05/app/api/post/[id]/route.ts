import { NextRequest, NextResponse } from "next/server";

interface ParamsType {
    params: Promise<{
        id: string;
    }>;
}

export async function GET(request:NextRequest, {params}:ParamsType){
    const { id } = await params;
    
    return NextResponse.json({
        postId: id
    })
}