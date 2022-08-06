import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import './PageNotFound.css';

const PageNotFound = () => {
  let navigate = useNavigate();

    return (
        <div className="error-content">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="error-text">
                            <h5 className="error text-danger">404 Error</h5>
                            <div className="im-sheep">
                                <div className="top">
                                    <div className="body"></div>
                                    <div className="head">
                                        <div className="im-eye one"></div>
                                        <div className="im-eye two"></div>
                                        <div className="im-ear one"></div>
                                        <div className="im-ear two"></div>
                                    </div>
                                </div>
                                <div className="im-legs">
                                    <div className="im-leg"></div>
                                    <div className="im-leg"></div>
                                    <div className="im-leg"></div>
                                    <div className="im-leg"></div>
                                </div>
                            </div>
                            <h4 className="P-error-h">Oops! This page Could Not Be Found!</h4>
                            <p className="P-error">Sorry bit the page you are looking for does not exist, have been removed or name changed.</p>
                            <Button
                            type="button"
                            variant="contained"
                            color="primary"
                            onClick={()=>{navigate('/home')}}
                            >
                            Home
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageNotFound