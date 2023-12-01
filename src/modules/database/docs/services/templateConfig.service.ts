import { DynamicDatabase } from 'node-common/dist/services/dynamicDatabase.service';

import { TemplateConfigEntity } from '../entities/templateConfig.entity';
import { BCARD_MODULE } from '../../../../types/module.type';

export class TemplateConfigService extends DynamicDatabase<TemplateConfigEntity> {
    protected databaseAlias = BCARD_MODULE.DOCS;
    protected entity = TemplateConfigEntity;
}
