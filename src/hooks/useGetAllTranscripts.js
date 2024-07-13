import {useState, useEffect} from 'react';
import { getTranscripts } from "../services/transcript.service";

const useGetAllTranscripts = () => {
    const [transcripts, setTranscripts] = useState([]);

    useEffect(() => {
        getTranscripts()
            .then((data) => setTranscripts(data))
            .catch((error) => console.error('Error fetching transcripts:', error));
    }, []);
    return { transcripts };
};

export default useGetAllTranscripts;