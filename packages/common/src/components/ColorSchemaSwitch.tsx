'use client'

import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons-react'

import { useSafeColorScheme } from '@/hooks'

export const ColorSchemaSwitch = () => {
  const { setColorScheme } = useMantineColorScheme()
  const colorSchema = useSafeColorScheme('light')

  return (
    <ActionIcon
      onClick={() => setColorScheme(colorSchema === 'light' ? 'dark' : 'light')}
      variant="default"
      size="input-sm"
      aria-label="Toggle color scheme"
    >
      <IconSun className="dark:hidden" />
      <IconMoon className="hidden dark:!inline" />
    </ActionIcon>
  )
}
