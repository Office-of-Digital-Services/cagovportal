// globals.d.ts
import type { Base } from "@airtable/blocks/models";

declare global {
  const base: Base;
  const input: {
    config: () => Record<string, string>;
  };
}

export {};
