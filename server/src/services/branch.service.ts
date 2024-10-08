import { Branch } from "../interfaces/branch.interface";
import { BranchModel } from "../models/branch.model";

class BranchService {
    private static instance: BranchService
    private constructor() {}

    public static getInstance(): BranchService {
        if (!BranchService.instance) {
            BranchService.instance = new BranchService();
        }
        return BranchService.instance;
    }

    public async getBranchs() {
        const branchs = await BranchModel.findAll();
        return branchs
    }

    public async createBranch(data: Branch) {
        const branch = await BranchModel.create(data);
        return branch
    }

    public async updateBranch(id: number, data: Branch) {
        const branch = await BranchModel.update(data, { where: { id } });
        return branch
    }

    public async deleteBranch(id: number) {
        const branch = await BranchModel.destroy({ where: { id } });
        return branch
    }
}

export default BranchService.getInstance()