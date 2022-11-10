import { MigrationInterface, QueryRunner } from 'typeorm';

export class columns1668097700249 implements MigrationInterface {
  name = 'columns1668097700249';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE TABLE "medicine" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "photo" text, "description" character varying NOT NULL, "short_description" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_b9e0e6f37b7cadb5f402390928b" PRIMARY KEY ("id"))');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "medicine"');
  }
}
