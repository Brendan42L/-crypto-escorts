import dbConnect from "../../../../../lib/dbConnect";
import Model from "../../../../../models/model";

const handler = async (req, res) => {
  await dbConnect();

  try {
    const _id = req.query.id;
    await Model.findById(_id)
      .select(
        " bodyType title fName lName gender eyes age height hair bio cup country stateOne cityOne stateTwo cityTwo stateThree cityThree stateFour cityFour stateFive cityFive touring  nationality specialties coWorkers notAvailable tours flyMeRates touringRates website workMobile workEmail twitter instagram placeOfService preferredContact categories services servicesInfo rates ratesNotes availability contactInfoText"
      )
      .then((result) => {
        res.status(200).json(result);
        res.end();
      })
      .catch((err) => {
        res.status(500).json("Internal db error");
        res.end();
      });
  } catch (error) {
    res.status(500).json("Internal server error");
    res.end();
  }
};
export default handler;
