import { Seeder } from '@jorgebodega/typeorm-seeding'
import { PetFactory } from '../factories/Pet.factory'

export default class PetSeeder extends Seeder {
  async run() {
    await new PetFactory().create()
  }
}
