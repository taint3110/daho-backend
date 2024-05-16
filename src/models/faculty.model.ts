import {hasMany, model, property} from '@loopback/repository';
import {Base} from './base.model';
import {Major} from './major.model';

@model()
export class Faculty extends Base {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'string',
  })
  fal_id?: string;

  @property({
    type: 'number',
    required: true,
  })
  uni_id: string;

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

  @property({
    type: 'string',
  })
  userId?: string;

  @property({
    type: 'string',
  })
  universityId?: string;

  @hasMany(() => Major)
  majors: Major[];

  constructor(data?: Partial<Faculty>) {
    super(data);
  }
}

export interface FacultyRelations {
  // describe navigational properties here
}

export type FacultyWithRelations = Faculty & FacultyRelations;
