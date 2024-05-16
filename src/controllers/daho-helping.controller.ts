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
import {DahoHelping} from '../models';
import {DahoHelpingRepository} from '../repositories';

export class DahoHelpingController {
  constructor(
    @repository(DahoHelpingRepository)
    public dahoHelpingRepository : DahoHelpingRepository,
  ) {}

  @post('/daho-helpings')
  @response(200, {
    description: 'DahoHelping model instance',
    content: {'application/json': {schema: getModelSchemaRef(DahoHelping)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DahoHelping, {
            title: 'NewDahoHelping',
            exclude: ['id'],
          }),
        },
      },
    })
    dahoHelping: Omit<DahoHelping, 'id'>,
  ): Promise<DahoHelping> {
    return this.dahoHelpingRepository.create(dahoHelping);
  }

  @get('/daho-helpings/count')
  @response(200, {
    description: 'DahoHelping model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(DahoHelping) where?: Where<DahoHelping>,
  ): Promise<Count> {
    return this.dahoHelpingRepository.count(where);
  }

  @get('/daho-helpings')
  @response(200, {
    description: 'Array of DahoHelping model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(DahoHelping, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(DahoHelping) filter?: Filter<DahoHelping>,
  ): Promise<DahoHelping[]> {
    return this.dahoHelpingRepository.find(filter);
  }

  @patch('/daho-helpings')
  @response(200, {
    description: 'DahoHelping PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DahoHelping, {partial: true}),
        },
      },
    })
    dahoHelping: DahoHelping,
    @param.where(DahoHelping) where?: Where<DahoHelping>,
  ): Promise<Count> {
    return this.dahoHelpingRepository.updateAll(dahoHelping, where);
  }

  @get('/daho-helpings/{id}')
  @response(200, {
    description: 'DahoHelping model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(DahoHelping, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(DahoHelping, {exclude: 'where'}) filter?: FilterExcludingWhere<DahoHelping>
  ): Promise<DahoHelping> {
    return this.dahoHelpingRepository.findById(id, filter);
  }

  @patch('/daho-helpings/{id}')
  @response(204, {
    description: 'DahoHelping PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DahoHelping, {partial: true}),
        },
      },
    })
    dahoHelping: DahoHelping,
  ): Promise<void> {
    await this.dahoHelpingRepository.updateById(id, dahoHelping);
  }

  @put('/daho-helpings/{id}')
  @response(204, {
    description: 'DahoHelping PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() dahoHelping: DahoHelping,
  ): Promise<void> {
    await this.dahoHelpingRepository.replaceById(id, dahoHelping);
  }

  @del('/daho-helpings/{id}')
  @response(204, {
    description: 'DahoHelping DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.dahoHelpingRepository.deleteById(id);
  }
}
