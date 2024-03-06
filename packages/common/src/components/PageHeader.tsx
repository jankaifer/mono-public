import { Anchor, Text } from '@mantine/core'
import Link from 'next/link'

import { ColorSchemaSwitch } from '@/components/ColorSchemaSwitch'
import { config } from '@/config'

export const PageHeader = ({
  title,
  madeByMe = false,
  actions,
}: {
  title: React.ReactNode
  madeByMe?: boolean
  actions?: React.ReactNode
}) => {
  return (
    <header className="min-h-16 flex flex-col sm:flex-row flex-wrap flex-shrink-0 gap-4 justify-between items-center border-solid border-gray-400 border-b-2 border-0 p-4">
      <div className="flex flex-col items-end">
        <Anchor
          component={Link}
          href="/"
          className="text-3xl font-medium text-black dark:text-white"
        >
          {title}
        </Anchor>
        {madeByMe && (
          <div className="inline -mb-2">
            <Text span>by </Text>
            <Anchor
              component={Link}
              href={config.web}
              className="text-gray-400 font-bold"
            >
              Jan Kaifer
            </Anchor>
          </div>
        )}
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center sm:justify-end gap-4">
        {actions}
        <ColorSchemaSwitch />
      </div>
    </header>
  )
}
