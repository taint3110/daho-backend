import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Major} from '../models';
import {MajorRepository} from '../repositories';

export class MajorController {
  constructor(
    @repository(MajorRepository)
    public majorRepository : MajorRepository,
  ) {}

  @post('/majors')
  @response(200, {
    description: 'Major model instance',
    content: {'application/json': {schema: getModelSchemaRef(Major)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Major, {
            title: 'NewMajor',
            exclude: ['id'],
          }),
        },
      },
    })
    major: Omit<Major, 'id'>,
  ): Promise<Major> {
    return this.majorRepository.create(major);
  }

  @get('/majors/count')
  @response(200, {
    description: 'Major model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Major) where?: Where<Major>,
  ): Promise<Count> {
    return this.majorRepository.count(where);
  }

  @get('/majors')
  @response(200, {
    description: 'Array of Major model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Major, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Major) filter?: Filter<Major>,
  ): Promise<Major[]> {
    return this.majorRepository.find(filter);
  }

  @patch('/majors')
  @response(200, {
    description: 'Major PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Major, {partial: true}),
        },
      },
    })
    major: Major,
    @param.where(Major) where?: Where<Major>,
  ): Promise<Count> {
    return this.majorRepository.updateAll(major, where);
  }

  @get('/majors/{id}')
  @response(200, {
    description: 'Major model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Major, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Major, {exclude: 'where'}) filter?: FilterExcludingWhere<Major>
  ): Promise<Major> {
    return this.majorRepository.findById(id, filter);
  }

  @patch('/majors/{id}')
  @response(204, {
    description: 'Major PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Major, {partial: true}),
        },
      },
    })
    major: Major,
  ): Promise<void> {
    await this.majorRepository.updateById(id, major);
  }

  @put('/majors/{id}')
  @response(204, {
    description: 'Major PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() major: Major,
  ): Promise<void> {
    await this.majorRepository.replaceById(id, major);
  }

  @del('/majors/{id}')
  @response(204, {
    description: 'Major DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.majorRepository.deleteById(id);
  }
}
