// Minimal Airtable automation types based on @airtable/blocks; add interfaces
// or members from the package as these scripts need them.
interface AirtableField {
  name: string;
  type: string;
  options?: unknown;
}

interface AirtableRecord {
  id: string;
  getCellValue(field: string): unknown;
}

interface AirtableTable {
  fields: AirtableField[];
  getField(nameOrId: string): AirtableField;
  selectRecordsAsync(): Promise<{ records: AirtableRecord[] }>;
  createRecordAsync(fields: Record<string, unknown>): Promise<string>;
  updateRecordAsync(
    recordId: string,
    fields: Record<string, unknown>
  ): Promise<void>;
  deleteRecordAsync(recordId: string): Promise<void>;
}

declare global {
  const base: {
    getTable(nameOrId: string): AirtableTable;
  };
  const input: {
    config: () => Record<string, string>;
  };
}

export {};
