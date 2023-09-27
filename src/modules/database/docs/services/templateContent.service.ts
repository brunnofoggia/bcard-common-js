import { DynamicDatabase } from 'node-common/dist/services/dynamicDatabase.service';

import { TemplateContentEntity } from '../entities/templateContent.entity';
import { MX_MODULE } from '../../../../types/module.type';

export class TemplateContentService extends DynamicDatabase<TemplateContentEntity> {
    protected databaseAlias = MX_MODULE.DOCS;
    protected entity = TemplateContentEntity;
}
