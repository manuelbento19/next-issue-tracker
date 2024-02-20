"use client"
import { Button, Callout, Text, TextField } from '@radix-ui/themes';
import 'easymde/dist/easymde.min.css'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { z } from 'zod';
import { CreateIssueSchema } from '@/app/api/issues/CreateIssueSchema';
import { zodResolver } from '@hookform/resolvers/zod';
const SimpleMdeReact = dynamic(()=>import('react-simplemde-editor'),{ssr: false})
 
type CreateIssueProps = z.infer<typeof CreateIssueSchema>

export default function Page() {
    const [error,setError] = useState('')
    const router = useRouter();
    const {register,control,handleSubmit,formState: {errors}} = useForm<CreateIssueProps>({
        resolver: zodResolver(CreateIssueSchema)
    });
    
    const createIssue = async(data: CreateIssueProps) => {
        axios.post("/api/issues",data)
            .then(()=>router.push("/"))
            .catch(err=>setError("Error unexpected"))
    }

    return (
        <div className='space-y-2 max-w-md'>
            {error && (
                <Callout.Root color='red'>
                    <Callout.Text>{error}</Callout.Text>
                </Callout.Root>
            )}
            <form onSubmit={handleSubmit(createIssue)} className='w-full space-y-3'>
                <TextField.Root>
                    <TextField.Input {...register("title")} placeholder='Title'/>
                </TextField.Root>
                {errors.title && <Text color='red' as='p'>{errors.title.message}</Text>}
                <Controller name='description' control={control} render={({field})=>(
                    <SimpleMdeReact placeholder='Description' {...field}/>
                )}/>
                {errors.description && <Text color='red' as='p'>{errors.description.message}</Text>}
                <Button>Submit New Issue</Button>
            </form>
        </div>
    )
}
