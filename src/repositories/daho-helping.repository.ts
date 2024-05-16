import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {DahoHelping, DahoHelpingRelations} from '../models';

export class DahoHelpingRepository extends DefaultCrudRepository<
  DahoHelping,
  typeof DahoHelping.prototype.id,
  DahoHelpingRelations
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(DahoHelping, dataSource);
  }
}
