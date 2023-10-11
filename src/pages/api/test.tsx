import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET") {
        res.status(200).json({ message: "GET Request works!" })
    }
    if (req.method === "POST") {
        const body = req.body
        if (body.data) {
            res.status(200).json({ message: `POST Request works! Hello, ${body.data}` })
        }
        res.status(200).json({ message: 'POST Request works!' })
    }
  }