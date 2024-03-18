import { Column, Entity, Index } from 'typeorm';

import { BCARD_MODULE } from '../../../../../types/module.type';
import { GenericEntity } from '../../../../../entities/generic';
import { set } from 'node-labs/lib/utils/entities';

@Entity({ name: 'registry', schema: BCARD_MODULE.BCARD_CCB })
@Index('_ccb_registry_project_uid_ccb_number', ['projectUid', 'ccbNumber'], { unique: true })
@Index('_ccb_registry_transaction_uid', ['transactionUid'])
export class RegistryEntity extends GenericEntity {
    @Column(
        set({
            name: 'date',
            type: 'timestamptz',
            default: () => 'CURRENT_TIMESTAMP(6)',
        }),
    )
    date?: Date;

    @Column({ name: 'project_uid' })
    projectUid: string;

    @Column({ name: 'transaction_uid' })
    transactionUid: string;

    @Column({ name: 'ccb_number' })
    ccbNumber: string;

    @Column({ name: 'ccb_if_number' })
    ccbIfNumber: string;

    @Column({ name: 'ccb_ipoc_number' })
    ccbIpocNumber: string;

    @Column({ name: 'registry_uid' })
    registryUid: string;

    @Column({ name: 'registry_data', type: 'text', default: null })
    registryData: string;
}
