import { Specification } from "../../model/Specification";
import { ICreateSpecioficationDTO, ISpeficicationRepository } from "../ISpecificationRepository";

class SpecificationRepository implements ISpeficicationRepository {
    private specifications: Specification[];

    constructor(){
        this.specifications = [];
    }

    create({ name, description }: ICreateSpecioficationDTO): void {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            createdAt: new Date(),
        });

        this.specifications.push(specification);
    }

    findByName(name: string): Specification {
        const specification = this.specifications.find(
            (specification) => specification.name === name
        );
        
        return specification;
    }
}

export {SpecificationRepository};