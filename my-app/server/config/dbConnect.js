const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({ path: './config/config.env' });


class ConnectDB {
    async connect(uri) {
        if (mongoose.connection.readyState === 1) {
            return;
        }

        await mongoose.connect(uri);
        console.log(" MongoDB connected");
    }

    async disconnect() {
        if (mongoose.connection.readyState !== 0) {
            await mongoose.disconnect();
        }
    }
}

module.exports = new ConnectDB();