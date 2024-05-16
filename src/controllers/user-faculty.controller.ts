import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  User,
  Faculty,
} from '../models';
import {UserRepository} from '../repositories';

export class UserFacultyController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/faculty', {
    responses: {
      '200': {
        description: 'User has one Faculty',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Faculty),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Faculty>,
  ): Promise<Faculty> {
    return this.userRepository.faculty(id).get(filter);
  }

  @post('/users/{id}/faculty', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(Faculty)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof User.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Faculty, {
            title: 'NewFacultyInUser',
            exclude: ['fal_id'],
            optional: ['userId']
          }),
        },
      },
    }) faculty: Omit<Faculty, 'fal_id'>,
  ): Promise<Faculty> {
    return this.userRepository.faculty(id).create(faculty);
  }

  @patch('/users/{id}/faculty', {
    responses: {
      '200': {
        description: 'User.Faculty PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Faculty, {partial: true}),
        },
      },
    })
    faculty: Partial<Faculty>,
    @param.query.object('where', getWhereSchemaFor(Faculty)) where?: Where<Faculty>,
  ): Promise<Count> {
    return this.userRepository.faculty(id).patch(faculty, where);
  }

  @del('/users/{id}/faculty', {
    responses: {
      '200': {
        description: 'User.Faculty DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Faculty)) where?: Where<Faculty>,
  ): Promise<Count> {
    return this.userRepository.faculty(id).delete(where);
  }
}
