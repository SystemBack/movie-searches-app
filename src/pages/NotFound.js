import React from 'react';
import { BackToHomeButton } from '../components/BackToHome';

export const NotFound = () => (
    <div>
        <h1 className="title">404!</h1>
        <h2 className="subtitle">Page not found.</h2>
        <BackToHomeButton/>
    </div>
)