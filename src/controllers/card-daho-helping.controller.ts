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
import {Card, DahoHelping} from '../models';
import {CardRepository} from '../repositories';

export class CardDahoHelpingController {
  constructor(
    @repository(CardRepository) protected cardRepository: CardRepository,
  ) {}

  @get('/cards/{id}/daho-helping', {
    responses: {
      '200': {
        description: 'Card has one DahoHelping',
        content: {
          'application/json': {
            schema: getModelSchemaRef(DahoHelping),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<DahoHelping>,
  ): Promise<DahoHelping> {
    return this.cardRepository.dahoHelping(id).get(filter);
  }

  @post('/cards/{id}/daho-helping', {
    responses: {
      '200': {
        description: 'Card model instance',
        content: {'application/json': {schema: getModelSchemaRef(DahoHelping)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Card.prototype.card_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DahoHelping, {
            title: 'NewDahoHelpingInCard',
            exclude: ['id'],
            optional: ['cardId'],
          }),
        },
      },
    })
    dahoHelping: Omit<DahoHelping, 'id'>,
  ): Promise<DahoHelping> {
    return this.cardRepository.dahoHelping(id).create(dahoHelping);
  }

  @patch('/cards/{id}/daho-helping', {
    responses: {
      '200': {
        description: 'Card.DahoHelping PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DahoHelping, {partial: true}),
        },
      },
    })
    dahoHelping: Partial<DahoHelping>,
    @param.query.object('where', getWhereSchemaFor(DahoHelping))
    where?: Where<DahoHelping>,
  ): Promise<Count> {
    return this.cardRepository.dahoHelping(id).patch(dahoHelping, where);
  }

  @del('/cards/{id}/daho-helping', {
    responses: {
      '200': {
        description: 'Card.DahoHelping DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(DahoHelping))
    where?: Where<DahoHelping>,
  ): Promise<Count> {
    return this.cardRepository.dahoHelping(id).delete(where);
  }
}
