"use client";

import { useSafeColorScheme } from "@/hooks";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

export const ColorSchemaSwitch = () => {
  const { setColorScheme } = useMantineColorScheme();
  const colorSchema = useSafeColorScheme("light");

  return (
    <ActionIcon
      onClick={() => setColorScheme(colorSchema === "light" ? "dark" : "light")}
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      {colorSchema === "light" ? (
        <IconSun stroke={1.5} />
      ) : (
        <IconMoon stroke={1.5} />
      )}
    </ActionIcon>
  );
};
