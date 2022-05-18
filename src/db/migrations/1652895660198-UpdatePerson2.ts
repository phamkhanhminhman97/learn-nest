import {MigrationInterface, QueryRunner} from "typeorm";

export class UpdatePerson21652895660198 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
    	await queryRunner.query(`ALTER TABLE person ADD COLUMN phone VARCHAR`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
