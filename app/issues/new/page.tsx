"use client"
import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

export default function Page() {
  return (
    <div className='max-w-sm w-full space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder='Title'/>
        </TextField.Root>
        <TextArea placeholder='Description'/>
        <Button>Submit New Issue</Button>
    </div>
  )
}