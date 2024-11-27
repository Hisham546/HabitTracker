import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const createHabits = appSchema({
    version: 1,
    tables: [

        tableSchema({
            name: 'createHabits',
            columns: [
                { name: 'name', type: 'string' },
                { name: 'description', type: 'string', isOptional: true },
                { name: 'frequency', type: 'string' },
            ]

        })
    ]

})