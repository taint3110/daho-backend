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
import {Major, Subject} from '../models';
import {SubjectRepository} from '../repositories';

export class SubjectMajorController {
  constructor(
    @repository(SubjectRepository)
    protected subjectRepository: SubjectRepository,
  ) {}

  @get('/subjects/{id}/major', {
    responses: {
      '200': {
        description: 'Subject has one Major',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Major),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: string,
    @param.query.object('filter') filter?: Filter<Major>,
  ): Promise<Major> {
    return this.subjectRepository.major(id).get(filter);
  }

  @post('/subjects/{id}/major', {
    responses: {
      '200': {
        description: 'Subject model instance',
        content: {'application/json': {schema: getModelSchemaRef(Major)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Subject.prototype.sub_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Major, {
            title: 'NewMajorInSubject',
            exclude: ['maj_id'],
            optional: ['subjectId'],
          }),
        },
      },
    })
    major: Omit<Major, 'maj_id'>,
  ): Promise<Major> {
    return this.subjectRepository.major(id).create(major);
  }

  @patch('/subjects/{id}/major', {
    responses: {
      '200': {
        description: 'Subject.Major PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: string,
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
    return this.subjectRepository.major(id).patch(major, where);
  }

  @del('/subjects/{id}/major', {
    responses: {
      '200': {
        description: 'Subject.Major DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Major)) where?: Where<Major>,
  ): Promise<Count> {
    return this.subjectRepository.major(id).delete(where);
  }
}
