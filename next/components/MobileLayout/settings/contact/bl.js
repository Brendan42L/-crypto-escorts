import { useState, useContext, useEffect } from "react";
import axios from "axios";
import AppContext from "../../../../lib/AppContext";

const bl = () => {
  const { throwMessage, user } = useContext(AppContext);
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [insta, setInsta] = useState("");
  const [current, setCurrent] = useState("twitter");

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
        setWebsite(res.data.website);
        setPhone(res.data.workMobile);
        setEmail(res.data.workEmail);
        setTwitter(res.data.twitter);
        setInsta(res.data.instagram);
      })
      .catch((error) => {
        throwMessage("error", "Something went wrong");
      });
  };

  const handleChange = (e) => {
    switch (current) {
      case "twitter":
        console.log("here inside");
        setTwitter(e.target.value);
        break;
      case "website":
        setWebsite(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "instagram":
        setInsta(e.target.value);
        break;
    }
  };

  const onSave = () => {
    const contactInfo = {
      website: website,
      workMobile: phone,
      workEmail: email,
      twitter: twitter,
      instagram: insta,
    };
    axios
      .put(
        `${process.env.NEXT_PUBLIC_REACT_APP_SERVER_URL}/model/update`,
        contactInfo
      )
      .then((res) => {
        fetchUser();
        throwMessage("success", "Updated");
      })
      .catch((error) => {
        throwMessage("error", "Something went wrong");
      });
  };

  const change = (link) => {
    switch (link) {
      case "twitter":
        setCurrent("twitter");
        break;
      case "website":
        setCurrent("website");
        break;
      case "phone":
        setCurrent("phone");
        break;
      case "email":
        setCurrent("email");
        break;
      case "instagram":
        setCurrent("instagram");
        break;
    }
  };

  return {
    website,
    phone,
    email,
    twitter,
    insta,
    current,
    onSave,
    handleChange,
    change,
  };
};

export default bl;
