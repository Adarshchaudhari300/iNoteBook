const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

//Route 1---------------------------------------------------
//Create a user With post at /api/auth/createuser  -no login required
router.post(
  "/createuser",
  [
    // email must be email form
    body("email", "enter valid email").isEmail(),
    // name must be at least 3 chars long
    body("name", "enter valid name").isLength({ min: 3 }),
    // password must be at least 5 chars long
    body("password", "enter valid passsword").isLength({ min: 5 }),
  ],

  async (req, res) => {
    //if there are errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // console.log(req.body); //prints body in terminal
    // res.send(req.body); //prints body in thunderclint response

    try {
      //check user with this email already exist
      const email = req.body.email;
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ error: "this email already exist" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });

      const jwt_secret = "adarshiscoder";
      const data = {
        user: {
          id: user.id,
        },
      };
      const jwt_token = jwt.sign(data, jwt_secret);
      // console.log(jwt_token);

      //this sends files to mongo db
      res.json({ jwt_token });

      } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Code error in Route 1 of auth.js");
    }
  }
);

//Route 2-----------------------------------------------------
// authenticate a user with post at /api/auth/login -no login required
router.post(
  "/login",
  [
    // email must be email form
    body("email", "enter valid email").isEmail(),
    // password must be at least 5 chars long
    body("password", "passwod can't be black").exists(),
  ],

  async (req, res) => {
    //if there are errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // get email and password from body
    const { email, password } = req.body;

    try {
      //get email form db and compare it with body email
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Enter correct mail" });
      }

      //get password from db and comapre its hash to body password
      const comppass = await bcrypt.compare(password, user.password);
      if (!comppass) {
        return res.status(400).json({ error: "wrong password" });
      }

      //token is created
      const data = {
        user: {
          id: user.id,
        },
      };
      const jwt_secret = "adarshiscoder";
      const jwt_token = jwt.sign(data, jwt_secret);
      // console.log(jwt_token);
      //this sends files to mongo db
      res.json({ jwt_token });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Code error in Route 2 of auth.js ");
    }
  }
);

//Route 3---------------------------------------------------
// get logged in user details using post at /api/auth/getuser  login required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userid = req.user.id;
    const user = await User.findById(userid).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Code error in Route 3 in auth.js");
  }
});

module.exports = router;
