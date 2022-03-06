import { EntityRepository, Repository } from 'typeorm';

@EntityRepository()
export class UserRepository extends Repository<> {}