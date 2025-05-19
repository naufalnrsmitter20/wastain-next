import prisma from "@/utils/prisma";

export async function loginWithGoogle(data: { username: string; email: string }): Promise<{ status: boolean; data: any }> {
  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (!existingUser) {
    const newUser = await prisma.user.create({
      data: {
        email: data.email,
        username: data.username || data.email.split("@")[0],
        role: "Customer",
        password: "",
      },
    });
    return { status: true, data: newUser };
  }
  return { status: true, data: existingUser };
}
