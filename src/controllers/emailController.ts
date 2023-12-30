import { Request, Response } from 'express';
import EmailService from '../services/EmailService';
import CustomError from '../models/CustomError';

export const sendEmail = (req: Request, res: Response): void => {
  try {
    //const { username, email } = req.body;
    console.log('BODY ', req.body);

    const newEmail = EmailService.sendEmail(req.body);

    // Enviar una respuesta de éxito
    res.status(201).json(newEmail);
  } catch (error) {
    // Manejar el error y enviar una respuesta de error al cliente
    console.error('Error al enviar el correo:', error);

    // Verificar si el error es del tipo que quieres manejar
    if (error instanceof CustomError) {
      res.status(400).json({ error: error.message });
    } else {
      // Si no es un tipo de error específico, puedes devolver un error genérico
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
};
