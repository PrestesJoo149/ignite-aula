//const repositoryName = 'unform 2';
import { RepositoryItem } from "./RepositoryItem";

const repository ={
    name: "Joao, front",
    description : "João nem é gente",
    link: "https://github.com/PrestesJoo149" 
}

export function  RepositoryList() {
    return(
        <section className="repository-list">
            <h1>Lista de Repositorios</h1>

            <ul>
               < RepositoryItem repository = {repository}  />
               < RepositoryItem repository = {repository} />
               < RepositoryItem repository = {repository} />
               < RepositoryItem repository = {repository} />
            </ul>
        </section>
    );
}