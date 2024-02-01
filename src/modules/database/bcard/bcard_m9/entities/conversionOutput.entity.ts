import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { GenericEntity } from 'node-labs/lib/entities/generic';
import { set } from 'node-labs/lib/utils/entities';

import { ConversionInputEntity } from './conversionInput.entity';
import { BCARD_MODULE } from '../../../../../types/module.type';

@Entity({ name: 'conversion_output', schema: BCARD_MODULE.BCARD_M9 })
export class ConversionOutputEntity extends GenericEntity {
    @Column({ name: 'conversion_input_id' })
    conversionInputId: number;

    @Column(set({ type: 'json' }))
    rule: object;

    @ManyToOne(() => ConversionInputEntity, (input) => input.outputs)
    @JoinColumn({ name: 'conversion_input_id' })
    input: ConversionInputEntity;
}
