import { dataSource } from '../dataSource'

async function clear_db() {
    await dataSource.initialize()
    await dataSource.dropDatabase()
}

clear_db();
