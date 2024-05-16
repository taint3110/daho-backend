import {model, property} from '@loopback/repository';
import {Base} from './base.model';

@model()
export class Ranking extends Base {
  @property({
    type: 'string',
    id: true,
    generated: false,
  })
  id: string;

  @property({
    type: 'string',
    required: false,
  })
  name: string;

  @property({
    type: 'string',
    required: false,
  })
  uni: string;

  @property({
    type: 'string',
    required: false,
  })
  score: string;

  constructor(data?: Partial<Ranking>) {
    super(data);
  }
}

export interface RankingRelations {
  // describe navigational properties here
}

export type RankingWithRelations = Ranking & RankingRelations;
