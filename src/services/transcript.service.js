import { BASE_URL } from "../config/config";

export async function getTranscripts() {
    const response = await fetch(`${BASE_URL}/transcripts`);
    if (!response.ok) {
        throw new Error('Failed to fetch transcripts');
    }
    return await response.json();
}

export async function getTranscriptById(id) {
    const response = await fetch(`${BASE_URL}/transcripts/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch transcript details');
    }
    return await response.json();
}

export async function getRandomTranscript() {
    const response = await fetch(`${BASE_URL}/transcripts/random`);
    if (!response.ok) {
        throw new Error('Failed to fetch a ransom transcript');
    }
    return await response.json();
}