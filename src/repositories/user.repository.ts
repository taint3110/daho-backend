import {inject, Getter} from '@loopback/core';
import {
  DefaultCrudRepository,
  HasOneRepositoryFactory, repository} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {User, UserRelations, University, Faculty, Major} from '../models';
import {UserCredentials} from '@loopback/authentication-jwt';
import {UniversityRepository} from './university.repository';
import {FacultyRepository} from './faculty.repository';
import {MajorRepository} from './major.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {
  public readonly userCredentials: HasOneRepositoryFactory<
    UserCredentials,
    typeof User.prototype.id
  >;

  public readonly university: HasOneRepositoryFactory<University, typeof User.prototype.id>;

  public readonly faculty: HasOneRepositoryFactory<Faculty, typeof User.prototype.id>;

  public readonly major: HasOneRepositoryFactory<Major, typeof User.prototype.id>;

  constructor(@inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('UniversityRepository') protected universityRepositoryGetter: Getter<UniversityRepository>, @repository.getter('FacultyRepository') protected facultyRepositoryGetter: Getter<FacultyRepository>, @repository.getter('MajorRepository') protected majorRepositoryGetter: Getter<MajorRepository>,) {
    super(User, dataSource);
    this.major = this.createHasOneRepositoryFactoryFor('major', majorRepositoryGetter);
    this.registerInclusionResolver('major', this.major.inclusionResolver);
    this.faculty = this.createHasOneRepositoryFactoryFor('faculty', facultyRepositoryGetter);
    this.registerInclusionResolver('faculty', this.faculty.inclusionResolver);
    this.university = this.createHasOneRepositoryFactoryFor('university', universityRepositoryGetter);
    this.registerInclusionResolver('university', this.university.inclusionResolver);
  }
}
