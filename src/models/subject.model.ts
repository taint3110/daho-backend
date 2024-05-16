import {model, property} from '@loopback/repository';
import {Base} from './base.model';

@model()
export class Subject extends Base {
  @property({
    type: 'number',
    id: true,
  })
  sub_id: number;

  @property({
    type: 'number',
    required: true,
  })
  maj_id: number;

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
  img: string;

  @property({
    type: 'string',
    required: true,
  })
  desc: string;

  constructor(data?: Partial<Subject>) {
    super(data);
  }
}

export interface SubjectRelations {
  // describe navigational properties here
}

export type SubjectWithRelations = Subject & SubjectRelations;
