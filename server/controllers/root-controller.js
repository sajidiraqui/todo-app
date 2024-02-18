export const getRoot = async (req, res) => {
  try {
    res.status(200).send("Hello Get");
  } catch (error) {
    console.error("Server error", error);
  }
};

// export const postRoot = async((req, res) => {
//   try {
//     console.log(req.body);
//     console.log(req.params);
//     console.log(req.query);
//     res.status(200).send("Hello Post");
//   } catch (error) {
//     console.log("Server Error", error);
//   }
// });

async function postRoot(req, res) {
  try {
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    res.status(200).send("Hello Post");
  } catch (error) {
    console.log("Server Error", error);
  }
}

export { postRoot };
