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
  Major,
} from '../models';
import {UserRepository} from '../repositories';

export class UserMajorController {
  constructor(
    @repository(UserRepository) protected userRepository: UserRepository,
  ) { }

  @get('/users/{id}/major', {
    responses: {
      '200': {
        description: 'User has one Major',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Major),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Major>,
  ): Promise<Major> {
    return this.userRepository.major(id).get(filter);
  }

  @post('/users/{id}/major', {
    responses: {
      '200': {
        description: 'User model instance',
        content: {'application/json': {schema: getModelSchemaRef(Major)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof User.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Major, {
            title: 'NewMajorInUser',
            exclude: ['maj_id'],
            optional: ['userId']
          }),
        },
      },
    }) major: Omit<Major, 'maj_id'>,
  ): Promise<Major> {
    return this.userRepository.major(id).create(major);
  }

  @patch('/users/{id}/major', {
    responses: {
      '200': {
        description: 'User.Major PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Major, {partial: true}),
        },
      },
    })
    major: Partial<Major>,
    @param.query.object('where', getWhereSchemaFor(Major)) where?: Where<Major>,
  ): Promise<Count> {
    return this.userRepository.major(id).patch(major, where);
  }

  @del('/users/{id}/major', {
    responses: {
      '200': {
        description: 'User.Major DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Major)) where?: Where<Major>,
  ): Promise<Count> {
    return this.userRepository.major(id).delete(where);
  }
}
