// import axios from 'axios';
// import dotenv from 'dotenv';

// dotenv.config(); // ✅ this will automatically load .env from the project root

// const city = 'London';

// const fetchData = async () => {
//   try {
//     const apiKey = process.env.WEATHER_API;
//     if (!apiKey) {
//       throw new Error("API key not found. Check your .env file.");
//     }

//     const response = await axios.get(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
//     );
//     console.log(response.data);
//   } catch (err) {
//     console.error("Error fetching weather:", err.message);
//   }
// };

// fetchData();
