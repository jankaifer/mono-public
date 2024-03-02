"use client";

import { ColorSchemaSwitch } from "@/components/ColorSchemaSwitch";
import { useSafeColorScheme } from "@/hooks";
import { Anchor } from "@mantine/core";
import Link from "next/link";

export const PageHeader = () => {
  const colorSchema = useSafeColorScheme("light");

  return (
    <header className="min-h-16 flex flex-wrap gap-4 justify-between items-center border-solid border-gray-400 border-b-2 border-0 p-4">
      <Anchor
        component={Link}
        href="/"
        className="text-4xl font-medium"
        c={colorSchema === "dark" ? "white" : "black"}
      >
        <span>Jan Kaifer</span>
        <span className="text-gray-400">'s web</span>
      </Anchor>
      <ColorSchemaSwitch />
    </header>
  );
};
