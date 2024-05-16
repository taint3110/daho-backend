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
  University,
} from '../models';
import {UserRepository} from '../repositories';

export class UserUniversityController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/university', {
    responses: {
      '200': {
        description: 'User has one University',
        content: {
          'application/json': {
            schema: getModelSchemaRef(University),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<University>,
  ): Promise<University> {
    return this.userRepository.university(id).get(filter);
  }

  @post('/users/{id}/university', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(University)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof User.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(University, {
            title: 'NewUniversityInUser',
            exclude: ['id'],
            optional: ['userId']
          }),
        },
      },
    }) university: Omit<University, 'id'>,
  ): Promise<University> {
    return this.userRepository.university(id).create(university);
  }

  @patch('/users/{id}/university', {
    responses: {
      '200': {
        description: 'User.University PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(University, {partial: true}),
        },
      },
    })
    university: Partial<University>,
    @param.query.object('where', getWhereSchemaFor(University)) where?: Where<University>,
  ): Promise<Count> {
    return this.userRepository.university(id).patch(university, where);
  }

  @del('/users/{id}/university', {
    responses: {
      '200': {
        description: 'User.University DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(University)) where?: Where<University>,
  ): Promise<Count> {
    return this.userRepository.university(id).delete(where);
  }
}
