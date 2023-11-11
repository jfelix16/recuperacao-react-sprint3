//estilização
import "./style.css";

//componentes
import CardBolo from "../../components/CardBolo";

//api
import api from "../../utils/api"

//hooks
import { useEffect, useState } from "react";




function ListaBolo() {
    //js
    //const listaBolo = [];

    //react


    //bolo => ver o bolo

    //setBolos => atribui um novo valor


    //useState<any[]> => o tipo do valor que pode receber
    //([]) => e o valor inicial
    //bolos e a lista de bolos e setBolos atualiza os valores da lista
    const [bolos, setBolos] = useState<any[]>([]);

    //atributos valor react
    //setBolos = [1,2,3;]


    function listarBolos() {
        api.get("bolos").then((response) => {
            //then e quando o retorno da api e poitivo

            setBolos(response.data); // atualiza o valor da variavel bolo pelo retorno da api

            console.log(response.data);

        })//o ponto acessa os valores

            .catch((error) => {
                
                console.log(error)

            })

    }

    //useEffect e acionado quando o componente e inicializado e modificadouse

    useEffect(() => {
        listarBolos();
    }, [

        /*monitora */
    ]);

    return (
        <main>
            <section className="lista container">
                <h1>Lista de Bolos</h1>

                {/* CARDBOLO */}

            </section>
        </main>
    );
};

export default ListaBolo;