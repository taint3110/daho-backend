import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Subject, SubjectRelations, Card, Major} from '../models';
import {CardRepository} from './card.repository';
import {MajorRepository} from './major.repository';

export class SubjectRepository extends DefaultCrudRepository<
  Subject,
  typeof Subject.prototype.sub_id,
  SubjectRelations
> {

  public readonly cards: HasManyRepositoryFactory<Card, typeof Subject.prototype.sub_id>;

  public readonly major: HasOneRepositoryFactory<Major, typeof Subject.prototype.sub_id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('CardRepository') protected cardRepositoryGetter: Getter<CardRepository>, @repository.getter('MajorRepository') protected majorRepositoryGetter: Getter<MajorRepository>,
  ) {
    super(Subject, dataSource);
    this.major = this.createHasOneRepositoryFactoryFor('major', majorRepositoryGetter);
    this.registerInclusionResolver('major', this.major.inclusionResolver);
    this.cards = this.createHasManyRepositoryFactoryFor('cards', cardRepositoryGetter,);
    this.registerInclusionResolver('cards', this.cards.inclusionResolver);
  }
}
