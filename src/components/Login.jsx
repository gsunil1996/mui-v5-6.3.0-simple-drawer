import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

const Login = () => {
    const [loginState, setLoginState] = useState(false);
    const navigate = useNavigate()

    const handleExternalLogin = () => {
        localStorage.setItem("type", "external");
        setLoginState(!loginState)
        navigate('/external-products')
    }

    return (
        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "-80px" }} >
            <Card style={{ maxWidth: "max-content", marginTop: "30px", background: "#c4da4a" }}>
                <CardContent>
                    <h1>External Users</h1>
                    <Button variant="contained" color="error" onClick={() => handleExternalLogin()} >
                        External User Login
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login