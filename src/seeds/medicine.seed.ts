import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Medicine } from '../medicine/entity';


export default class RecruiterSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager
  ) {

    const medicineFactory = factoryManager.get(Medicine);
    // save (n) factory generated entities, to the database
    await medicineFactory.saveMany(30);
  }
}
