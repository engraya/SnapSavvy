import { Document, Schema, Types, model, models } from "mongoose";

export interface ITransaction extends Document {
  createdAt: Date;
  stripeId: string;
  amount: number;
  credits: number;
  plan: string;
  buyer: Types.ObjectId;
}

const TransactionSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  stripeId: { type: String, required: true, unique: true },
  amount: { type: Number, required: true },
  credits: { type: Number, required: true },
  plan: { type: String, required: true },
  buyer: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

TransactionSchema.index({ buyer: 1 });

const Transaction = models?.Transaction || model("Transaction", TransactionSchema);

export default Transaction;
