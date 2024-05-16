import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Card, CardRelations, DahoHelping, User} from '../models';
import {DahoHelpingRepository} from './daho-helping.repository';
import {UserRepository} from './user.repository';

export class CardRepository extends DefaultCrudRepository<
  Card,
  typeof Card.prototype.card_id,
  CardRelations
> {

  public readonly dahoHelping: HasOneRepositoryFactory<DahoHelping, typeof Card.prototype.card_id>;

  public readonly user: HasOneRepositoryFactory<User, typeof Card.prototype.card_id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('DahoHelpingRepository') protected dahoHelpingRepositoryGetter: Getter<DahoHelpingRepository>, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(Card, dataSource);
    this.user = this.createHasOneRepositoryFactoryFor('user', userRepositoryGetter);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
    this.dahoHelping = this.createHasOneRepositoryFactoryFor('dahoHelping', dahoHelpingRepositoryGetter);
    this.registerInclusionResolver('dahoHelping', this.dahoHelping.inclusionResolver);
  }
}
