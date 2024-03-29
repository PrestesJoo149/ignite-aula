import {Request, Response} from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

class ListCategoryController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase){}

    handle(request: Request, response : Response): Response{        
        const listAllCategories = this.listCategoriesUseCase.execute();

        return response.json(listAllCategories);
    }
}

export {ListCategoryController}
