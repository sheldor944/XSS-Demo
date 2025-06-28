// pages/api/comments/safe.js
import { getSafeComments, addSafeComment } from "../../../lib/comments";

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(getSafeComments());
  } else if (req.method === 'POST') {
    const { name, comment } = req.body;
    if (!name || !comment) {
      return res.status(400).json({ message: 'Name and comment are required' });
    }
    
    const newComment = addSafeComment(name, comment);
    res.status(201).json(newComment);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}