import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LivestockDetail = () => {
  const { id } = useParams();
  const [livestock, setLivestock] = useState(null);

  useEffect(() => {
    const fetchLivestock = async () => {
      const { data } = await axios.get(`/api/listings/${id}`);
      setLivestock(data);
    };
    fetchLivestock();
  }, [id]);

  if (!livestock) return <div>Loading...</div>;

  return (
    <div>
      <h1>{livestock.name}</h1>
      <p>Category: {livestock.category}</p>
      <p>Price: ${livestock.price}</p>
      <p>Age: {livestock.age} months</p>
      <p>Seller: {livestock.seller.name}</p>
    </div>
  );
};

export default LivestockDetail;
