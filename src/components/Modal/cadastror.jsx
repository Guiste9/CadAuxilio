import { useState } from "react";
import api from "../../services/api";
import styles from "./Modal.module.css";

function Cadastror({ closeModal, fetchFamilies }) {
    const [newFamily, setNewFamily] = useState({
        parents_name: "",
        address: "",
        number: "",
        children_name: "",
        children_age: "",
    });

    async function addFamily(e) {
        e.preventDefault();
        try {
            await api.post("/cadastrador", newFamily);
            fetchFamilies();
            closeModal();
            setNewFamily({
                parents_name: "",
                address: "",
                number: "",
                children_name: "",
                children_age: "",
            });
        } catch (error) {
            console.log("Erro ao adicionar família", error);
        }
    }

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.titleCloseBtn}>
                    <button onClick={closeModal}>×</button>
                </div>
                <form onSubmit={addFamily}>
                    <div className={styles.centralized}>
                        <input
                            type="text"
                            placeholder="Nome dos Pais"
                            value={newFamily.parents_name}
                            onChange={(e) => setNewFamily({ ...newFamily, parents_name: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Endereço"
                            value={newFamily.address}
                            onChange={(e) => setNewFamily({ ...newFamily, address: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Número"
                            value={newFamily.number}
                            onChange={(e) => setNewFamily({ ...newFamily, number: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Nome da Criança"
                            value={newFamily.children_name}
                            onChange={(e) => setNewFamily({ ...newFamily, children_name: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder="Idade da Criança"
                            value={newFamily.children_age}
                            onChange={(e) => setNewFamily({ ...newFamily, children_age: e.target.value })}
                        />
                        <button type="submit">Adicionar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Cadastror;
