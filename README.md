# node-db-speed-test
📊 Node.js Storage Benchmarking Project

This project benchmarks read/write performance across different storage systems using Node.js:

🧠 In-Memory JavaScript Object

🧠 In-Memory JavaScript Array

📄 Flat File (line-by-line key:value format)

💾 Redis (Memory Only and Disk Persistence modes)

🧬 MongoDB

🐘 PostgreSQL

The project is containerized using Docker Compose and runs all tests in a single command.

🚀 Quick Start

1. Clone the repository

```
git clone https://github.com/virtax/node-db-speed-test.git
cd node-db-speed-test
```

2. Start the benchmark
```
docker-compose up --build
```

This command:
Builds and starts all services (Redis, MongoDB, PostgreSQL, Node.js)
Waits 5 seconds for services to be ready
Executes all tests and prints timing results

```
📁 Project Structure
.
├── docker-compose.yml         # All service definitions
├── Dockerfile                 # Node.js container with test runner
└── src/
    ├── main.js               # Entry point, runs all tests
    ├── redisTest.js
    ├── mongoTest.js
    ├── pgTest.js
    ├── inMemoryObjectTest.js
    ├── inMemoryArrayTest.js
    ├── fileTest.js
```

📈 Sample Output
```
2025-06-14 14:54:31 Start tests
2025-06-14 14:54:31 Waiting 5 seconds for all services to be ready...
2025-06-14 14:54:36
2025-06-14 14:54:36 --- In-Memory Array ---
2025-06-14 14:54:36 Write time: 0.412ms
2025-06-14 14:54:36 Read time: 0.181ms
2025-06-14 14:54:36
2025-06-14 14:54:36 --- In-Memory Object ---
2025-06-14 14:54:36 Write time: 2.211ms
2025-06-14 14:54:36 Read time: 0.824ms
2025-06-14 14:54:36
2025-06-14 14:54:36 --- File Test (Per-Operation IO) ---
2025-06-14 14:54:36 Write time: 380.701ms
2025-06-14 14:54:37 Read time: 583.373ms
2025-06-14 14:54:37
2025-06-14 14:54:37 --- Redis (Memory Only) ---
2025-06-14 14:54:37 Write time: 298.264ms
2025-06-14 14:54:37 Read time: 213.971ms
2025-06-14 14:54:37
2025-06-14 14:54:37 --- Redis (Disk Persistence) ---
2025-06-14 14:54:38 Write time: 1.159s
2025-06-14 14:54:39 Read time: 235.558ms
2025-06-14 14:54:39
2025-06-14 14:54:39 --- MongoDB ---
2025-06-14 14:54:39 Write time: 773.921ms
2025-06-14 14:54:40 Read time: 843.274ms
2025-06-14 14:54:40
2025-06-14 14:54:40 --- MongoDB ID ---
2025-06-14 14:54:41 Write time: 741.185ms
2025-06-14 14:54:42 Read time: 733.845ms
2025-06-14 14:54:42
2025-06-14 14:54:42 --- PostgreSQL ---
2025-06-14 14:54:43 Write time: 671.991ms
2025-06-14 14:54:43 Read time: 424.844ms
2025-06-14 14:54:43
2025-06-14 14:54:43 Finish tests
```
⚠️ Numbers may vary depending on hardware and OS.

🔧 Configuration

All constants like the number of records (N = 1000) are hardcoded in each test file. You can increase it for stress testing.

