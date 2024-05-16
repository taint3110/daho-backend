import {model, property} from '@loopback/repository';
import {Base} from './base.model';

@model()
export class DahoHelping extends Base {
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
  })
  cardId?: string;

  constructor(data?: Partial<DahoHelping>) {
    super(data);
  }
}

export interface DahoHelpingRelations {
  // describe navigational properties here
}

export type DahoHelpingWithRelations = DahoHelping & DahoHelpingRelations;
