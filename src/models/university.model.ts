import {model, property, hasMany} from '@loopback/repository';
import {Base} from './base.model';
import {Faculty} from './faculty.model';

@model()
export class University extends Base {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

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
