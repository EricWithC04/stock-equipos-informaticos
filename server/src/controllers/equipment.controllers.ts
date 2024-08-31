import { Request, Response } from "express";
import EquipmentService from "../services/equipment.service";
import { Equipment } from "../interfaces/equipment.interface";

class EquipmentController {

    constructor() {}

    public getEquipments = async (req: Request, res: Response) => {
        const equipments = await EquipmentService.getEquipments();

        if (!equipments || !equipments.length) {
            return res.status(404).json({ message: "No hay equipos registrados" });
        }

        res.status(200).json(equipments);
    }

    public getOneEquipment = async (req: Request, res: Response) => {
        const { id } = req.params;
        const equipment = await EquipmentService.getOneEquipment(parseInt(id));

        if (!equipment) {
            return res.status(404).json({ message: "No existe el equipo" });
        }

        res.status(200).json(equipment);
    }

    public createEquipment = async (req: Request, res: Response) => {
        const data: Equipment = req.body;
        const equipment = await EquipmentService.createEquipment(data);

        if (!equipment) {
            return res.status(500).send({
                status: 500,
                message: 'No se ha podido crear el equipo!'
            })
        }

        res.status(201).json(equipment);
    }

    public updateEquipment = async (req: Request, res: Response) => {
        const { id } = req.params;
        const data: Equipment = req.body;
        const equipment = await EquipmentService.updateEquipment(parseInt(id), data);

        if (!equipment) {
            return res.status(500).send({
                status: 500,
                message: 'No se ha podido actualizar el equipo!'
            })
        }

        res.status(201).json(equipment);
    }
}

export default new EquipmentController()