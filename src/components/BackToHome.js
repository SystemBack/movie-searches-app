import React from 'react';
import { Link } from 'react-router-dom';

export const BackToHomeButton = () => (
    <Link
    to='/'
    className="button is-info">
        Back to home.
    </Link>
)