import { Container } from "./styles";

export function TransactionTable () {
    return(
       <Container>
           <table>
               <thead>
                   <tr>
                      <th>Título</th>
                      <th>Valor</th>
                      <th>Categoria</th>
                      <th>Data</th>
                   </tr>
               </thead>

               <tbody>
                   <tr>
                      <td>Salario mensal</td> 
                      <td className="depoisty">R$1.943,00</td>
                      <td>Desenvolvimento</td>
                      <td>05/11/2021</td>
                   </tr>
                   <tr>
                      <td>Cartão</td> 
                      <td className="withdraw">-R$800,00</td>
                      <td>Varialvel</td>
                      <td>05/11/2021</td>
                   </tr>

               </tbody>
           </table>
       </Container>
    );

}