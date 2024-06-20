import { Schema, model, Types } from "mongoose";

interface ICaracteristiques {
  année: number;
  note: number;
  prix: number;
  disponibilité: string;
}

interface IFlipper {
  nom: string;
  marque_id: Types.ObjectId;
  caractéristiques: ICaracteristiques;
  images: string[];
}

const caracteristiquesSchema = new Schema<ICaracteristiques>({
  année: { type: Number, required: true },
  note: { type: Number, required: true },
  prix: { type: Number, required: true },
  disponibilité: { type: String, required: true, trim: true },
});

const flipperSchema = new Schema<IFlipper>({
  nom: { type: String, required: true, trim: true },
  marque_id: { type: Schema.Types.ObjectId, required: true, ref: "Marque" },
  caractéristiques: { type: caracteristiquesSchema, required: true },
  images: { type: [String], required: true },
});

const Flipper = model<IFlipper>("Flipper", flipperSchema);
export { Flipper, IFlipper };
