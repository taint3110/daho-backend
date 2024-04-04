import {inject} from '@loopback/core';
import {
  DefaultCrudRepository,
  HasOneRepositoryFactory,
} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {User, UserRelations} from '../models';
import {UserCredentials} from '@loopback/authentication-jwt';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  public readonly userCredentials: HasOneRepositoryFactory<
    UserCredentials,
    typeof User.prototype.id
  >;

  constructor(@inject('datasources.mongodb') dataSource: MongodbDataSource) {
    super(User, dataSource);
  }
}
