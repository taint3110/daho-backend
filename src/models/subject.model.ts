import {hasMany, hasOne, model, property} from '@loopback/repository';
import {Base} from './base.model';
import {Card} from './card.model';
import {Major} from './major.model';

@model()
export class Subject extends Base {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'number',
  })
  sub_id: string;

  @property({
    type: 'number',
    required: true,
  })
  maj_id: string;

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

  @hasMany(() => Card)
  cards: Card[];

  @hasOne(() => Major)
  major: Major;

  constructor(data?: Partial<Subject>) {
    super(data);
  }
}

export interface SubjectRelations {
  // describe navigational properties here
}

export type SubjectWithRelations = Subject & SubjectRelations;
