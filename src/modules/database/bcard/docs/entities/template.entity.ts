import { Column, Entity, ObjectLiteral, OneToMany, PrimaryColumn } from 'typeorm';
import { set } from 'node-labs/lib/utils/entities';

import { TemplateConfigEntity } from './templateConfig.entity';
import { BCARD_MODULE } from '../../../../../types/module.type';

@Entity({ name: 'template', schema: BCARD_MODULE.DOCS })
export class TemplateEntity {
    @PrimaryColumn({ name: 'uid' })
    uid: string;

    @Column(set({ name: 'default_config', type: 'jsonb', default: {} }))
    defaultConfig?: ObjectLiteral;

    @OneToMany(() => TemplateConfigEntity, (renderTemplateConfig) => renderTemplateConfig.template)
    templateConfigs?: TemplateConfigEntity[];
}
