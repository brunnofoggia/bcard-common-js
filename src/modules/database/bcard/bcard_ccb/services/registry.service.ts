import { DynamicDatabase } from 'node-labs/lib/services/dynamicDatabase.service';

import { RegistryEntity } from '../entities/registry.entity';

export class RegistryService extends DynamicDatabase<RegistryEntity> {
    protected entity = RegistryEntity;
}
