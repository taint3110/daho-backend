import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {University, UniversityRelations, Faculty} from '../models';
import {FacultyRepository} from './faculty.repository';

export class UniversityRepository extends DefaultCrudRepository<
  University,
  typeof University.prototype.id,
  UniversityRelations
> {

  public readonly faculties: HasManyRepositoryFactory<Faculty, typeof University.prototype.id>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('FacultyRepository') protected facultyRepositoryGetter: Getter<FacultyRepository>,
  ) {
    super(University, dataSource);
    this.faculties = this.createHasManyRepositoryFactoryFor('faculties', facultyRepositoryGetter,);
    this.registerInclusionResolver('faculties', this.faculties.inclusionResolver);
  }
}
