import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Ranking, RankingRelations} from '../models';

export class RankingRepository extends DefaultCrudRepository<
  Ranking,
  typeof Ranking.prototype.id,
  RankingRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Ranking, dataSource);
  }
}
