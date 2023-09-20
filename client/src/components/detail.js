import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function Detail() {
  const [detail, setDetail] = useState();
  const params = useParams();
  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5050/record/${params.id}`
        );
        console.log(response.data);
        setDetail(response.data);
      } catch (error) {}
    };
    getDetail();
  }, []);
  return (
    <div>
      {detail ? (
        <div>
          <h1>{detail.title}</h1>
          <img src={detail.cover} alt="" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
