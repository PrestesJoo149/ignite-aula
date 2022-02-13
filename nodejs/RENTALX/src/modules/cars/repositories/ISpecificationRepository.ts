import { Specification } from "../model/Specification";

 interface ICreateSpecioficationDTO{
    name: string;
    description: string;
}


interface ISpeficicationRepository {
    create({name, description}: ICreateSpecioficationDTO): void;
    findByName(name: string): Specification;
}

export { ISpeficicationRepository, ICreateSpecioficationDTO }