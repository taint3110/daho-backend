import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {University, UniversityRelations} from '../models';

export class UniversityRepository extends DefaultCrudRepository<
  University,
  typeof University.prototype.id,
  UniversityRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(University, dataSource);
  }
}
