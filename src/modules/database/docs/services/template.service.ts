import { DynamicDatabase } from 'node-common/dist/services/dynamicDatabase.service';

import { TemplateEntity } from '../entities/template.entity';
import { BCARD_MODULE } from '../../../../types/module.type';

export class TemplateService extends DynamicDatabase<TemplateEntity> {
    protected databaseAlias = BCARD_MODULE.DOCS;
    protected idAttribute = 'uid';
    protected entity = TemplateEntity;
}
