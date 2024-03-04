'use client'

import { useComputedColorScheme } from '@mantine/core'

import { useEffect, useRef } from 'react'

export const useIsFirstRender = () => {
  const firstRenderRef = useRef(true)
  useEffect(() => {
    firstRenderRef.current = false
  }, [])
  return firstRenderRef.current
}

export const useSafeColorScheme = (defaultScheme: 'light' | 'dark') => {
  const isFirstRender = useIsFirstRender()
  const colorScheme = useComputedColorScheme(defaultScheme, {
    getInitialValueInEffect: true,
  })
  return isFirstRender ? defaultScheme : colorScheme
}
