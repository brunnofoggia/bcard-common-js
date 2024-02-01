import { PrimaryGeneratedColumn } from 'typeorm';
import { TimestampEntity } from 'node-labs/lib/entities/timestamp';

export class GenericEntity extends TimestampEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id?: number;
}
