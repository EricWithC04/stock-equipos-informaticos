import { Request, Response } from "express";
import branchService from "../services/branch.service";
import { Branch } from "../interfaces/branch.interface";

class BranchController {

    constructor() {}

    public getBranchs = async (req: Request, res: Response) => {
        const branchs = await branchService.getBranchs();

        if (!branchs || !branchs.length) {
            return res.status(404).json({ message: "No hay sucursales registradas" });
        }

        res.status(200).json(branchs);
    }

    public createBranch = async (req: Request, res: Response) => {
        const data: Branch = req.body;
        const branch = await branchService.createBranch(data);

        if (!branch) {
            return res.status(500).send({
                status: 500,
                message: 'No se ha podido crear la sucursal!'
            });
        }

        res.status(201).json(branch);
    }

    public updateBranch = async (req: Request, res: Response) => {
        const { id } = req.params;
        const data: Branch = req.body;
        const branch = await branchService.updateBranch(parseInt(id), data);

        if (!branch) {
            return res.status(500).send({
                status: 500,
                message: 'No se ha podido actualizar la sucursal!'
            });
        }

        res.status(201).json(branch);
    }

    public deleteBranch = async (req: Request, res: Response) => {
        const { id } = req.params;
        const branch = await branchService.deleteBranch(parseInt(id));

        if (!branch) {
            return res.status(500).json({ message: "No se ha podido eliminar la sucursal" });
        }

        res.status(200).json({ message: "La sucursal ha sido eliminada" });
    }
}

export default new BranchController()