// Use the client directive for using usePathname hook.
'use client'

// Use usePathname for catching route name.
import { usePathname } from 'next/navigation';
// import React, { ReactNode } from 'react';

export const CSRLayoutProvider = (
//     { children }: {
//     children: React.ReactNode
//   }
  ) => {
    const pathname = usePathname();
    // console.log('Pathname: ', pathname);
    return (
        <>
            {'Test'}
        </>
    )
};
