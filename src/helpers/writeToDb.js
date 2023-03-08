import { doc, setDoc, collection, addDoc } from "firebase/firestore";

const writeToDb = (db, node, data, docId = "", merge = true) => {
  return new Promise((res, rej) => {
    if (!db) rej("Invalid DB Reference");
    if (!node) rej("Invalid Node");
    if (typeof data !== "object") rej("Data Should be an object");
    if (docId == "") {
      addDoc(collection(db, node), data)
        .then((docRef) => res(docRef.id))
        .catch((e) => rej(e.message));
    } else {
      const cityRef = doc(db, node, docId);
      setDoc(cityRef, data, { merge: merge })
        .then(() => res(true))
        .catch((e) => rej(e.message));
    }
  });
};

export default writeToDb;
