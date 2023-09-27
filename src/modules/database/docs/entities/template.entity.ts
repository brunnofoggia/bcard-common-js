import { Column, Entity, ObjectLiteral, OneToMany, PrimaryColumn } from 'typeorm';
import { set } from 'node-common/dist/utils/entities';

import { TemplateConfigEntity } from './templateConfig.entity';
import { MX_MODULE } from '../../../../types/module.type';

@Entity({ name: 'template', schema: MX_MODULE.DOCS })
export class TemplateEntity {
    @PrimaryColumn({ name: 'uid' })
    uid: string;

    @Column(set({ name: 'default_config', type: 'jsonb', default: {} }))
    defaultConfig?: ObjectLiteral;

    @OneToMany(() => TemplateConfigEntity, (renderTemplateConfig) => renderTemplateConfig.template)
    templateConfigs?: TemplateConfigEntity[];
}
