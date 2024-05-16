import {hasOne, model, property} from '@loopback/repository';
import {Base} from './base.model';
import {DahoHelping} from './daho-helping.model';
import {User} from './user.model';

@model()
export class Card extends Base {
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
  card_id: string;

  @property({
    type: 'number',
    required: true,
  })
  sub_id: string;

  @property({
    type: 'number',
    required: true,
  })
  user_id: string;

  @property({
    type: 'number',
    required: true,
  })
  daho_id: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'number',
    required: true,
  })
  award: number;

  @property({
    type: 'string',
    required: true,
  })
  created_date: string;

  @property({
    type: 'string',
  })
  time?: string;

  @property({
    type: 'string',
    required: true,
  })
  text: string;

  @property({
    type: 'string',
  })
  img?: string;

  @property({
    type: 'boolean',
    default: false,
  })
  is_reported: boolean;

  @property({
    type: 'boolean',
    default: false,
  })
  is_answered: boolean;

  @property({
    type: 'string',
  })
  subjectId?: string;

  @hasOne(() => DahoHelping)
  dahoHelping: DahoHelping;

  @hasOne(() => User)
  user: User;

  constructor(data?: Partial<Card>) {
    super(data);
  }
}

export interface CardRelations {
  // describe navigational properties here
}

export type CardWithRelations = Card & CardRelations;
