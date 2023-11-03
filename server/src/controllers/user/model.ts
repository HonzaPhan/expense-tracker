import mongoose, { Model, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
import { IUser } from '../../helpers/Types';

class UserModel {
	private _UserModel: Model<IUser>;

	constructor() {
		const userSchema = new Schema<IUser>(
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
						message: 'Neplatný email!',
					},
				},
				password: {
					type: String,
					required: true,
					trim: true,
					validate: {
						validator: (value: string) => {
							const passwordRegex = /^[A-Za-z0-9.;@!*#/-]*$/;
							return passwordRegex.test(value);
						},
						message: 'Heslo může obsahovat pouze písmena, číslice a speciální znaky: .;@!*#/-',
					},
					minlength: 8,
				},
			},
			{
				timestamps: true,
			},
		);

		userSchema.pre<IUser>('save', async function (next) {
			if (!this.isModified('password')) {
				next();
			}

			const salt = await bcrypt.genSalt(10);
			this.password = await bcrypt.hash(this.password, salt);

			next();
		});

		userSchema.methods.matchPassword = async function (enteredPassword: string) {
			return await bcrypt.compare(enteredPassword, this.password);
		};

		this._UserModel = mongoose.model<IUser>('User', userSchema);
	}

	public get GetUserSchema(): Schema<IUser> {
		return this._UserModel.schema;
	}

	public get GetUserModel(): Model<IUser> {
		return this._UserModel;
	}
}

export default new UserModel();
