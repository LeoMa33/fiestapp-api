import { DeepPartial, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseService<
  T extends { guid: string },
  CreateDto = any,
  UpdateDto = Partial<CreateDto>,
> {
  constructor(protected readonly repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<T> {
    return this.repository.findOneByOrFail({ guid: id } as any);
  }

  async create(dto: CreateDto): Promise<T> {
    const entity = this.repository.create(this.mapCreateDtoToEntity(dto));
    return this.repository.save(entity);
  }

  async update(id: string, dto: CreateDto): Promise<T> {
    await this.repository.update(id, this.mapUpdateDtoToEntity(dto));
    return this.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  protected abstract mapCreateDtoToEntity(dto: CreateDto): DeepPartial<T>;

  protected abstract mapUpdateDtoToEntity(
    dto: CreateDto,
  ): QueryDeepPartialEntity<T>;
}
