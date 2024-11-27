import { Model } from '@nozbe/watermelondb'
import { field, text } from '@nozbe/watermelondb/decorators'


export default class CreateHabit extends Model {
    static table = 'createHabits'

    @field('name') name: any;
    @field('description') description: any;
    @field('frequency') frequency: any;
}