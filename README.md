# 🦠 COVID-19 State Tracker (India)

A modern, responsive web application that allows users to view real-time COVID-19 statistics for Indian states using an official public API. The project features a clean reddish-themed UI built with **Bootstrap 5**, dynamic state loading, and live data rendering with vanilla JavaScript.

---

## 🚀 Live Deployment

🔗 **Live Demo (Vercel):**
[Click Here For Preview](https://pr-11-corona-api-ten.vercel.app/)


---

## 📸 Preview

This project displays:

* Dropdown list of Indian states (loaded dynamically via API)
* Total Confirmed Cases
* Recovered Cases
* Deaths
* Active Cases
* Loader animation while fetching data

---

## 📁 Project Structure

```
PR_11_CORONA_APP/
│
├── assets/
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── index.html
└── README.md
```

---

## 🛠️ Technologies Used

* **HTML5** – Markup structure
* **CSS3** – Custom styling & layout
* **Bootstrap 5** – Responsive UI framework
* **JavaScript (ES6)** – API handling & DOM manipulation
* **Public COVID API** – Rootnet India COVID-19 API

API Source:

```
https://api.rootnet.in/covid19-in/stats/latest
```

---

## ✅ Features

* 🔄 Dynamic state dropdown loaded from API
* 📊 Real-time COVID statistics
* 🎨 Reddish modern UI design
* 📱 Fully responsive layout
* ⚡ Fast & lightweight
* 🚫 No external libraries required for logic

---

## 📦 How It Works

1. On page load, the app fetches all Indian state names from the API.
2. These states populate the dropdown menu dynamically.
3. When a user selects a state and clicks **Search Data**:

   * The app fetches COVID data
   * Filters the selected state
   * Displays statistics on the dashboard

---

## 💻 Local Setup Instructions

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/your-username/covid-state-tracker.git

# Navigate to the folder
cd covid-state-tracker

# Open index.html in browser
```

You can also use VS Code Live Server for better development experience.

---

## 🌐 Deployment on Vercel

### Steps to Deploy:

1. Push your project to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Click **New Project**
4. Import your GitHub repository
5. Click **Deploy**

Vercel will automatically generate a live URL like:

```
https://covid-state-tracker.vercel.app
```

Add that link in the "Live Deployment" section above ✅

---

## 📌 Future Enhancements

* 📍 District-level data
* 📈 Graph view (Chart.js)
* 🔍 Searchable dropdown
* 🌙 Dark/Light mode toggle
* 🧭 Auto-detect location

---

## 👨‍💻 Author

**Nurul Shaikh**
Full Stack Development Student
Red & White Multimedia
📧 [dev.nurulshaikh@gmail.com](mailto:dev.nurulshaikh@gmail.com)

---

## 📜 License

This project is open-source and free to use for educational purposes.

You are free to modify and improve it as per your requirements.

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub and sharing it with others!

---

> Built with ❤️ using JavaScript & Bootstrap 5
