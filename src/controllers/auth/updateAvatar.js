const { User } = require('../../models');
const path = require('path');
const fs = require('fs/promises');
const Jimp = require('jimp');

const avatarDir = path.join(__dirname, '../../', 'public', 'avatars');

const updateAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id: id } = req.user;
  const avatarName = `${id}_${originalname}`;

  try {
    const resultUpload = path.join(avatarDir, avatarName);

    const image = await Jimp.read(tempUpload);
    image.resize(250, 250).write(tempUpload);

    await fs.rename(tempUpload, resultUpload);

    const avatarUrl = path.join('public', 'avatars', avatarName);
    await User.findByIdAndUpdate(req.user._id, { avatarUrl });
    console.log(avatarName);
    res.status(200).json({
      message: `create new user `,
      code: 200,
      data: {
        avatarUrl,
      },
    });
  } catch (error) {
    await fs.unlink(tempUpload);
    throw error;
  }
};

module.exports = updateAvatar;
