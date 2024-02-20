import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from  "@/prisma/client"

const CreateIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
})

export async function POST(request:NextRequest) {
    try{
        const body = await request.json();
        const validation = CreateIssueSchema.safeParse(body)
    
        if(!validation.success)
        return NextResponse.json(validation.error.errors,{status: 400})
    
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