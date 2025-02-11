import { useState } from "react";
import api from "../../services/api";
import styles from "./Modal.module.css";
import { data } from "react-router-dom";

function Cadastror({ closeModal, fetchFamilies, familyData }) {
    const [parentsName, setParentsName] = useState(familyData?.parents_name || "")
    const [address, setAddress] = useState(familyData?.address || "")
    const [number, setNumber] = useState(familyData?.number || "")
    const [childrenName, setChildrenName] = useState(familyData?.children_name || "")
    const [childrenAge, setChildrenAge] = useState(familyData?.children_age || "")

    async function handleFamily(e) {
        e.preventDefault();

            const data = {
                parents_name: parentsName,
                address: address,
                number: number,
                children_name: childrenName,
                children_age: childrenAge,
            }

         if (familyData && familyData.id) {
        await api.put(`/cadastrador/${familyData.id}`, data)
    } else {
        await api.post("/cadastrador",data)
        }
            fetchFamilies()
            closeModal()
    }

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.titleCloseBtn}>
                    <button onClick={closeModal}>×</button>
                </div>
                <h2> {familyData && familyData.id ? "Editar familia" : "Cadastrar Familia"}</h2>
                <form onSubmit={handleFamily}>
                    <div className={styles.centralized}>
                        <input
                            type="text"
                            placeholder="Nome dos Pais"
                            value={parentsName}
                            onChange={(e) => setParentsName(e.target.value )}
                        />
                        <input
                            type="text"
                            placeholder="Endereço"
                            value={address}
                            onChange={(e) => setAddress(e.target.value )}
                        />
                        <input
                            type="text"
                            placeholder="Número"
                            value={number}
                            onChange={(e) => setNumber( e.target.value )}
                        />
                        <input
                            type="text"
                            placeholder="Nome da Criança"
                            value={childrenName}
                            onChange={(e) => setChildrenName( e.target.value )}
                        />
                        <input
                            type="number"
                            placeholder="Idade da Criança"
                            value={childrenAge}
                            onChange={(e) => setChildrenAge(e.target.value )}
                        />
                        <button type="submit"> {familyData && familyData.id ? "salvar alterações" : "Cadastrar"}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Cadastror;
