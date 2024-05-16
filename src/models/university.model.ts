import {model, property, hasMany} from '@loopback/repository';
import {Base} from './base.model';
import {Faculty} from './faculty.model';

@model()
export class University extends Base {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id: string;

  @property({
    type: 'string',
    required: false,
  })
  name: string;

  @property({
    type: 'string',
    required: false,
  })
  icon: string;

  @property({
    type: 'string',
    required: false,
  })
  code: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: false,
  })
  src: string[];

  @property({
    type: 'number',
    required: false,
  })
  drl: number;

  @property({
    type: 'string',
    required: false,
  })
  desc: string;

  @property({
    type: 'string',
  })
  userId?: string;

  @hasMany(() => Faculty)
  faculties: Faculty[];

  constructor(data?: Partial<University>) {
    super(data);
  }
}

export interface UniversityRelations {
  // describe navigational properties here
}

export type UniversityWithRelations = University & UniversityRelations;
