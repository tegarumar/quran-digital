import axios from 'axios';

export async function getAyat(id: string) {
    try {
        const res = await axios.get(`https://al-quran-8d642.firebaseio.com/surat/${id}.json`);
        if (res.status !== 200) {
            throw new Error(`Error: ${res.status}`);
        }
        console.log("Fetch success:", res.data);
        return res.data;
    } catch (error) {
        console.error("Fetch failed:", error);
        return null;
    }
}