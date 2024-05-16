import {model, property} from '@loopback/repository';

import {Base} from './base.model';

@model()
export class Major extends Base {
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
  maj_id?: string;

  @property({
    type: 'string',
  })
  fal_id: string;

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
    type: 'string',
  })
  facultyId?: string;

  @property({
    type: 'string',
  })
  subjectId?: string;

  constructor(data?: Partial<Major>) {
    super(data);
  }
}

export interface MajorRelations {
  // describe navigational properties here
}

export type MajorWithRelations = Major & MajorRelations;
