import { DynamicDatabase } from 'node-common/dist/services/dynamicDatabase.service';

import { ConversionInputEntity } from '../entities/conversionInput.entity';

export class ConversionInputService extends DynamicDatabase<ConversionInputEntity> {
    protected entity = ConversionInputEntity;
}
