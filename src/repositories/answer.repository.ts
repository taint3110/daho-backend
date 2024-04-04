import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Answer, AnswerRelations} from '../models';

export class AnswerRepository extends DefaultCrudRepository<
  Answer,
  typeof Answer.prototype.id,
  AnswerRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Answer, dataSource);
  }
}
