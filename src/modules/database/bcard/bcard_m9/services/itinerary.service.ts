import { IsNull } from 'typeorm';
import { DynamicDatabase } from 'node-labs/lib/services/dynamicDatabase.service';

import { ItineraryEntity } from '../entities/itinerary.entity';

export class ItineraryService extends DynamicDatabase<ItineraryEntity> {
    protected entity = ItineraryEntity;

    async findOneByProjectUid(projectUid: string): Promise<ItineraryEntity> {
        const itinerary = (
            await this.find({
                where: {
                    projectUid,
                    inputs: {
                        deletedAt: IsNull(),
                        outputs: {
                            deletedAt: IsNull(),
                        },
                    },
                },
                relations: {
                    inputs: {
                        outputs: true,
                    },
                },
                take: 1,
            })
        ).shift();

        return itinerary;
    }
}
