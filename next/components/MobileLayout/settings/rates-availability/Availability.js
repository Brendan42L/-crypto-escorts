import styles from "./ratesAvailability.module.css";

import bl from "./blRates";
import { MenuItem, Grid, InputAdornment, TextField, Chip } from "@mui/material";
import MobileTimePicker from "@mui/lab/MobileTimePicker";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const time = {
  color: "#FFF !important",
  "& :-webkit-autofill": {
    transitionDelay: "999999999s",
  },
  "& input": {
    color: "RGB(255, 255, 255, 1) !important",
    cursor: "pointer !important",
    border: "none",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
};
const Availability = () => {
  return (
    <>
      <Grid item xs={12} sx={{ marginTop: "1.5em" }}>
        <table className={styles.tableRates}>
          <tr>
            <th>Aval</th>
            <th>Day</th>
            <th>From</th>
            <th>To</th>
          </tr>
          <tr>
            <td>
              <RadioButtonUncheckedIcon />
            </td>
            <td>Mon</td>
            <td>
              <MobileTimePicker
                // value={startTimeModel}
                // onChange={startTime}
                renderInput={(params) => (
                  <>
                    <TextField name="start" sx={time} {...params} />
                  </>
                )}
              />
            </td>
            <td>
              {" "}
              <MobileTimePicker
                // value={startTimeModel}
                // onChange={startTime}
                renderInput={(params) => (
                  <>
                    <TextField
                      name="start"
                      sx={time}
                      {...params}
                    />
                  </>
                )}
              />
            </td>
          </tr>
          <tr>
            <td>
              <RadioButtonUncheckedIcon />
            </td>
            <td>Tue</td>
            <td>
              {" "}
              <MobileTimePicker
                // value={startTimeModel}
                // onChange={startTime}
                renderInput={(params) => (
                  <>
                    <TextField
                      name="start"
                      sx={time}
                      {...params}
                    />
                  </>
                )}
              />
            </td>
            <td>
              {" "}
              <MobileTimePicker
                // value={startTimeModel}
                // onChange={startTime}
                renderInput={(params) => (
                  <>
                    <TextField
                      name="start"
                      sx={time}
                      {...params}
                    />
                  </>
                )}
              />
            </td>
          </tr>
          <tr>
            <td>
              <RadioButtonUncheckedIcon />
            </td>
            <td>Wed</td>
            <td>
              {" "}
              <MobileTimePicker
                // value={startTimeModel}
                // onChange={startTime}
                renderInput={(params) => (
                  <>
                    <TextField
                      name="start"
                      sx={time}
                      {...params}
                    />
                  </>
                )}
              />
            </td>
            <td>
              {" "}
              <MobileTimePicker
                // value={startTimeModel}
                // onChange={startTime}
                renderInput={(params) => (
                  <>
                    <TextField
                      name="start"
                      sx={time}
                      {...params}
                    />
                  </>
                )}
              />
            </td>
          </tr>
          <tr>
            <td>
              <RadioButtonUncheckedIcon />
            </td>
            <td>Thu</td>
            <td>
              {" "}
              <MobileTimePicker
                // value={startTimeModel}
                // onChange={startTime}
                renderInput={(params) => (
                  <>
                    <TextField
                      name="start"
                      sx={time}
                      {...params}
                    />
                  </>
                )}
              />
            </td>
            <td>
              {" "}
              <MobileTimePicker
                // value={startTimeModel}
                // onChange={startTime}
                renderInput={(params) => (
                  <>
                    <TextField
                      name="start"
                      sx={time}
                      {...params}
                    />
                  </>
                )}
              />
            </td>
          </tr>
          <tr>
            <td>
              <RadioButtonUncheckedIcon />
            </td>
            <td>Fri</td>
            <td>
              {" "}
              <MobileTimePicker
                // value={startTimeModel}
                // onChange={startTime}
                renderInput={(params) => (
                  <>
                    <TextField
                      name="start"
                      sx={time}
                      {...params}
                    />
                  </>
                )}
              />
            </td>
            <td>
              {" "}
              <MobileTimePicker
                // value={startTimeModel}
                // onChange={startTime}
                renderInput={(params) => (
                  <>
                    <TextField
                      name="start"
                      sx={time}
                      {...params}
                    />
                  </>
                )}
              />
            </td>
          </tr>
          <tr>
            <td>
              <RadioButtonUncheckedIcon />
            </td>
            <td>Sat</td>
            <td>
              {" "}
              <MobileTimePicker
                // value={startTimeModel}
                // onChange={startTime}
                renderInput={(params) => (
                  <>
                    <TextField
                      name="start"
                      sx={time}
                      {...params}
                    />
                  </>
                )}
              />
            </td>
            <td>
              {" "}
              <MobileTimePicker
                // value={startTimeModel}
                // onChange={startTime}
                renderInput={(params) => (
                  <>
                    <TextField
                      name="start"
                      sx={time}
                      {...params}
                    />
                  </>
                )}
              />
            </td>
          </tr>
          <tr>
            <td>
              <RadioButtonUncheckedIcon />
            </td>
            <td>Sun</td>
            <td>
              {" "}
              <MobileTimePicker
                // value={startTimeModel}
                // onChange={startTime}
                renderInput={(params) => (
                  <>
                    <TextField
                      name="start"
                      sx={time}
                      {...params}
                    />
                  </>
                )}
              />
            </td>
            <td>
              {" "}
              <MobileTimePicker
                // value={startTimeModel}
                // onChange={startTime}
                renderInput={(params) => (
                  <>
                    <TextField
                      name="start"
                      sx={time}
                      {...params}
                    />
                  </>
                )}
              />
            </td>
          </tr>
        </table>
      </Grid>
    </>
  );
};

export default Availability;
