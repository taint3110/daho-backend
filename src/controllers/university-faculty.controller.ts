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
  University,
  Faculty,
} from '../models';
import {UniversityRepository} from '../repositories';

export class UniversityFacultyController {
  constructor(
    @repository(UniversityRepository) protected universityRepository: UniversityRepository,
  ) { }

  @get('/universities/{id}/faculties', {
    responses: {
      '200': {
        description: 'Array of University has many Faculty',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Faculty)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Faculty>,
  ): Promise<Faculty[]> {
    return this.universityRepository.faculties(id).find(filter);
  }

  @post('/universities/{id}/faculties', {
    responses: {
      '200': {
        description: 'University model instance',
        content: {'application/json': {schema: getModelSchemaRef(Faculty)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof University.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Faculty, {
            title: 'NewFacultyInUniversity',
            exclude: ['fal_id'],
            optional: ['universityId']
          }),
        },
      },
    }) faculty: Omit<Faculty, 'fal_id'>,
  ): Promise<Faculty> {
    return this.universityRepository.faculties(id).create(faculty);
  }

  @patch('/universities/{id}/faculties', {
    responses: {
      '200': {
        description: 'University.Faculty PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
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
    return this.universityRepository.faculties(id).patch(faculty, where);
  }

  @del('/universities/{id}/faculties', {
    responses: {
      '200': {
        description: 'University.Faculty DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Faculty)) where?: Where<Faculty>,
  ): Promise<Count> {
    return this.universityRepository.faculties(id).delete(where);
  }
}
