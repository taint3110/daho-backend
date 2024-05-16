import {model, property} from '@loopback/repository';

import {Base} from './base.model';

@model()
export class Major extends Base {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  maj_id?: number;

  @property({
    type: 'number',
    required: true,
  })
  fal_id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  desc: string;

  @property({
    type: 'string',
    required: true,
  })
  img: string;

  @property({
    type: 'string',
  })
  userId?: string;

  @property({
    type: 'number',
  })
  facultyId?: number;

  @property({
    type: 'number',
  })
  subjectId?: number;

  constructor(data?: Partial<Major>) {
    super(data);
  }
}

export interface MajorRelations {
  // describe navigational properties here
}

export type MajorWithRelations = Major & MajorRelations;
