import {hasMany, model, property} from '@loopback/repository';
import {Base} from './base.model';
import {Major} from './major.model';

@model()
export class Faculty extends Base {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id: string;

  @property({
    type: 'string',
  })
  fal_id?: string;

  @property({
    type: 'string',
    required: false,
  })
  uni_id: string;

  @property({
    type: 'string',
    required: false,
  })
  name: string;

  @property({
    type: 'string',
    required: false,
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
