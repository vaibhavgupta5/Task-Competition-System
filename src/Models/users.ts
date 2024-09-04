import mongoose, { Schema, Document } from "mongoose";

export interface daily extends Document {
  mmds: string;
  ders: string;
  createdAt: Date;
}

const dailySchema: Schema<daily> = new Schema({
  mmds: { type: String, required: true },
  ders: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export interface weekly extends Document {
  buddyPartnerCall: String;
  socialMediaPosts: number;
  outreachDone: number;
  proposalsShared: number;
  level00AdsRunning: string;
  level1AdsRunning: String;
  level2AdsRunning: String;
  contentMultiplierSystemExecuted: String;
  createdAt: Date;
}

const weeklySchema: Schema<weekly> = new Schema({
  buddyPartnerCall: { type: String, required: true },
  socialMediaPosts: { type: Number, required: true },
  outreachDone: { type: Number, required: true },
  proposalsShared: { type: Number, required: true },
  level00AdsRunning: { type: String, required: true },
  level1AdsRunning: { type: String, required: true },
  level2AdsRunning: { type: String, required: true },
  contentMultiplierSystemExecuted: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export interface monthly extends Document {
  assignmentType: string;
  uploadDocument: string;
  createdAt: Date;
}

const monthlySchema: Schema<monthly> = new Schema({
  assignmentType: { type: String, required: true },
  uploadDocument: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export interface awards extends Document {
    awardName: string;
    createdAt: Date;
}

const awardsSchema: Schema<awards> = new Schema({
    awardName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export interface user extends Document {
    name: string;
    image: string;
    daily: daily[];
    weekly: weekly[];
    monthly: monthly[];
    awards: awards[]
    createdAt: Date;
}

const userSchema: Schema<user> = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: false },
  awards: [awardsSchema],
   daily: [dailySchema],
  weekly: [weeklySchema],
  monthly: [monthlySchema],
  createdAt: { type: Date, default: Date.now },
});

const UserModel = (mongoose.models.User as mongoose.Model<user>) || mongoose.model<user>("User", userSchema)
export default UserModel;