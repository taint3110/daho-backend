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
import {Faculty, Major} from '../models';
import {FacultyRepository} from '../repositories';

export class FacultyMajorController {
  constructor(
    @repository(FacultyRepository)
    protected facultyRepository: FacultyRepository,
  ) {}

  @get('/faculties/{id}/majors', {
    responses: {
      '200': {
        description: 'Array of Faculty has many Major',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Major)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: string,
    @param.query.object('filter') filter?: Filter<Major>,
  ): Promise<Major[]> {
    return this.facultyRepository.majors(id).find(filter);
  }

  @post('/faculties/{id}/majors', {
    responses: {
      '200': {
        description: 'Faculty model instance',
        content: {'application/json': {schema: getModelSchemaRef(Major)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Faculty.prototype.fal_id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Major, {
            title: 'NewMajorInFaculty',
            exclude: ['maj_id'],
            optional: ['facultyId'],
          }),
        },
      },
    })
    major: Omit<Major, 'maj_id'>,
  ): Promise<Major> {
    return this.facultyRepository.majors(id).create(major);
  }

  @patch('/faculties/{id}/majors', {
    responses: {
      '200': {
        description: 'Faculty.Major PATCH success count',
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
    return this.facultyRepository.majors(id).patch(major, where);
  }

  @del('/faculties/{id}/majors', {
    responses: {
      '200': {
        description: 'Faculty.Major DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Major)) where?: Where<Major>,
  ): Promise<Count> {
    return this.facultyRepository.majors(id).delete(where);
  }
}
