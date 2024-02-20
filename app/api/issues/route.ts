import { NextRequest, NextResponse } from "next/server";
import prisma from  "@/prisma/client"
import { CreateIssueSchema } from "./CreateIssueSchema";

export async function POST(request:NextRequest) {
    try{
        const body = await request.json();
        const validation = CreateIssueSchema.safeParse(body)
    
        if(!validation.success)
        return NextResponse.json(validation.error.format(),{status: 400})
    
        const result = await prisma.issue.create({
            data: {
                tile: body.title,
                description: body.description
            }
        })
        return NextResponse.json(result,{status: 201})
    }
    catch(error){
        return NextResponse.json(error,{status: 400})

    }
}