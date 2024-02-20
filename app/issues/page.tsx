import { Button, Table } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import { Issue } from '../types';
import IssueTable from './partials/Table';

export default async function Page() {
  const request = await fetch('http://localhost:3000/api/issues');
  const data:Issue[] = await request.json();

  return (
    <div className='space-y-4'>
      <Button><Link href="/issues/new">New Issue</Link></Button>
      <IssueTable issues={data}/>
    </div>
  )
}
