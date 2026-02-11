require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

async function verify() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected successfully!');

        console.log('Testing User creation...');
        const testUser = new User({
            nome: 'Test Verification',
            email: `test_${Date.now()}@example.com`,
            senha: 'password123'
        });
        await testUser.save();
        console.log('User created:', testUser.email);

        console.log('Testing User search...');
        const foundUser = await User.findOne({ email: testUser.email });
        console.log('User found:', foundUser.nome);

        console.log('Cleaning up...');
        await User.deleteOne({ _id: testUser._id });
        console.log('Test user deleted.');

        await mongoose.disconnect();
        console.log('Disconnected. Verification successful!');
    } catch (error) {
        console.error('Verification failed:', error);
        process.exit(1);
    }
}

verify();
