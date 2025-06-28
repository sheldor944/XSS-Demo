// pages/api/comments/vulnerable.js
import { getVulnerableComments, addVulnerableComment } from "../../../lib/comments";

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(getVulnerableComments());
  } else if (req.method === 'POST') {
    const { name, comment } = req.body;
    if (!name || !comment) {
      return res.status(400).json({ message: 'Name and comment are required' });
    }
    
    const newComment = addVulnerableComment(name, comment);
    res.status(201).json(newComment);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}