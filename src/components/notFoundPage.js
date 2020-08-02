import React from 'react';
import { Link } from "react-router-dom";

const notFoundPage = () => (
    <div>
        Error 404! Not found.<br />
        <Link to="/">Go Home</Link>
    </div>
);

export default notFoundPage;