import axios from "axios";

// 사용자 리스트 조회
export const getUsers = async () => {
  try {
    const users = await axios.get("http://10.0.2.2:4000/users", {
      mode: "cors",
    });
    return users.data;
  } catch (err) {
    throw err;
  }
};

export const createUser = async (userInfo) => {
  try {
    await axios.post("http://10.0.2.2:4000/users", userInfo);
  } catch (error) {
    throw error;
  }
};
