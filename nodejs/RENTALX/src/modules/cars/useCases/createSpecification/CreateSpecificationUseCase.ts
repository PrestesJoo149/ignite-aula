import { ISpeficicationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string,
    description: string,
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: ISpeficicationRepository){}
    execute({name, description}:IRequest) : void{
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if(specificationAlreadyExists){
            throw new Error("Speficication already exists")
        }
        this.specificationsRepository.create({name, description});
    }
       
}

export {CreateSpecificationUseCase};