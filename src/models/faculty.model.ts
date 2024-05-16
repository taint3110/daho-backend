import {model, property} from '@loopback/repository';
import {Base} from './base.model';

@model()
export class Faculty extends Base {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  fal_id?: number;

  @property({
    type: 'number',
    required: true,
  })
  uni_id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  code: string;

  constructor(data?: Partial<Faculty>) {
    super(data);
  }
}

export interface FacultyRelations {
  // describe navigational properties here
}

export type FacultyWithRelations = Faculty & FacultyRelations;
