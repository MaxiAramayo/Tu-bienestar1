import { useState } from "react";
import {
  addDoc,
  deleteDoc,
  setDoc,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  getDocs,
  collection,
  where,
  query,
  arrayRemove,
} from "firebase/firestore";
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
  uploadBytes,
} from "firebase/storage";
import { db } from "../firebase/firebase";
import { storage } from "../firebase/firebase";
import "firebase/database";

const useFirebase = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState([]);

  const searchData = async () => {
    try {
      setLoading((prev) => ({ ...prev, searchData: true }));
      const medicamentosCollection = collection(db, "medicamentos");
      const querySnapshot = await getDocs(medicamentosCollection);
      const medicamentosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setData(medicamentosData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading((prev) => ({ ...prev, searchData: false }));
    }
  };

  const addMedicamento = async (newMedicamento) => {
    try {
      const medicamentosCollection = collection(db, "medicamentos");
      await addDoc(medicamentosCollection, newMedicamento);
      // Actualiza el estado después de agregar
      setData([...data, newMedicamento]);
    } catch (error) {
      console.error("Error al agregar medicamento:", error);
    }
  };

  const deleteMedicamento = async (id) => {
    try {
      const medicamentoRef = doc(db, "medicamentos", id);
      await deleteDoc(medicamentoRef);
      // Actualiza el estado después de eliminar
      setData(data.filter((medicamento) => medicamento.id !== id));
    } catch (error) {
      console.error("Error al eliminar medicamento:", error);
    }
  };

  const updateMedicamento = async (id, newData) => {
    try {
      const medicamentoRef = doc(db, "medicamentos", id);
      await updateDoc(medicamentoRef, newData);
      // Actualiza el estado después de modificar
      setData((prevState) =>
        prevState.map((medicamento) =>
          medicamento.id === id ? { ...medicamento, ...newData } : medicamento
        )
      );
    } catch (error) {
      console.error("Error al modificar medicamento:", error);
    }
  };

  return {
    data,
    loading,
    error,
    addMedicamento,
    deleteMedicamento,
    updateMedicamento,
    searchData,
  };
};

export default useFirebase;
