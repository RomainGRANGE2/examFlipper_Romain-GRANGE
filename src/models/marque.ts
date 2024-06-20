import { Schema, model, Types } from "mongoose";

interface IMarque {
  nom: string;
  pays: string;
  madeIn: number;
}

const marqueSchema = new Schema<IMarque>({
  nom: { type: String, required: true, trim: true },
  pays: { type: String, required: true, trim: true },
  madeIn: { type: Number, required: true },
});

const Marque = model<IMarque>("Marque", marqueSchema);
export { Marque, IMarque };
