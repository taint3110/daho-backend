import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Major, MajorRelations} from '../models';

export class MajorRepository extends DefaultCrudRepository<
  Major,
  typeof Major.prototype.maj_id,
  MajorRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Major, dataSource);
  }
}
