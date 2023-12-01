import { Seeder } from '@jorgebodega/typeorm-seeding'
import { UserFactory } from '../factories/User.factory'

export default class UserSeeder extends Seeder {
  async run() {
    await new UserFactory().create()
  }
}
