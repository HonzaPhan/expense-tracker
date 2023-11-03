import mongoose, { Model } from 'mongoose';
import brypt from 'bcryptjs';
import { IUser } from '../../helpers/Types';

export default class UserModel {
	private _userSchema: mongoose.Schema;
	private _UserModel: Model<IUser>;

	constructor() {
		this._userSchema = new mongoose.Schema<IUser>(
			{
				username: {
					type: String,
					required: true,
					unique: true,
					trim: true,
					minlength: 3,
				},
				email: {
					type: String,
					required: true,
					unique: true,
					trim: true,
					validate: {
						validator: (value: string) => {
							const emailRegex =
								/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\])$/i.test(
									value,
								);
							return emailRegex;
						},
						message: 'Invalid email format',
					},
				},
				password: {
					type: String,
					required: true,
					trim: true,
					minlength: 8,
				},
			},
			{
				timestamps: true,
			},
		);

		this._userSchema.pre<IUser>('save', async function (next) {
			if(!this.isModified('password')) {
				next();
			}

			const salt = await brypt.genSalt(10);
			this.password = await brypt.hash(this.password, salt);

			next();
		})

		this._UserModel = mongoose.model<IUser>('User', this._userSchema);
	}

	public get GetUserSchema() {
		return this._userSchema;
	}

	public get GetUserModel() {
		return this._UserModel;
	}
}
