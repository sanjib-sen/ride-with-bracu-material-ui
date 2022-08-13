// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from 'next'
import { Area } from '../../types/Area'

const data: Area = require("../data/dhaka.json");

export default function handler(
  res: NextApiResponse<Area>
) {
  res.status(200).json(data)
}
