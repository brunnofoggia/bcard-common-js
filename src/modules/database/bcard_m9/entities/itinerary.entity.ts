import { Column, Entity, OneToMany } from 'typeorm';
import { GenericEntity } from 'node-common/dist/entities/generic';

import { ConversionInputEntity } from './conversionInput.entity';
import { MX_MODULE } from '../../../../types/module.type';

@Entity({ name: 'itinerary', schema: MX_MODULE.BCARD_M9 })
export class ItineraryEntity extends GenericEntity {
    @Column({ name: 'project_uid' })
    projectUid: string;

    @Column()
    status: boolean;

    @OneToMany(() => ConversionInputEntity, (input) => input.itinerary)
    inputs: ConversionInputEntity[];
}
