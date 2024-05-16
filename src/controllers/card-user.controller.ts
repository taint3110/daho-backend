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
  Card,
  User,
} from '../models';
import {CardRepository} from '../repositories';

export class CardUserController {
  constructor(
    @repository(CardRepository) protected cardRepository: CardRepository,
  ) { }

  @get('/cards/{id}/user', {
    responses: {
      '200': {
        description: 'Card has one User',
        content: {
          'application/json': {
            schema: getModelSchemaRef(User),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<User>,
  ): Promise<User> {
    return this.cardRepository.user(id).get(filter);
  }

  @post('/cards/{id}/user', {
    responses: {
      '200': {
        description: 'Card model instance',
        content: {'application/json': {schema: getModelSchemaRef(User)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Card.prototype.card_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {
            title: 'NewUserInCard',
            exclude: ['id'],
            optional: ['cardId']
          }),
        },
      },
    }) user: Omit<User, 'id'>,
  ): Promise<User> {
    return this.cardRepository.user(id).create(user);
  }

  @patch('/cards/{id}/user', {
    responses: {
      '200': {
        description: 'Card.User PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {partial: true}),
        },
      },
    })
    user: Partial<User>,
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where<User>,
  ): Promise<Count> {
    return this.cardRepository.user(id).patch(user, where);
  }

  @del('/cards/{id}/user', {
    responses: {
      '200': {
        description: 'Card.User DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where<User>,
  ): Promise<Count> {
    return this.cardRepository.user(id).delete(where);
  }
}
