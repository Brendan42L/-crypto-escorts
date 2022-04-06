import { useState } from "react";

const bl = () => {
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [extra, setExtra] = useState("");

  const [rates, setRates] = useState([]);

  const getTimes = () => {
    const times = [
      { value: "15", menu: "15 Mins" },
      { value: "30", menu: "30 Mins" },
    ];
    return times;
  };

  const handleDuration = (event) => {
    setDuration(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleExtra = (event) => {
    setExtra(event.target.value);
  };

  return {
    handleDuration,
    handlePrice,
    duration,
    getTimes,
    price,
    extra,
    handleExtra,
  };
};
0;
export default bl;
