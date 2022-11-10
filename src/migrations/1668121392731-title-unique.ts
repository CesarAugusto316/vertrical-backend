import { MigrationInterface, QueryRunner } from 'typeorm';

export class titleUnique1668121392731 implements MigrationInterface {
  name = 'titleUnique1668121392731';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "medicine" ADD CONSTRAINT "UQ_70d15f31a868dd51bd3c355e0f0" UNIQUE ("title")');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE "medicine" DROP CONSTRAINT "UQ_70d15f31a868dd51bd3c355e0f0"');
  }

}
