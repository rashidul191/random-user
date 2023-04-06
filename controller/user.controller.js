const fs = require("fs");
const userData = require("../user.json");

module.exports.getRandomUser = (req, res, next) => {
  const randomNumber = parseInt(Math.random() * 10);
  const getRandomUser = userData[randomNumber];
  if (!getRandomUser) {
    res.status(400).json({
      status: "failed",
      message: "sorry, can't get a data",
    });
  }
  res.status(200).json({
    status: "success",
    message: "successfully get a data",
    data: getRandomUser,
  });
};

module.exports.getAllUser = (req, res, next) => {
  const { limit = 5, page = 1 } = req.query;
  const limitUser = userData.splice(0, limit);
  if (!limitUser) {
    res.status(400).json({
      status: "failed",
      message: "sorry, can't get a data",
    });
  }
  res.status(200).json({
    status: "success",
    message: "successfully get a data",
    data: limitUser,
  });
};

module.exports.postUser = (req, res, next) => {
  const newUserData = req.body;
  userData.push(newUserData);
  if (!newUserData) {
    res.status(400).json({
      status: "failed",
      message: "sorry, can't save user data",
    });
  }
  res.status(200).json({
    status: "success",
    message: "successfully save user data",
    data: userData,
  });
};

module.exports.updateUserOfId = (req, res, next) => {
  const { id } = req.params;
  const { name, gender, contact, address, photoUrl } = req.body;
  const updateUserOfId = userData.find((user) => user.id === Number(id));

  updateUserOfId.name = name;
  updateUserOfId.gender = gender;
  updateUserOfId.contact = contact;
  updateUserOfId.address = address;
  updateUserOfId.photoUrl = photoUrl;

  if (!updateUserOfId) {
    res.status(400).json({
      status: "failed",
      message: "sorry, can't update a data",
    });
  }
  res.status(200).json({
    status: "success",
    message: "successfully update a data",
    data: userData,
  });
};

module.exports.bulkUpdateUserOfId = (req, res, next) => {
  const usersData = req.body;
  if (!usersData) {
    res.status(400).json({
      status: "failed",
      message: "sorry, can't bulk-update a data",
    });
  }
  res.status(200).json({
    status: "success",
    message: "successfully bulk-update a data",
    data: usersData,
  });
};

module.exports.deleteUserOfId = (req, res, next) => {
  const { id } = req.params;
  const updateUser = userData.filter((user) => user.id !== Number(id));
  if (!updateUser) {
    res.status(400).json({
      status: "failed",
      message: "sorry, can't delete a data",
    });
  }
  res.status(200).json({
    status: "success",
    message: "successfully deleted a data",
    data: updateUser,
  });
};
