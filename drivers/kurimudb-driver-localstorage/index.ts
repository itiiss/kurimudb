export class LocalStorageDriver {
  model;

  constructor(model) {
    this.model = model;
  }

  insert(value: any, key?: string | number): string | number {
    if (!key) {
      // 如果没有 key, 代表用户想插入一个主键自增的数据
      let id = localStorage.getItem(`$table_id__${this.model.options.name}`);
      if (!id) id = "1";
      key = parseInt(id);
      localStorage.setItem(
        `$table_id__${this.model.options.name}`,
        `${key + 1}`
      );
    }
    localStorage.setItem(
      `$table__${this.model.options.name}_${key}`,
      JSON.stringify(value)
    );

    return key;
  }

  insertOrUpdate(key: string | number, value: any): void {
    localStorage.setItem(
      `$table__${this.model.options.name}_${key}`,
      JSON.stringify(value)
    );
  }

  update(key: string | number, value: any): void {
    localStorage.setItem(
      `$table__${this.model.options.name}_${key}`,
      JSON.stringify(value)
    );
  }

  select(key: string | number): any {
    return JSON.parse(
      "" + localStorage.getItem(`$table__${this.model.options.name}_${key}`)
    );
  }

  exists(key: string | number): boolean {
    return Boolean(
      localStorage.getItem(`$table__${this.model.options.name}_${key}`)
    );
  }

  delete(key: string | number): void {
    localStorage.removeItem(`$table__${this.model.options.name}_${key}`);
  }

  seeding(seeding: Function, model) {
    if (localStorage.getItem(`$seeded__${this.model.options.name}`)) return;
    seeding(model);
    localStorage.setItem(`$seeded__${this.model.options.name}`, "1");
  }

  all() {
    throw new Error(`The localstorage driver cannot use the 'all' method.`);

    return [];
  }
}
