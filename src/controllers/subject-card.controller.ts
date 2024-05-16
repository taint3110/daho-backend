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
import {Card, Subject} from '../models';
import {SubjectRepository} from '../repositories';

export class SubjectCardController {
  constructor(
    @repository(SubjectRepository)
    protected subjectRepository: SubjectRepository,
  ) {}

  @get('/subjects/{id}/cards', {
    responses: {
      '200': {
        description: 'Array of Subject has many Card',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Card)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: string,
    @param.query.object('filter') filter?: Filter<Card>,
  ): Promise<Card[]> {
    return this.subjectRepository.cards(id).find(filter);
  }

  @post('/subjects/{id}/cards', {
    responses: {
      '200': {
        description: 'Subject model instance',
        content: {'application/json': {schema: getModelSchemaRef(Card)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Subject.prototype.sub_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Card, {
            title: 'NewCardInSubject',
            exclude: ['card_id'],
            optional: ['subjectId'],
          }),
        },
      },
    })
    card: Omit<Card, 'card_id'>,
  ): Promise<Card> {
    return this.subjectRepository.cards(id).create(card);
  }

  @patch('/subjects/{id}/cards', {
    responses: {
      '200': {
        description: 'Subject.Card PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Card, {partial: true}),
        },
      },
    })
    card: Partial<Card>,
    @param.query.object('where', getWhereSchemaFor(Card)) where?: Where<Card>,
  ): Promise<Count> {
    return this.subjectRepository.cards(id).patch(card, where);
  }

  @del('/subjects/{id}/cards', {
    responses: {
      '200': {
        description: 'Subject.Card DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Card)) where?: Where<Card>,
  ): Promise<Count> {
    return this.subjectRepository.cards(id).delete(where);
  }
}
