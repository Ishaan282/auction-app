import { Client } from 'pg';
import 'dotenv/config'; // Load environment variables

async function testConnection() {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false // Required for Neon PostgreSQL
        }
    });

    try {
        await client.connect();
        console.log("✅ Database connected successfully!");
        const res = await client.query("SELECT NOW();"); // Test query
        console.log("📅 Current Timestamp from DB:", res.rows[0].now);
    } catch (error) {
        console.error("❌ Database connection failed:", error);
    } finally {
        await client.end();
    }
}

testConnection();
