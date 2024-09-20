import { collection, query, where ,getDocs, addDoc, doc, getDoc, setDoc, deleteDoc, QuerySnapshot, Query } from "firebase/firestore"

class JovemFirebaseService {

    static listar(db, callback) {
        const c = collection (db, "jovens")
        getDocs(c)

        .then(
            (QuerySnapshot) => {
                const jovens = []
                QuerySnapshot.forEach(
                    (jovem) => {
                        jovens.push (
                            {
                                id:jovem.id,
                                ...jovem.data()
                            }
                        )
                    }
                )
                callback(jovens)
            }
        )
        .catch (error => console.log(error))
    }

    static deletar(db, callback, id) {
        const docRef = doc(db, "jovens", id)
        deleteDoc(docRef)
        .then(
            () => {
                callback({id})
            }
        )
        .catch(error => console.log(error))
    }

    static criar(db, callback, jovem) {
        const c = collection(db, "jovens")
        addDoc(c, jovem)
        .then(
            (jovem) => {
                callback({id:jovem.id})
            }
        )
        .catch(error => console.log(error))

    }

    static getById(db, callback, id) {
        
        const docRef = doc(db, "jovens", id)
        getDoc(docRef)
        .then(
            (docSnap) => {
                callback(docSnap.data())
            }
        )
        .catch(error => console.log(error))
    }

    static atualizar(db, callback, id, jovemAtualizado) {
        const docRef = doc(db,"jovens",id)
        setDoc(docRef,jovemAtualizado)
        .then(
            () => {
                callback({id})
            }
        )
        .catch(error => console.log(error))
    }

    static buscarRgCpf(db, callback, rg, cpf) {
        const c = collection(db, "jovens");
        const q = query(c, where("rg", "==", rg), where("cpf", "==", cpf));

        getDocs(q)
    .then((querySnapshot) => {
        if (!querySnapshot.empty) {
            const jovem = querySnapshot.docs[0]; // Assume que RG e CPF são únicos
            callback({ id: jovem.id, ...jovem.data() });
        } else {
            callback(null); // Retorna null se não houver correspondência
        }
    })
    .catch((error) => console.log(error));
    }

}

export default JovemFirebaseService