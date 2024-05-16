import {model, property} from '@loopback/repository';
import {Base} from './base.model';

@model()
export class University extends Base {
  @property({
    type: 'number',
    id: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  icon: string;

  @property({
    type: 'string',
    required: true,
  })
  code: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  src: string[];

  @property({
    type: 'number',
    required: true,
  })
  drl: number;

  @property({
    type: 'string',
    required: true,
  })
  desc: string;

  constructor(data?: Partial<University>) {
    super(data);
  }
}

export interface UniversityRelations {
  // describe navigational properties here
}

export type UniversityWithRelations = University & UniversityRelations;