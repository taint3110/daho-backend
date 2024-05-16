import {hasOne, model, property} from '@loopback/repository';
import {EAccountType, EUserRoleEnum} from '../enums/user';
import {Base} from './base.model';
import {UserCredentials} from './user-credentials.model';
import {University} from './university.model';
import {Faculty} from './faculty.model';
import {Major} from './major.model';

@model()
export class User extends Base {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: false,
  })
  fullname: string;

  @property({
    type: 'string',
    required: false,
  })
  avatar: string;

  @property({
    type: 'number',
    required: false,
  })
  score: string;

  @property({
    type: 'string',
    required: false,
  })
  hobby: string;

  @property({
    type: 'string',
    required: false,
  })
  bio: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
  })
  phoneNumber?: string;

  @property({
    type: 'string',
    jsonSchema: {
      enum: Object.values(EUserRoleEnum),
    },
    default: EUserRoleEnum.USER,
  })
  role: EUserRoleEnum;

  @property({
    type: 'string',
    required: true,
  })
  accountType: EAccountType;

  @property({
    type: 'array',
    itemType: 'string',
  })
  oldPassword?: string[];

  @property({
    type: 'boolean',
    default: false,
  })
  isActive?: boolean;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  lastSignInAt: Date;

  @property({
    type: 'string',
  })
  forgotPassword?: string;

  @property({
    type: 'string',
  })
  resetPasswordToken: string;

  @hasOne(() => UserCredentials)
  userCredentials: UserCredentials;

  @hasOne(() => University)
  university: University;

  @hasOne(() => Faculty)
  faculty: Faculty;

  @hasOne(() => Major)
  major: Major;

  @property({
    type: 'number',
  })
  cardId?: number;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
