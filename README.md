# Workout Buddy (Backend)

Express API backend with authentication (with JWT) for a workout tracker.

## Running the project locally

1. Clone the repository and navigate into it.

   ```bash
   git clone https://github.com/srijan-nayak/workout-buddy-backend.git
   cd workout-buddy-backend
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Setup environment variables by copying the example .env file.

   ```bash
   cp .env.example .env
   # modify the variables inside .env with a text editor.
   ```

   Modify the following environment variables according to your needs:

   - `PORT`: The port on which the API will run.
   - `MONDO_URI`: The connection string to your MongoDB server.
   - `JWT_SECRET`: A random string to setup JWT authentication.

4. Run the server.
   ```bash
   npm start
   ```
