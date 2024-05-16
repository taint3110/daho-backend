import {model, property} from '@loopback/repository';
import {Base} from './base.model';

@model()
export class Ranking extends Base {
  @property({
    type: 'number',
    id: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  uni: string;

  @property({
    type: 'string',
    required: true,
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
