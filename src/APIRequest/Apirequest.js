import axios from "axios";
export const getCount = async (e) => {
  const res = await fetch("https://dataneuron-m6yg.onrender.com/count", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

export const getAllData = async (e) => {
  const res = await fetch("https://dataneuron-m6yg.onrender.com/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};

export const updateData = async (id, name) => {
  const res = await axios.patch(
    `https://dataneuron-m6yg.onrender.com/update/${id}`,
    name
  );
  return res;
};
