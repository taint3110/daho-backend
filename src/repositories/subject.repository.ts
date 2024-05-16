import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Subject, SubjectRelations} from '../models';

export class SubjectRepository extends DefaultCrudRepository<
  Subject,
  typeof Subject.prototype.sub_id,
  SubjectRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Subject, dataSource);
  }
}
