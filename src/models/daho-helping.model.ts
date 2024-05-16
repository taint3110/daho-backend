import {model, property} from '@loopback/repository';
import {Base} from './base.model';

@model()
export class DahoHelping extends Base {
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

  constructor(data?: Partial<DahoHelping>) {
    super(data);
  }
}

export interface DahoHelpingRelations {
  // describe navigational properties here
}

export type DahoHelpingWithRelations = DahoHelping & DahoHelpingRelations;
