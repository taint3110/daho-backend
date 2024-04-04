import {model, property} from '@loopback/repository';
import {Base} from './base.model';

@model()
export class Answer extends Base {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  id: string;

  @property({
    type: 'boolean',
    default: false,
  })
  isAccepted?: boolean;

  constructor(data?: Partial<Answer>) {
    super(data);
  }
}

export interface AnswerRelations {
  // describe navigational properties here
}

export type AnswerWithRelations = Answer & AnswerRelations;
