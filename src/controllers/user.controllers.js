import { user } from '../models/user.js'

export const createUserCtrl = async (req, res) => {
    try {
        const newUser = await user.create(req.body);
        res.status(201).json(newUser)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}