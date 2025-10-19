'use client';
import { useState, useEffect, useRef } from 'react';
import {
  onSnapshot,
  query,
  collection,
  where,
  limit,
  orderBy,
  startAfter,
  endBefore,
  limitToLast,
  type DocumentData,
  type Query,
} from 'firebase/firestore';
import { useFirestore } from '../provider';
import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError } from '../errors';

export function useCollection<T>(path: string, q?: (ref: any) => Query) {
  const firestore = useFirestore();
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const queryRef = useRef(q);
  queryRef.current = q;

  useEffect(() => {
    setLoading(true);
    const collectionRef = collection(firestore, path);
    const finalQuery = queryRef.current ? queryRef.current(collectionRef) : collectionRef;

    const unsubscribe = onSnapshot(
      finalQuery,
      (snapshot) => {
        const result: T[] = [];
        snapshot.forEach((doc) => {
          result.push({ id: doc.id, ...doc.data() } as T);
        });
        setData(result);
        setLoading(false);
      },
      async (err) => {
        const permissionError = new FirestorePermissionError({
          path: (finalQuery as any)._path?.segments.join('/'),
          operation: 'list',
        });
        errorEmitter.emit('permission-error', permissionError);
        setError(permissionError);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [path, firestore]);

  return { data, loading, error };
}
