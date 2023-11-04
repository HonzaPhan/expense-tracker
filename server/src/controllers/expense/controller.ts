import asyncHandler from 'express-async-handler';
import { Request, Response } from 'express';

class ExpenseController {
    // @desc Get expense
	// @route GET /api/expense/
	// @access Private
	public static _getExpense = asyncHandler(async (req: Request, res: Response) => {
		res.status(200).json({ message: 'Get expense' });
	});
}

export const { _getExpense } = ExpenseController;