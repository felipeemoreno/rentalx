import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

class ListSpecificationsUseCase {
  constructor(private iSpecificationsRepository: ISpecificationsRepository) {}
  execute() {
    const specifications = this.iSpecificationsRepository.list();

    return specifications;
  }
}
export { ListSpecificationsUseCase };
