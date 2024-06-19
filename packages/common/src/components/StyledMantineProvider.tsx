'use client'

import { MantineProvider, createTheme } from '@mantine/core'
import { useMemo } from 'react'

export const StyledMantineProvider = ({
  children,
  theme,
}: {
  children: React.ReactNode
  theme: Parameters<typeof createTheme>[0]
}) => {
  const generatedTheme = useMemo(() => createTheme(theme), [])
  // @ts-expect-error arst
  MantineProvider.test = 'was here'

  return (
    <MantineProvider defaultColorScheme="auto" theme={generatedTheme}>
      {children}
    </MantineProvider>
  )
}
