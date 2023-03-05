// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import type { AxiosResponse } from 'axios';
import axios from "axios";
type Data = {
  name: string
}

type Demo = {
  message: AxiosResponse<string, string>
}

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

// export default async function TestApi(
//   req: NextApiRequest,
//   res: NextApiResponse<Demo>
// ) {
//   const data = await axios.get("localhost:3000").then((res) => res)
//   res.status(200).json({ message: data })
// }
