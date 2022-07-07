import { MigrationInterface, QueryRunner } from "typeorm";

export class init1657155957744 implements MigrationInterface {
    name = 'init1657155957744'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "anime" ("id" integer NOT NULL, "title" character varying NOT NULL, "description" character varying, "image" character varying, "rank" integer NOT NULL, "mean_score" numeric, "life" integer NOT NULL, "status" character varying NOT NULL, "genres" character varying NOT NULL, "media_type" character varying NOT NULL, "release_year" integer NOT NULL, "date" date NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_f501e6e8b983269050a4215a1ec" UNIQUE ("date"), CONSTRAINT "PK_6e567f73ed63fd388a7734cbdd3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_f501e6e8b983269050a4215a1e" ON "anime" ("date") `);
        await queryRunner.query(`CREATE TABLE "statistics" ("id" SERIAL NOT NULL, "avg_tries" numeric NOT NULL DEFAULT '0', "win" integer NOT NULL DEFAULT '0', "participant" integer NOT NULL DEFAULT '0', "anime_id" integer NOT NULL, "created" TIMESTAMP NOT NULL DEFAULT now(), "updated" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "REL_3f76d6b781664836ba009f6f4b" UNIQUE ("anime_id"), CONSTRAINT "PK_c3769cca342381fa827a0f246a7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "statistics" ADD CONSTRAINT "FK_3f76d6b781664836ba009f6f4bf" FOREIGN KEY ("anime_id") REFERENCES "anime"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "statistics" DROP CONSTRAINT "FK_3f76d6b781664836ba009f6f4bf"`);
        await queryRunner.query(`DROP TABLE "statistics"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f501e6e8b983269050a4215a1e"`);
        await queryRunner.query(`DROP TABLE "anime"`);
    }

}
