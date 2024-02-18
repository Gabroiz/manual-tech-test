import type { NextApiRequest, NextApiResponse } from "next";
import data from "./data.json";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  res.status(200).json(data.questions);
}
