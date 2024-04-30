import axios from "axios";

const getPekerja = () => async (dispatch) => {
  try {
    const worker = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/user/worker/data`
    );
    const result = worker.data;
    console.log(result);
    dispatch({ type: "GET_ALL_PEKERJA", payload: result });
  } catch (err) {
    console.log(err.message);
  }
};

export default getPekerja;
