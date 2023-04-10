import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  query,
  where,
  updateDoc,
  doc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5Mohy4CdLPa1SS-Vodp6Q_QLWIEOaYKY",
  authDomain: "tran-4036c.firebaseapp.com",
  projectId: "tran-4036c",
  storageBucket: "tran-4036c.appspot.com",
  messagingSenderId: "25009059532",
  appId: "1:25009059532:web:153b130a69461201297469",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const vehiculosRef = collection(db, "Vehiculos");

export const getVehiculos = async (setVehiculos) => {
  const vehiculosSnapshot = await getDocs(vehiculosRef);
  const vehiculosData = vehiculosSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  setVehiculos(vehiculosData);
};

export const propietariosRef = collection(db, "Propietarios");

export const getPropietarios = async (setPropietarios) => {
  const propietariosSnapshot = await getDocs(propietariosRef);
  const propietariosData = propietariosSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  setPropietarios(propietariosData);
};

export const setProp = async (propietario) => {
  await addDoc(propietariosRef, propietario);
};

export const setVeh = async (vehiculo) => {
  await addDoc(vehiculosRef, vehiculo);
};

//get multas
export const multasRef = collection(db, "Multas");

export const getMultas = async (setMultas) => {
  const multasSnapshot = await getDocs(multasRef);
  const multasData = multasSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  setMultas(multasData);
};

export const setMultas = async (multa) => {
  await addDoc(multasRef, multa);
};

// Eliminar de la base de datos por la placa en la tabla vehiculos y propietarios
export const deleteVehiculo = async (placa) => {
  const q = query(vehiculosRef, where("placa", "==", placa));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(async (doc) => {
    await deleteDoc(doc.ref);
  });
  const q2 = query(propietariosRef, where("placa", "==", placa));
  const querySnapshot2 = await getDocs(q2);
  querySnapshot2.forEach(async (doc) => {
    await deleteDoc(doc.ref);
  });
};

export const getOneVehiculo = async (setVehiculo, placa, setLoading) => {
  setLoading(true);
  const q = query(vehiculosRef, where("placa", "==", placa));
  const vehiculoSnapshot = await getDocs(q);
  const vehiculoData = vehiculoSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  setVehiculo(vehiculoData[0]);
  setLoading(false);
};

export const getOnePropietario = async (setPropietario, placa, setLoading) => {
  setLoading(true);
  const q = query(propietariosRef, where("placa", "==", placa));
  const propietarioSnapshot = await getDocs(q);
  const propietarioData = propietarioSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  setPropietario(propietarioData[0]);
  setLoading(false);
};

export const updateVehiculo = async (id, vehiculo, setLoading) => {
  setLoading(true);
  await updateDoc(doc(vehiculosRef, id), vehiculo);
  setLoading(false);
};

export const updatePropietario = async (id, propietario, setLoading) => {
  setLoading(true);
  await updateDoc(doc(propietariosRef, id), propietario);
  setLoading(false);
};
