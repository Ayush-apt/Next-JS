import { NextRequest, NextResponse } from "next/server";

// NextRespons, NextRequest 

export async function GET(){
    return NextResponse.json({
        name: "Ashu",
        age: 19
    })
}

export async function POST(request:NextRequest){
    let {name, age} = await request.json()
    return NextResponse.json({
        name, age
    })
}