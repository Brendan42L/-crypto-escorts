import { useState, useContext, useEffect } from "react";
import axios from "axios";
import AppContext from "../../../../lib/AppContext";

const blAval = () => {
  const { throwMessage, user } = useContext(AppContext);
  const [duration, setDuration] = useState("");



  

  // useEffect(() => {
  //   if (user._id) {
  //     fetchUser();
  //   }
  // }, []);

  // const fetchUser = () => {
  //   axios
  //     .get(
  //       `${process.env.NEXT_PUBLIC_REACT_APP_SERVER_URL}/model/read/${user._id} `
  //     )
  //     .then((res) => {
  //       setRates(res.data.rates);
  //       setExtraNotes(res.data.ratesNotes);
  //     })
  //     .catch((error) => {
  //       throwMessage("error", "Something went wrong");
  //     });
  // };

 

  // const save = (rate) => {
  //   axios
  //     .put(`${process.env.NEXT_PUBLIC_REACT_APP_SERVER_URL}/model/update`, {
  //       rates: !rate ? rates : [],
  //       ratesNotes: extraNotes,
  //     })
  //     .then((res) => {
  //       throwMessage("success", "Updated");
  //     })
  //     .catch((error) => {
  //       throwMessage("error", "Something went wrong");
  //     });
  // };

  return {
   
  };
};

export default blAval;
