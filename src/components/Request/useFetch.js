import {useState, useEffect, useCallback} from "react";
import PropTypes from "prop-types";
import axiosApi from "./axios.client";
import * as React from "react";


export const useFetch = ({url}) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData =useCallback(async () => {
        let response = await axiosApi({
            'method': 'GET',
            'url': url,
        });
        let data = await response.data;

        setData(data);
        setLoading(false);
    },[url]);


    useEffect(() => {

        fetchData();

    }, [url, fetchData]);

    return [loading,data,setData,setLoading];

};

useFetch.propTypes = {
    url: PropTypes.string.isRequired,
};