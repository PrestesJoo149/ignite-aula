interface RepositoryItemProps{
    repository: {
        name: string,
        description: string,
        html_url: string
    }
}

export function RepositoryItem(props: RepositoryItemProps){
    return(
    <li>
        <strong>{props.repository?.name ?? 'Default'}</strong>
        <p>{props.repository?.description ?? 'Sem descrição.'}</p>
        <a href={props.repository?.html_url ?? 'Default'}>
            Acessar repositório
        </a>
    </li>
    );

}
