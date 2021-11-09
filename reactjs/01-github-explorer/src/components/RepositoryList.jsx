//const repositoryName = 'unform 2';
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';
import { useEffect, useState } from "react";

// https://api.github.com/orgs/rocketseat/repos


const repository ={
    name: "Joao, front",
    description : "João nem é gente",
    link: "https://github.com/PrestesJoo149" 
}

export function  RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(()=>{
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    },[]);

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