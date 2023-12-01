import { DataSource } from 'typeorm'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: 'data.sqlite',
  entities: ['src/fixtures/**/*.entity.ts'],
//  factories: ['src/factories/**/*.factory.ts'],
//  seeders: ['src/seeders/**/*.seeder.ts'],
});
