import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Faculty, FacultyRelations, Major} from '../models';
import {MajorRepository} from './major.repository';

export class FacultyRepository extends DefaultCrudRepository<
  Faculty,
  typeof Faculty.prototype.fal_id,
  FacultyRelations
> {

  public readonly majors: HasManyRepositoryFactory<Major, typeof Faculty.prototype.fal_id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('MajorRepository') protected majorRepositoryGetter: Getter<MajorRepository>,
  ) {
    super(Faculty, dataSource);
    this.majors = this.createHasManyRepositoryFactoryFor('majors', majorRepositoryGetter,);
    this.registerInclusionResolver('majors', this.majors.inclusionResolver);
  }
}
