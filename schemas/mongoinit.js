import mongoose from 'mongoose';

const MongoInit = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/MyDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected:', conn.connection.host);
    return true;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    return false;
  }
};

export default MongoInit;
