import styles from "./ratesAvailability.module.css";
import Selects from "../../inputs/Selects";
import TextInput from "../../inputs/Input";
import Btn from "../../btn/Save";
import bl from "./blRates";
import { MenuItem, Grid, InputAdornment, TextField, Chip } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

const info = {
  fontSize: "1.3em",
  textAlign: "center",
  letterSpacing: "1px",
  fontWeight: "200",
  lineHeight: "1.7",
  textTransform: "capitalize",
};

const info2 = {
  fontSize: "0.9em",
  textAlign: "center",
  letterSpacing: "1px",
  fontWeight: "200",
  marginTop: "-1.9em",
};

const text = {
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "none !important",
  },
  margin: "1em 0 1em 0 ",
  borderRadius: "10px !important",
  margin: "0.8em auto !important",
  color: "#FFF !important",
  "& :-webkit-autofill": {
    transitionDelay: "999999999s",
  },
  backgroundColor: "RGB(255, 255, 255, 0.4)",

  label: {
    color: "RGB(255, 255, 255, 0.5) !important",
  },
  input: { color: "#FFF", fontSize: "16.5px" },
};

const label = {
  margin: "0 0 1em 0 ",
  padding: "0 0 0 0.5em",
  fontWeight: "400",
  letterSpacing: "1px",
  fontSize: "0.8em",
  color: "RGB(255, 255, 255, 1)",
  height: "10px !important",
};

const chips = {
  display: "flex",
  justifyContent: "space-evenly",
};

const warningText = {
  color: "red",
  fontWeight: "300",
  letterSpacing: "1px",
  fontSize: "1.2em",
  textAlign: "center",
  lineHeight: "1.6em",
};

const Rates = () => {
  const {
    handleDuration,
    handlePrice,
    duration,
    getTimes,
    price,
    extra,
    extraNotes,
    handleExtra,
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
  } = bl();

  return (
    <>
      <Grid item xs={12} align="center">
        {rates.length ? (
          <>
            <h3 style={info}>Your Rates</h3>

            <table className={styles.tableRates}>
              <tr>
                <th>Time</th>
                <th>Rate</th>
                <th>Info</th>
              </tr>
              {rates
                .sort((a, b) => a.duration - b.duration)
                .map((rate, index) => (
                  <>
                    <tr>
                      <td onClick={() => handleDeleteSelect(index)}>
                        {rate.duration}
                      </td>
                      <td onClick={() => handleDeleteSelect(index)}>
                        {rate.price}
                      </td>
                      <td onClick={() => handleDeleteSelect(index)}>
                        {rate.extra}
                      </td>

                      {deleteRow === index ? (
                        <td>
                          <ClearIcon
                            sx={{ color: "red" }}
                            onClick={() => handleDelete(rate.id)}
                          />
                        </td>
                      ) : null}
                    </tr>
                  </>
                ))}
            </table>
            <Grid item xs={12}>
              <TextInput
                multiline={true}
                rows={4}
                onChange={handleExtraNotes}
                name="extraNotes"
                value={extraNotes ? extraNotes : ""}
                type="text"
                helperText={
                  "Enter information or rates that are not listed above."
                }
              />
            </Grid>
            <Grid item xs={12} align="center" sx={{ marginTop: "2em" }}>
              <Btn function={() => save()} name={"SAVE RATES"} />
            </Grid>
          </>
        ) : (
          <h3>No Rates To Display</h3>
        )}
      </Grid>

      <Grid item xs={12} align="center">
        <p style={info}>Create Your Own Custom Rates</p>
      </Grid>

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
        <TextField
          sx={text}
          value={price ? price : ""}
          variant="outlined"
          onChange={handlePrice}
          name="extra"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoneyIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
        />
        <label style={label} for="price">
          Price
        </label>
      </Grid>

      <Grid item xs={12}>
        <TextInput
          onChange={handleExtra}
          name="extra"
          value={extra ? extra : ""}
          type="text"
          helperText={"Extra Info"}
        />
      </Grid>

      <Grid item xs={12} align="center">
        <Btn
          icon={<AddIcon />}
          function={() => addRate()}
          name={"Add New Rate"}
        />
      </Grid>

      <Grid item xs={12} align="center">
        {warning ? (
          <Grid item xs={12} align="center">
            <p style={warningText}>
              Warning changing selection will DELETE any saved rates
            </p>
          </Grid>
        ) : (
          <>
            <p style={info}>Choose From Our Pre-Filled Rates</p>
            <br />
            <p style={info2}>( You can then customize from there )</p>
          </>
        )}
      </Grid>
      <Grid item xs={12} align="center" sx={chips}>
        <Chip
          onClick={() => generatePreFill("$")}
          variant="outlined"
          sx={{
            color: selected === "$" ? "orange" : "white",
            border: selected === "$" ? " 1px solid orange" : " 1px solid white",
          }}
          label="$"
        />
        <Chip
          onClick={() => generatePreFill("$$")}
          variant="outlined"
          sx={{
            color: selected === "$$" ? "orange" : "white",
            border:
              selected === "$$" ? " 1px solid orange" : " 1px solid white",
          }}
          label="$$"
        />
        <Chip
          onClick={() => generatePreFill("$$$")}
          variant="outlined"
          sx={{
            color: selected === "$$$" ? "orange" : "white",
            border:
              selected === "$$$" ? " 1px solid orange" : " 1px solid white",
          }}
          label="$$$"
        />
        <Chip
          onClick={() => generatePreFill("$$$$")}
          variant="outlined"
          sx={{
            color: selected === "$$$$" ? "orange" : "white",
            border:
              selected === "$$$$" ? " 1px solid orange" : " 1px solid white",
          }}
          label="$$$$"
        />
      </Grid>
    </>
  );
};

export default Rates;
