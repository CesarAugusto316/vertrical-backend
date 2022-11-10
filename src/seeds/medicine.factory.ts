import { setSeederFactory } from 'typeorm-extension';
import { Medicine } from '../medicine/entity';


export default setSeederFactory(Medicine, (faker) => {
  const medicine = new Medicine();
  medicine.photo = {
    url: faker.image.cats(),
    id: faker.database.mongodbObjectId()
  };
  medicine.title = faker.commerce.productName();
  medicine.description = faker.commerce.productDescription();
  medicine.shortDescription = faker.commerce.productDescription();

  return medicine;
});
