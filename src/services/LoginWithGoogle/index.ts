import User from "@/models/userModel";

export async function loginWithGoogle(data: any, callback: any) {
  try {
    let user = await User.findOne({ email: data.email });

    if (user) {
      Object.assign(user, data);
      await user.save();
    } else {
      data.role = "Customer";
      user = await User.create(data);
    }

    callback({ status: true, data: user });
  } catch (error) {
    console.error("Error loginWithGoogle: ", error);
    callback({ status: false, data: error });
  }
}
