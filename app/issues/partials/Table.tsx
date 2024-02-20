import { Issue } from '@/app/types'
import { Table } from '@radix-ui/themes'
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
            <Table.Cell>{item.tile}</Table.Cell>
            <Table.Cell>{item.status}</Table.Cell>
            <Table.Cell>{ new Date(item.createdAt).toLocaleDateString()}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
