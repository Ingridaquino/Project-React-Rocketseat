import { Container } from "./styles";

export function  TransactionsTable () {
    return (
      <Container>
          <table>
              <thead>
                  <tr>
                      <th>Titulo</th>
                      <th>Valor</th>
                      <th>Catagoria</th>
                      <th>Data</th>
                  </tr>
              </thead>

              <tbody>
                  <tr>
                      <td>Desenvolvimento de website</td>
                      <td className="deposit">R$12.000,00</td>
                      <td>Desenvolvimento</td>
                      <td>20/02/2021</td>
                  </tr>

                  <tr>
                      <td>Aluguel</td>
                      <td className="withdraw"> - R$950,00</td>
                      <td>Casa</td>
                      <td>20/02/2021</td>
                  </tr>

                  <tr>
                      <td>Despesas</td>
                      <td className="withdraw"> - R$1.500,00</td>
                      <td>Contas</td>
                      <td>20/02/2021</td>
                  </tr>

                  <tr>
                      <td>Convênio</td>
                      <td className="withdraw"> - R$500,00</td>
                      <td>Médico</td>
                      <td>20/02/2021</td>
                  </tr>
              </tbody>

          </table>
      </Container>
    );
};