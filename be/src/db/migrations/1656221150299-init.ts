import { MigrationInterface, QueryRunner } from "typeorm";

export class init1656221150299 implements MigrationInterface {
    name = 'init1656221150299'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "anime" ("id" integer NOT NULL, "title" character varying NOT NULL, "description" character varying, "image" character varying, "rank" integer NOT NULL, "mean_score" numeric, "life" integer NOT NULL, "status" character varying NOT NULL, "genres" character varying NOT NULL, "media_type" character varying NOT NULL, "release_year" integer NOT NULL, "date" date NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_f501e6e8b983269050a4215a1ec" UNIQUE ("date"), CONSTRAINT "PK_6e567f73ed63fd388a7734cbdd3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_f501e6e8b983269050a4215a1e" ON "anime" ("date") `);
        await queryRunner.query(`CREATE TABLE "statistic" ("id" SERIAL NOT NULL, "avg_tries" numeric NOT NULL DEFAULT '0', "win" integer NOT NULL DEFAULT '0', "participant" integer NOT NULL DEFAULT '0', "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), "animeId" integer, CONSTRAINT "REL_ef7c6e9b58e655e3ff2a8e8df8" UNIQUE ("animeId"), CONSTRAINT "PK_e3e6fd496e1988019d8a46749ae" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "statistic" ADD CONSTRAINT "FK_ef7c6e9b58e655e3ff2a8e8df8b" FOREIGN KEY ("animeId") REFERENCES "anime"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "statistic" DROP CONSTRAINT "FK_ef7c6e9b58e655e3ff2a8e8df8b"`);
        await queryRunner.query(`DROP TABLE "statistic"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f501e6e8b983269050a4215a1e"`);
        await queryRunner.query(`DROP TABLE "anime"`);
    }

}
