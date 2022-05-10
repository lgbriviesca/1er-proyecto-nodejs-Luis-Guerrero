const { Transference } = require('../models/transferencesModel');
const { User } = require('../models/usersModel');

const createTransference = async (req, res) => {
  try {

  const { amount, accountNumber, senderAccountNumber } = req.body;
   const toWhomAccount = await User.findOne({ where: { accountNumber: accountNumber } });
   const senderAccount = await User.findOne({ where: { accountNumber: senderAccountNumber } });

  const newTransference = await Transference.create({ amount, senderUserId: senderAccount.id, receiverUserId: toWhomAccount.id});
  const summ = toWhomAccount.amount + amount
  const rest = senderAccount.amount - amount

console.log(summ, rest)
  if (!toWhomAccount || senderAccount.amount < amount) {
    return res.status(404).json({
      status: 'error',
      message: '!!!!!!!!!!!!!destinationAccount not found',
    });
  } 

  const updateReceiver = await User.update({amount: summ}, {where: {accountNumber: accountNumber}} )
  const updateSender = await User.update({amount: rest}, {where: {accountNumber: senderAccountNumber}} )

  res.status(200).json({
    newTransference, updateReceiver, updateSender
  });
} catch (error) {
  console.log(error);
}
};

module.exports = {
  createTransference,
};
