import Row from "./Row";

export default class Cache {
  private cache = new Map<string, Row>();

  put(row: Row): void {
    this.cache.set(row.name, row);
  }

  get(name: string): Row {
    const row = this.cache.get(name);
    return this.cache.get(name);
  }
}
