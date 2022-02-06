import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

export const useDocument = (collection, id) => {
  const [document, setDocument] = useState([]);
  const [error, setError] = useState(null);

  // realtime  document data
  useEffect(() => {
    const ref = projectFirestore.collection(collection).doc(id);

    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        // need to make sure the data exists
        if (snapshot.data()) {
          setDocument({ ...snapshot.data(), id: snapshot.id });
          setError(null);
        } else {
          setError("No such document exists.");
        }
      },
      (err) => {
        console.log(err.message);
        setError("failed to get document");
      }
    );

    // unsubscribe when unmount
    return () => unsubscribe();
  }, [collection, id]);

  return { document, error };
};
