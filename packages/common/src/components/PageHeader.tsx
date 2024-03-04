'use client'

import { Anchor } from '@mantine/core'
import Link from 'next/link'

import { ColorSchemaSwitch } from '@/components/ColorSchemaSwitch'
import { useSafeColorScheme } from '@/hooks'

export const PageHeader = ({
  title,
  actions,
}: {
  title: React.ReactNode
  actions?: React.ReactNode
}) => {
  const colorSchema = useSafeColorScheme('light')

  return (
    <header className="min-h-16 flex flex-col sm:flex-row flex-wrap flex-shrink-0 gap-4 justify-between items-center border-solid border-gray-400 border-b-2 border-0 p-4">
      <Anchor
        component={Link}
        href="/"
        className="text-3xl font-medium"
        c={colorSchema === 'dark' ? 'white' : 'black'}
      >
        {title}
      </Anchor>
      <div className="flex flex-row flex-wrap items-center justify-center sm:justify-end gap-4">
        {actions}
        <ColorSchemaSwitch />
      </div>
    </header>
  )
}
