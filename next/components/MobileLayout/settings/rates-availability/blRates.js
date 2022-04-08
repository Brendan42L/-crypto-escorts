import { useState, useContext, useEffect } from "react";
import axios from "axios";
import one from "../../../../lib/rates/one";
import AppContext from "../../../../lib/AppContext";

const blRates = () => {
  const { throwMessage, user } = useContext(AppContext);
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState(null);
  const [extra, setExtra] = useState("");
  const [deleteRow, setDeleteRow] = useState(0);
  const [warning, setWarning] = useState(false);
  const [selected, setSelected] = useState("");
  const [rates, setRates] = useState([]);
  const [extraNotes, setExtraNotes] = useState("");

  useEffect(() => {
    if (user._id) {
      fetchUser();
    }
  }, []);

  const fetchUser = () => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_REACT_APP_SERVER_URL}/model/read/${user._id} `
      )
      .then((res) => {
        setRates(res.data.rates);
        setExtraNotes(res.data.ratesNotes);
      })
      .catch((error) => {
        throwMessage("error", "Something went wrong");
      });
  };

  const getTimes = () => {
    const times = [
      { value: "15", menu: "15 Mins" },
      { value: "30", menu: "30 Mins" },
      { value: "45", menu: "45 Mins" },
      { value: "60", menu: "60 Mins" },
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

  const handleExtraNotes = (event) => {
    setExtraNotes(event.target.value);
  };

  const addRate = () => {
    if (price && duration) {
      const r = (Math.random() + 1).toString(36).substring(7);
      const newRate = {
        duration: duration,
        price: price,
        extra: extra,
        id: r,
      };
      setRates((oldArray) => [...oldArray, newRate]);
      setPrice(0);
      setExtra("");
      setDuration("");
    }
  };

  const handleDeleteSelect = (index) => {
    setDeleteRow(index);
  };

  const handleDelete = (id) => {
    setRates(rates.filter((item) => item.id !== id));
    if (rates.length === 1) {
      save(true);
    }
  };

  const generatePreFill = (packages) => {
    if (warning) {
      switch (packages) {
        case "$":
          setSelected("$");
          setRates(one);
          setWarning(false);
          break;
        case "$$":
          setSelected("$$");
          setRates(one);
          setWarning(false);
          break;
        case "$$$":
          setSelected("$$$");
          setRates(one);
          setWarning(false);
          break;
        case "$$$$":
          setSelected("$$$$");
          setRates(one);
          setWarning(false);
          break;
      }
    } else {
      setWarning(true);
    }
  };

  const save = (rate) => {
    axios
      .put(`${process.env.NEXT_PUBLIC_REACT_APP_SERVER_URL}/model/update`, {
        rates: !rate ? rates : [],
        ratesNotes: extraNotes,
      })
      .then((res) => {
        throwMessage("success", "Updated");
      })
      .catch((error) => {
        throwMessage("error", "Something went wrong");
      });
  };

  return {
    handleDuration,
    handlePrice,
    duration,
    getTimes,
    price,
    extra,
    handleExtra,
    extraNotes,
    handleExtraNotes,
    addRate,
    rates,
    deleteRow,
    handleDelete,
    handleDeleteSelect,
    generatePreFill,
    warning,
    selected,
    save,
  };
};

export default blRates;
