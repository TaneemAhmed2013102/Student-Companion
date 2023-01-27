const express = require("express");
const { Users } = require("../models");
const router = express.Router();
const { mailSender } = require("../utilities/mailsender");
const uuid = require("uuid");
const bcrypt = require("bcrypt");
const { UserVerification } = require("../models");
const { Op } = require("sequelize");

//Used for default registration
router.post("/register", async (req, res) => {
  const result = await Users.findOne({
    where: {
      [Op.or]: [{ email: req.body.email }, { nid: req.body.nid }],
    },
  });
  console.log(result);
  if (result === null) {
    const UNID = uuid.v4();
    const password = await bcrypt.hash(req.body.password, 10);
    await Users.create({
      userUNID: UNID,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      nid: req.body.nid,
      address: req.body.address,
      city: req.body.city,
      postalCode: req.body.postalCode,
      university: req.body.university,
      password: password,
    });

    const verificationToken = uuid.v4();
    await UserVerification.create({
      verificationToken: verificationToken,
      expiryDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), //24 hours valid to verify email
      UserUNID: UNID,
    });

    let subject = "Please Verify your Email in Student Companion";
    let text =
      "Please visit the following link to verify your email:\n" +
      "http://localhost:3000/email-verified/" +
      verificationToken;
    mailSender(req.body.email, subject, text);
  } else {
    if (result.active == false) {
      return res.json({
        data: "",
        error: "Account not found. Please contact admin.",
      });
    } else if (result.email == req.body.email) {
      res.json({
        data: "",
        error: "Email Already Registered",
      });
    } else {
      res.json({
        data: "",
        error: "NID Already Used",
      });
    }
  }
});

//Used for login
router.post("/login", async (req, res) => {
  const result = await Users.findOne({
    where: { email: req.body.email },
  });

  if (result === null) {
    return res.json({
      data: "",
      error: "Account Not Registered.",
    });
  } else {
    if (await bcrypt.compare(req.body.password, result.password)) {
      if (result.isVerified) {
        if (result.active) {
          //Can send user UNID only too
          return res.json({
            data: result,
            error: "",
          });
        } else {
          return res.json({
            data: "",
            error: "Account not found. Please contact admin.",
          });
        }
      } else {
        return res.json({
          data: "",
          error: "Please verify your email.",
        });
      }
    } else {
      return res.json({
        data: "",
        error: "Credentials don't match",
      });
    }
  }
});

router.get("/verify-email/:verificationToken", async (req, res) => {
  const result = await UserVerification.findOne({
    where: {
      verificationToken: req.params.verificationToken,
    },
  });
  if (result) {
    if (result.expiryDate > new Date()) {
      await Users.update(
        {
          isVerified: true,
        },
        {
          where: {
            userUNID: result.UserUNID,
          },
        }
      );
      await UserVerification.update(
        {
          isVerified: true,
        },
        {
          where: {
            verificationToken: req.params.verificationToken,
          },
        }
      );
      res.json({
        data: "Email Verified",
        error: "",
      });
    } else {
      res.json({
        data: "",
        error: "Verify Time passed",
      });
    }
  }
});

router.post("/verify-verification-token", async (req, res) => {
  const result = await UserVerification.findOne({
    where: {
      verificationToken: req.body.verificationToken,
    },
  });
  if (result == null) {
    return res.json({
      data: "",
      error: "Invalid verification token",
    });
  } else {
    if (result.expiryDate < new Date()) {
      return res.json({
        data: "",
        error: "Link expired.",
      });
    } else {
      return res.json({
        data: "Email verified successfully!",
        error: "",
      });
    }
  }
});

router.post("/verify-unid", async (req, res) => {
  const result = await Users.findOne({
    where: {
      userUNID: req.body.UNID,
    },
  });
  if (result == null) {
    return res.json({
      data: "",
      error: "Access denied.",
    });
  } else {
    return res.json({
      data: result,
      error: "",
    });
  }
});

router.post("/forget-password", async (req, res) => {
  const result = await Users.findOne({
    where: {
      email: req.body.email,
    },
  });

  if (result == null) {
    return res.json({
      data: "",
      error: "Account not found!",
    });
  } else {
    if (result.password == null) {
      return res.json({
        data: "",
        error: "Please login using google SignIn",
      });
    } else if (result.isVerified) {
      let subject = "Account recovery";
      let text =
        "Please visit the following link:\n" +
        "http://localhost:3000/reset-password/" +
        result.userUNID;
      mailSender(result.email, subject, text);
      return res.json({
        data: "Please check your email to recover your account.",
        error: "",
      });
    } else {
      return res.json({
        data: "",
        error: "Email not verified. Please verify first.",
      });
    }
  }
});

//used to update password
router.post("/password-update", async (req, res) => {
  const result = await Users.findOne({
    where: {
      userUNID: req.body.UNID,
    },
  });

  //Wont usually Happen because unid is always found in reset password
  if (result == null) {
    return res.json({
      data: "",
      error: "Unknown Error. Contact Admin.",
    });
  } else {
    const password = await bcrypt.hash(req.body.password, 10);
    await Users.update(
      {
        password: password,
      },
      {
        where: {
          userUNID: req.body.UNID,
        },
      }
    );

    return res.json({
      data: "Password Successfully Updated",
      error: "",
    });
  }
});

router.post("/resend-link", async (req, res) => {
  const result = await UserVerification.findOne({
    where: {
      verificationToken: req.body.verificationToken,
    },
  });
  if (result == null) {
    return res.json({
      data: "",
      error: "Invalid verfication token.",
    });
  }
  verificationToken = uuid.v4();
  await UserVerification.create({
    verificationToken: verificationToken,
    expiryDate: new Date(new Date().getTime() + 24 * 60 * 60 * 1000), //24 hours valid to verify email
    UserUNID: result.UserUNID,
  });

  const user = await Users.findOne({
    where: {
      UserUNID: result.UserUNID,
    },
  });
  let subject = "Verify Email";
  let text =
    "Please visit the following link to verify your email:\n" +
    "http://localhost:3000/email-verified/" +
    verificationToken;
  mailSender(user.email, subject, text);
});

module.exports = router;
