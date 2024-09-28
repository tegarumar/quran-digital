import axios from 'axios';

export async function getAyat(id: string) {
    try {
        const res = await axios.get(`https://al-quran-8d642.firebaseio.com/surat/${id}.json`);
        if (res.status !== 200) {
            throw new Error(`Error: ${res.status}`);
        }
        return res.data;
    } catch (error) {
        console.error("Fetch failed:", error);
        return null;
    }
}

export async function getAyatV2(id:string) {
    try {
        const res = await axios.get(`https://api.quran.gading.dev/surah/${id}`);
        if (res.status == 429) {
            throw new Error(`Error: ${res.status}`);
        }
        return res.data.data.verses;
    } catch (error) {
        console.error("Fetch failed:", error);
        return null;
    }
}