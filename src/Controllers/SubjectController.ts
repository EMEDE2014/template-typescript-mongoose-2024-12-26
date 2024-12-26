import { Request, Response } from "express";
import { subRepository } from "../database/repositories/subjectRepository";
class SubjectController {
  async store(req: Request, res: Response) {
    const { name } = req.body;

    try {
      if (!name)
        return res.status(400).json({ message: "Este campo é obrigatori" });
      const subject = subRepository.create({ name });

      return res.status(201).json({ subject });
    } catch (e) {
      console.log(e);
    }
  }
}

export default new SubjectController();
