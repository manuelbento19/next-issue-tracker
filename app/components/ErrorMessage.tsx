import { Text } from '@radix-ui/themes'
import React from 'react'

type ErroProps = {
    error: string | React.ReactNode
}

export default function ErrorMessage({error}:ErroProps) {
  return error && <Text color='red' as='p'>{error}</Text>
}
