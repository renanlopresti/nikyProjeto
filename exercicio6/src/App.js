import { Main, DivLeft, DivRigth, DivHeader, DivContent, DivContainer, DivCategorias, DivTitlle, DivCat, DivResumo, InputSearch } from './styled';
import React, { useEffect, useState } from 'react'
import axios from "axios"

function App() {

    let [list, setList] = useState();

    async function getList() {
        await axios.get("https://eureciclo.herokuapp.com/questao7/")
            .then((res) => {
                setList(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }



    useEffect(() => {
        getList();
    }, [list]);

    return (
        <Main>
            <DivLeft>
            </DivLeft>
            <DivRigth>
                <DivHeader>
                    <InputSearch placeholder='Pesquisar'></InputSearch>
                </DivHeader>
                <DivContent>
                    <DivCategorias>
                        <DivCat>
                            <DivTitlle>
                                <h3>Categorias</h3>
                                <select>
                                    <option>Selecione um grupo</option>
                                </select>
                            </DivTitlle>
                            <table>
                                <thead id='cabecalho'>
                                    <tr>
                                        <th>Categoria</th>
                                        <th>Frequência</th>
                                        <th>Valor</th>
                                        <th>Valor Total</th>
                                    </tr>
                                </thead>
                                <tbody id='corpo'>
                                    {list ? list.map((obj) => {
                                        return (
                                            <tr>
                                                <td className='negrito'>{obj.categoria}</td>
                                                <td>{obj.recorrencia}</td>
                                                <td>R${obj.valor}</td>
                                                <td>R${obj.total}</td>
                                            </tr>
                                        )
                                    }) : <p>carregando</p>}
                                </tbody>
                            </table>
                        </DivCat>
                    </DivCategorias>
                    <DivResumo>
                        <DivContainer>
                            <h3>Resumo</h3>
                            <h4>Gestores de área</h4>
                            <table>
                                <tr className='list1'>
                                    <td>Alimentação</td>
                                    <td>
                                        <select>
                                            <option>Diário</option>
                                        </select>
                                    </td>
                                    <td>excluir</td>
                                </tr>
                                <tr className='list2'>
                                    <td>Alimentação</td>
                                    <td>
                                        <select>
                                            <option>Diário</option>
                                        </select>
                                    </td>
                                    <td>excluir</td>
                                </tr>
                                <tr className='list3'>
                                    <td>Alimentação</td>
                                    <td>
                                        <select>
                                            <option>Diário</option>
                                        </select>
                                    </td>
                                    <td>excluir</td>
                                </tr>
                                <tr className='list4'>
                                    <td>Alimentação</td>
                                    <td>
                                        <select>
                                            <option>Diário</option>
                                        </select>
                                    </td>
                                    <td>excluir</td>
                                </tr>
                                <tr className='list5'>
                                    <td>Alimentação</td>
                                    <td>
                                        <select>
                                            <option>Diário</option>
                                        </select>
                                    </td>
                                    <td>excluir</td>
                                </tr>
                                <tr className='list6'>
                                    <td>Alimentação</td>
                                    <td>
                                        <select>
                                            <option>Diário</option>
                                        </select>
                                    </td>
                                    <td>excluir</td>
                                </tr>
                            </table>
                            <button id='buttonLeft'>Ativar categoria</button>
                            <button id='buttonRight'>Salvar alterações</button>
                        </DivContainer>
                    </DivResumo>
                </DivContent>
            </DivRigth>

        </Main>
    );
}

export default App;
