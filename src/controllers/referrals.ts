import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { z } from "zod";

export const referralSubmit = async (req: Request, res: Response) => {
  const prisma = new PrismaClient();
  const formInput = z.object({
    Referrer_name: z.string(),
    Referrer_email: z.string(),
    Referee_name: z.string(),
    Referee_email: z.string(),
    courseName: z.string(),
  });
  const { success } = formInput.safeParse(req.body);
  console.log(success);
  if (!success) {
    res.status(411).json({ message: "Invlid input" });
  }
  const {
    Referrer_name,
    Referrer_email,
    Referee_name,
    Referee_email,
    // refercode,
    courseName,
  } = req.body;
  // console.log(
  //   Referrer_name,
  //   Referrer_email,
  //   Referee_name,
  //   Referee_email,
  //   // refercode,
  //   courseName
  // );
  // try {
  console.log("request recived");

  const resdata = await prisma.refferalSchema.create({
    data: {
      Referrer_name,
      Referrer_email,
      Referee_name,
      Referee_email,
      courseName,
    },
  });
  console.log({ resdata });
  res.status(200).send({ success: true, resdata });
  // } catch (e) {
  //   res.status(500).send(e);
  // }
};
