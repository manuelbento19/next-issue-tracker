"use client"
import { Button, TextField } from '@radix-ui/themes';
import SimpleMdeReact from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css'
import React from 'react'

export default function Page() {
  return (
    <div className='max-w-sm w-full space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder='Title'/>
        </TextField.Root>
        <SimpleMdeReact placeholder='Description'/>
        <Button>Submit New Issue</Button>
    </div>
  )
}
