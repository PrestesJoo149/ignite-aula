import './styles/global.scss'
import {RepositoryList} from './components/RepositoryList'
import { Counter } from './components/Counter'

export function App() {
   // throw new Error("Ta pergando fogo bixo")
    //return <h1>Hello Word João 🐋</h1>
    return (
        <>
            <h1>Teste Hello Word João 🐋</h1>
            <RepositoryList />
            <Counter />
        </>
    )
}