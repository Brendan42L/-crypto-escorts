import React from "react";
import bl from "./bl";
import Image from "next/image";
import { Grid } from "@mui/material";
import TextInput from "../../inputs/Input";
import Btn from "../../btn/Save";

const Contact = () => {
  const {
    website,
    phone,
    email,
    twitter,
    insta,
    current,
    onSave,
    handleChange,
    change,
    moreInfo,
    handleInfo
  } = bl();

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const warning = {
    fontSize: "1.1em",
    letterSpacing: "1px",
    margin: "1em 0 0 0",
    color: "red",
    lineHeight: "1.8",
    textTransform: "capitalize",
  };

  const imageGrid = {
    cursor: "pointer",
  };

  return (
    <>
      <Grid
        container
        spacing={4}
        align="center"
        sx={{ padding: "1em", marginBottom: "4em" }}
      >
        <Grid item xs={12}>
          <p style={warning}>
            All information entered below will be visible to clients
          </p>
        </Grid>
        <Grid item xs={12}>
          <TextInput
            onChange={handleChange}
            value={
              current === "website"
                ? website
                : current === "phone"
                ? phone
                : current === "email"
                ? email
                : current === "twitter"
                ? twitter
                : current === "instagram"
                ? insta
                : null
            }
            type={
              current === "website"
                ? "text"
                : current === "phone"
                ? "tel"
                : current === "email"
                ? "email"
                : current === "twitter"
                ? "text"
                : current === "instagram"
                ? "text"
                : null
            }
            label={
              current === "website"
                ? "Enter Your Personal Website"
                : current === "phone"
                ? "Enter Your Mobile"
                : current === "email"
                ? "Enter Your Working Email"
                : current === "twitter"
                ? "Enter Your Twitter Handle"
                : current === "instagram"
                ? "Enter Your Instagram Handle"
                : null
            }
            helperText={
              current === "website"
                ? "Personal Website"
                : current === "phone"
                ? "Mobile"
                : current === "email"
                ? "Email"
                : current === "twitter"
                ? "Twitter"
                : current === "instagram"
                ? "Instagram"
                : null
            }
          />
        </Grid>
        <Grid item xs={6} sx={imageGrid}>
          <Image
            onClick={() => change("twitter")}
            loader={myLoader}
            alt="Twitter"
            src={current === "twitter" ? "/twitterC.png" : "/twitter.png"}
            height="50px"
            width="50px"
            objectFit="cover"
            quality={100}
          />
        </Grid>

        <Grid item xs={6} sx={imageGrid}>
          <Image
            onClick={() => change("instagram")}
            loader={myLoader}
            alt="Instagram"
            src={current === "instagram" ? "/instagramC.png" : "/instagram.png"}
            height="50px"
            width="50px"
            objectFit="cover"
            quality={100}
          />
        </Grid>

        <Grid item xs={4} sx={imageGrid}>
          <Image
            onClick={() => change("website")}
            loader={myLoader}
            alt="Personal Website"
            src={
              current === "website"
                ? "/world-wide-webC.png"
                : "/world-wide-web.png"
            }
            height="50px"
            width="50px"
            objectFit="cover"
            quality={100}
          />
        </Grid>
        <Grid item xs={4} sx={imageGrid}>
          <Image
            onClick={() => change("phone")}
            loader={myLoader}
            alt="Mobile Number"
            src={current === "phone" ? "/whatsappC.png" : "/whatsapp.png"}
            height="50px"
            width="50px"
            objectFit="cover"
            quality={100}
          />
        </Grid>

        <Grid item xs={4} sx={imageGrid}>
          <Image
            onClick={() => change("email")}
            loader={myLoader}
            alt="Email"
            src={current === "email" ? "/emailC.png" : "/email.png"}
            height="50px"
            width="50px"
            objectFit="cover"
            quality={100}
          />
        </Grid>

        <Grid item xs={12}>
        <TextInput
           multiline={true}
           rows={5}
            onChange={handleInfo}
            value={moreInfo}
            type="text"
            label="Further Contact Information"
            helperText="Further Contact Information"
          />
        </Grid>

       

        <Grid item xs={12} sx={{ margin: "2em 0 0 0" }}>
          <Btn function={onSave} name={"Save All"} />
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
