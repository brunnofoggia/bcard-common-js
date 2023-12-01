import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { GenericEntity } from 'node-common/dist/entities/generic';
import { set } from 'node-common/dist/utils/entities';

import { ItineraryEntity } from './itinerary.entity';
import { ConversionOutputEntity } from './conversionOutput.entity';
import { BCARD_MODULE } from '../../../../types/module.type';

@Entity({ name: 'conversion_input', schema: BCARD_MODULE.BCARD_M9 })
export class ConversionInputEntity extends GenericEntity {
    @Column({ name: 'itinerary_id' })
    itineraryId: number;

    @Column(set({ type: 'json' }))
    rule: object;

    @ManyToOne(() => ItineraryEntity, (itinerary) => itinerary.inputs)
    @JoinColumn({ name: 'itinerary_id' })
    itinerary: ItineraryEntity;

    @OneToMany(() => ConversionOutputEntity, (output) => output.input)
    outputs: ConversionOutputEntity[];
}
