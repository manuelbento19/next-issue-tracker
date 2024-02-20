"use client"
import { Button, Callout, TextField } from '@radix-ui/themes';
import 'easymde/dist/easymde.min.css'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import axios from 'axios';
const SimpleMdeReact = dynamic(()=>import('react-simplemde-editor'),{ssr: false})
 
type CreateIssueProps = {
    title: string;
    description: string;
}

export default function Page() {
    const router = useRouter();
    const {register,control,handleSubmit} = useForm<CreateIssueProps>();
    const [error,setError] = useState('')
    
    const createIssue = async(data: CreateIssueProps) => {
        axios.post("/api/issues",data)
            .then(()=>router.push("/"))
            .catch(err=>setError("Error unexpected"))
    }

    return (
        <div className='space-y-2 max-w-sm'>
            {error && <Callout.Root color='red'><Callout.Text>{error}</Callout.Text></Callout.Root>}
            <form onSubmit={handleSubmit(createIssue)} className='w-full space-y-3'>
                <TextField.Root>
                    <TextField.Input {...register("title")} placeholder='Title'/>
                </TextField.Root>
                <Controller name='description' control={control} render={({field})=>(
                    <SimpleMdeReact {...register("description")} placeholder='Description' {...field}/>
                )}/>
                <Button>Submit New Issue</Button>
            </form>
        </div>
    )
}
