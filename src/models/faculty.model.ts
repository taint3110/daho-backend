import {model, property, hasMany} from '@loopback/repository';
import {Base} from './base.model';
import {Major} from './major.model';

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

  @property({
    type: 'string',
  })
  userId?: string;

  @property({
    type: 'number',
  })
  universityId?: number;

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
