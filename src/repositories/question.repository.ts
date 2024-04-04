import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Question, QuestionRelations} from '../models';

export class QuestionRepository extends DefaultCrudRepository<
  Question,
  typeof Question.prototype.id,
  QuestionRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Question, dataSource);
  }
}
