import { Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export class BaseService<T extends object> {
  constructor(protected readonly repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<T> {
    return this.repository.findOneByOrFail({ guid:id } as any);
  }

  async create(data: Partial<T>): Promise<T> {
    const entity = this.repository.create(data as T);
    return this.repository.save(entity);
  }

  async update(
    id: string | number,
    data: QueryDeepPartialEntity<T>,
  ): Promise<T> {
    await this.repository.update(id, data);
    return this.findOne(id.toString());
  }

  async delete(id: string | number): Promise<void> {
    await this.repository.delete(id);
  }
}
