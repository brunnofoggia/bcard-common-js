import { DynamicDatabase } from 'node-labs/lib/services/dynamicDatabase.service';

import { ConversionOutputEntity } from '../entities/conversionOutput.entity';

export class ConversionOutputService extends DynamicDatabase<ConversionOutputEntity> {
    protected entity = ConversionOutputEntity;
}
