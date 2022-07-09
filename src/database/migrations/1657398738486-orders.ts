import { MigrationInterface, QueryRunner } from "typeorm";

export class orders1657398738486 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "orders" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "usersId" uuid NOT NULL, "games" text NOT NULL, CONSTRAINT "PK_cd4067d574477fd5c7693ac7872" PRIMARY KEY ("usersId", "id"))'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "orders"');
  }
}
