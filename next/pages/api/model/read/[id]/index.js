import dbConnect from "../../../../../lib/dbConnect";
import Model from "../../../../../models/model";

const handler = async (req, res) => {
  await dbConnect();

  try {
    const _id = req.query.id;
    await Model.findById(_id)
      .select(
        "fName lName gender age height hair bio cup country stateOne cityOne stateTwo cityTwo stateThree cityThree stateFour cityFour stateFive cityFive touring  nationality specialties coWorkers notAvailable tours website workMobile workEmail twitter instagram"
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
