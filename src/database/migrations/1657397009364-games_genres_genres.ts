import { MigrationInterface, QueryRunner } from "typeorm";

export class gamesGenresGenres1657397009364 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE "games_genres_genres" ("genresId" uuid NOT NULL, "gamesId" uuid NOT NULL, CONSTRAINT "PK_cd4067d574477fd5c7693bc7855" PRIMARY KEY ("genresId", "gamesId"))'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "games_genres_genres"');
  }
}
