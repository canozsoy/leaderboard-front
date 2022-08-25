import axios from "axios";

export default async function fetchData() {
    try {
        const defaultUserId = "6307c55cfb9a0ecdf0e8d412";
        const data = await axios.get(`http://195.201.25.170:3000/api/v1/user/${defaultUserId}/score`);
        if (data?.data?.status === "SUCCESS") {
            return data.data;
        }
    } catch (err) {
        console.error(err);
    }
}

