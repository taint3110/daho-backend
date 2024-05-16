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
  })
  id: string;

  @property({
    type: 'number',
  })
  card_id: string;

  @property({
    type: 'number',
    required: false,
  })
  sub_id: string;

  @property({
    type: 'number',
    required: false,
  })
  user_id: string;

  @property({
    type: 'number',
    required: false,
  })
  daho_id: string;

  @property({
    type: 'string',
    required: false,
  })
  title: string;

  @property({
    type: 'number',
    required: false,
  })
  award: number;

  @property({
    type: 'string',
    required: false,
  })
  created_date: string;

  @property({
    type: 'string',
  })
  time?: string;

  @property({
    type: 'string',
    required: false,
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
