import Row from "./models/Row";

export default class DBMS {
  private db = new Map<string, Row>();

  constructor() {
    this.db.set("jane", new Row("jane", "1998-02-24", "jane@tongle.co.kr"));
    this.db.set("john", new Row("john", "1995-06-15", "john@tongle.co.kr"));
    this.db.set("alice", new Row("alice", "2000-09-10", "alice@tongle.co.kr"));
    this.db.set("mike", new Row("mike", "1988-12-03", "mike@tongle.co.kr"));
    this.db.set("emma", new Row("emma", "1992-11-22", "emma@tongle.co.kr"));
    this.db.set("kevin", new Row("kevin", "1990-04-18", "kevin@tongle.co.kr"));
    this.db.set(
      "sophie",
      new Row("sophie", "1996-03-12", "sophie@tongle.co.kr")
    );
    this.db.set("lucas", new Row("lucas", "1997-07-25", "lucas@tongle.co.kr"));
  }

  query(name: string, callback: (row: Row) => void): void {
    setTimeout(() => {
      callback(this.db.get(name));
    }, 1500);
  }
}
