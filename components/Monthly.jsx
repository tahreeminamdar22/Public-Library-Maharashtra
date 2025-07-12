'use client';

import React from 'react';
import Month from './Month'; 
export default function Monthly() {
    return(
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-white text-center px-4 py-10">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Best Mock Tests for CA Foundations</h1>
                <p className="text-lg text-gray-600 mb-8">Get Access to Free CA Mock Tests</p>
                <Month />
            </div>

        </>
    )
}