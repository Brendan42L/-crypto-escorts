import React from "react";
import Selects from "../../inputs/Selects";
import TextInput from "../../inputs/Input";
import bl from "./bl";
import { MenuItem, Grid } from "@mui/material";

const RatesAvailability = () => {
  const {
    handleDuration,
    handlePrice,
    duration,
    getTimes,
    price,
    extra,
    handleExtra,
  } = bl();

  return (
    <Grid container spacing={2} sx={{ padding: "1em" }}>
      <Grid item xs={6}>
        <Selects
          id="duration"
          helperText={"Duration"}
          labelId="duration"
          value={duration ? duration : ""}
          label="Duration"
          name="duration"
          onChange={handleDuration}
          select={getTimes().map((item, index) => (
            <MenuItem value={item.value} key={index}>
              {item.menu}
            </MenuItem>
          ))}
        />
      </Grid>
      <Grid item xs={6}>
        <Selects
          id="price"
          helperText={"Price"}
          labelId="duration"
          value={price ? price : ""}
          label="Price"
          name="time"
          onChange={handlePrice}
          select={getTimes().map((item, index) => (
            <MenuItem value={item.value} key={index}>
              {item.menu}
            </MenuItem>
          ))}
        />
      </Grid>

      <Grid item xs={12}>
        <TextInput
          multiline={true}
          onChange={handleExtra}
          name="extra"
          value={extra ? extra : ""}
          label={!extra && "Extra Info"}
          type="text"
          helperText={"Extra Info"}
          rows={4}
        />
      </Grid>
    </Grid>
  );
};

export default RatesAvailability;
