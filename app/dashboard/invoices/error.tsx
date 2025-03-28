'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}:{
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className='flex h-full flex-col items-center justify-center'>
            <h2 className='text-center'>Something went wrong!!!!!!</h2>
            <button 
                className='mt-4 rounded-md bg-emerald-500 px-4 py-2 text-sm text-white tansition-colors hover:bg-emerald-400'
                onClick={
                    () => reset()
                }
            >
                Try again
            </button>
        </main>
    )
}
