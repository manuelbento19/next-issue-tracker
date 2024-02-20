import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <div>
      <Button><Link href="/issues/new">New Issue</Link></Button>
    </div>
  )
}
