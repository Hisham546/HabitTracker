import { appSchema, tableSchema } from '@nozbe/watermelondb'
import { createHabitsSchema } from './habits'

export const schema  = appSchema({
    version: 1,
    tables: [
        createHabitsSchema,

    ]

})