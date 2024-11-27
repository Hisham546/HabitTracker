import { appSchema, tableSchema } from '@nozbe/watermelondb'




export const createHabitsSchema = tableSchema({
    name: 'createHabits',
    columns: [
        { name: 'name', type: 'string' },
        { name: 'description', type: 'string', isOptional: true },
        { name: 'frequency', type: 'string' },
    ]

})


