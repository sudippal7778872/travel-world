import React, { useEffect, useMemo, useState } from 'react'
import {
    Stack,
    TextField,
    Button,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import imagesrc3 from "../image/company-img.jpg"
import HT from './HT';
import { render } from '@testing-library/react';

const HeadTail = () => {
    const [data, setData] = useState([]);

    const InitialState = {
        Type: "",
    };
    const validationSchema = Yup.object().shape({
        Type: Yup.string().required("Please select value from dropdown."),
    });

    const onSubmit = (values, props) => {
        console.log(values) 
    }
    const handleReset = (resetForm) => {
        resetForm();
    };
    const handleChange = () => {
        data.map((d, index) => {
            return (
                <h1 key={index}>{d}</h1>
            )
        })
    }

    return (
        <div style={{ height: '90vh' }}>

            <Formik
                initialValues={InitialState}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(props) => (
                    <Form>
                        <Stack direction='row' style={{ display: 'flex', justifyContent: 'center' }}>
                            <Stack style={{ width: '30%' }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Type
                                    </InputLabel>
                                    <Field
                                        as={Select}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={props.values.Type}
                                        error={props.errors.Type && props.touched.Type}
                                        label="Type"
                                        name="Type"
                                    >
                                        <MenuItem disabled value="">
                                            <em>You have not select Anything</em></MenuItem>
                                        <MenuItem value="H">Head</MenuItem>
                                        <MenuItem value="T">Tail</MenuItem>
                                    </Field>
                                </FormControl>
                                <div style={{ color: "red" }}>
                                    <ErrorMessage name="Type" />
                                </div>
                            </Stack>
                        </Stack>
                        <Stack
                            spacing={3}
                            direction="row"
                            mt={7}
                            style={{ display: "flex", justifyContent: "center" }}
                        >
                            <Button type="submit" variant="contained" onClick={onSubmit}>
                                Submit
                            </Button>
                            <Button
                                value={"Reset"}
                                style={{ backgroundColor: "grey", color: "white" }}
                                onClick={handleReset.bind(null, props.resetForm)}
                                type="button"
                            >
                                Clear All
                            </Button>
                        </Stack>
                    </Form>
                )}
            </Formik>
            <Stack>
                {data.map((d, index) => {
                    return (
                        <h1 key={index}>{d}</h1>

                    )
                })}
            </Stack>
        </div>
    )
}

export default HeadTail