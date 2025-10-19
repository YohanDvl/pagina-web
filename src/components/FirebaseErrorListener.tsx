'use client';
import { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';

// This component listens for custom Firebase permission errors and throws them
// to make them visible in the Next.js development overlay.
// It only runs in development.
export default function FirebaseErrorListener() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    const handleError = (error: Error) => {
      // Throw the error so Next.js can catch it and show the overlay
      setTimeout(() => {
        throw error;
      }, 0);
    };

    errorEmitter.on('permission-error', handleError);

    return () => {
      errorEmitter.off('permission-error', handleError);
    };
  }, []);

  return null;
}
