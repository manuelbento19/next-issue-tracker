"use client"
import { Status } from '@prisma/client';
import { Select } from '@radix-ui/themes'
import React from 'react'

const status: { label: string; value?: Status }[] = [
    { label: 'All' },
    { label: 'Open', value: 'OPEN' },
    { label: 'In Progress', value: 'IN_PROGRESS' },
    { label: 'Closed', value: 'CLOSED' },
];

export default function FilterComponent() {
  return (
    <Select.Root defaultValue=''>
        <Select.Trigger placeholder='Filter By Status'/>
        <Select.Content>
            {status.map((item) => (
                <Select.Item key={item.value} value={item.value || 'ALL'}>
                    {item.label}
                </Select.Item>
            ))}
        </Select.Content>
    </Select.Root>
  )
}
