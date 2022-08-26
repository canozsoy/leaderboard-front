import axios from "axios";

export default async function fetchData() {
    try {
        const defaultUserId = "6308cfa26973c514fe10b283";
        const data = await axios.get(`http://195.201.25.170:3000/api/v1/user/${defaultUserId}/score`);
        if (data?.data?.status === "SUCCESS") {
            return data.data;
        }
    } catch (err) {
        console.error(err);
    }
}

