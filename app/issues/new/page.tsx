"use client"
import { Button, TextField } from '@radix-ui/themes';
import SimpleMdeReact from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css'
import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type CreateIssueProps = {
    title: string;
    description: string;
}

export default function Page() {
    const router = useRouter();
    const {register,control,handleSubmit} = useForm<CreateIssueProps>();
    
    const createIssue = async(data: CreateIssueProps) => {
        await fetch("/api/issues",{method: "POST",body: JSON.stringify(data)});
        router.push("/")
    }

    return (
        <form onSubmit={handleSubmit(createIssue)} className='max-w-sm w-full space-y-3'>
            <TextField.Root>
                <TextField.Input {...register("title")} placeholder='Title'/>
            </TextField.Root>
            <Controller name='description' control={control} render={({field})=>(
                <SimpleMdeReact {...register("description")} placeholder='Description' {...field}/>
            )}/>
            <Button>Submit New Issue</Button>
        </form>
    )
}
