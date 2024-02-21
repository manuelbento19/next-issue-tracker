import { Issue } from '@/app/types'
import { Table } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const IssueTableHeaders = ["#","Title","Status","Created"]

type IssueTableProps = {
  issues: Issue[]
}

export default function IssueTable({issues}:IssueTableProps) {
  return (
  <Table.Root variant='surface'>
      <Table.Header>
        <Table.Row>
          {IssueTableHeaders.map((item,index)=>(
            <Table.ColumnHeaderCell key={index}>{item}</Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {issues && issues.length>0 && issues.map((item,index)=>(
          <Table.Row key={index}>
            <Table.RowHeaderCell>{index+1}</Table.RowHeaderCell>
            <Table.Cell>
            <Link href={`/issues/${item.id}`}>{item.tile}</Link>
            </Table.Cell>
            <Table.Cell>{item.status}</Table.Cell>
            <Table.Cell>{ new Date(item.createdAt).toLocaleDateString("en",{
              day: "2-digit",
              month: "long",
              year: "numeric"
            })}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
