const { User } = require('../models/usersModel');
const { Transference } = require('../models/transferencesModel');

const getAllUsers = async (req, res) => {
  try {
    // SELECT * FROM users;
    const users = await User.findAll();

    res.status(200).json({
      users,
    });
  } catch (error) {
    console.log(error);
  }
};

const createAccountForUser = async (req, res) => {
  try {
    const { name, password } = req.body;

    const newUser = await User.create({ name, password,});

    res.status(201).json({ newUser });
  } catch (error) {
    console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!este fue el error: ${error}`);
  }
};

const login = async (req, res) => {
  try {
    const { accountNumber, password } = req.body;

    const userLogin = await User.create({ accountNumber, password });

    res.status(201).json({ userLogin });
  } catch (error) {
    console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!este fue el error: ${error}`);
  }
};

const getTransferencesById = async (req, res) => {
  try {
    const { id } = req.params; 
    const user = await Transference.findAll({ where: { senderUserId: id } }); 

    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'Sender account not found',
      });
    }

    res.status(200).json({
      user,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  createAccountForUser,
  login,
  getTransferencesById,
};
