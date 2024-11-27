import createHabit from "./models/habitModels";
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';
import { Database } from '@nozbe/watermelondb';
import schema from "./schema";

const adapter = new SQLiteAdapter({
    schema,
});
const database = new Database({
    adapter,
    modelClasses: [createHabit],
});

export default database;