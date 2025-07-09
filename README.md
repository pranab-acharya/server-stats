
# 📊 Real-time Server Dashboard (ApexChart.js + Socket.IO)

A visually rich real-time server monitoring dashboard built with **Node.js**, **Socket.IO**, **ApexChart.js**, and **Tailwind CSS**. It displays live server metrics like CPU load, memory usage, network I/O, and disk stats via WebSockets.

---

## 🚀 Features

- ⚡ Real-time updates via Socket.IO
- 📈 Dynamic ApexChart.js line charts for:
  - CPU Load (%)
  - Memory Usage (Used/Free in MB)
  - Network I/O (Download/Upload in MB)
- 💽 Disk usage stats with uptime
- 🎨 Responsive and modern UI using Tailwind CSS

---

## 🛠️ Technologies Used

- **Backend:** Node.js, Express, Socket.IO
- **Frontend:** HTML, Tailwind CSS, ApexChart.js
- **Charts:** ApexChart.js line charts
- **Real-time Communication:** Socket.IO
- **Server Stats:** Custom utility using OS-level stats (`os-utils`, `os`, `pidusage`, etc.)

---

## 📁 Project Structure

```
server-stats/
├── src/
│   ├── utils/
│   │   └── getStats.js     # Function to collect server stats
│   └── index.js           # Express + Socket.IO server
├── package.json
├── index.html
├── .env
└── README.md
```

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/pranab-acharya/server-stats.git
   cd server-stats
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

---

## ▶️ Running the App

Start the server:

```bash
node src/index.js
```

Open the dashboard in your browser:

```
http://localhost:6002
```

> Make sure port `6002` is not blocked by a firewall or in use by another application.

---

## 📊 Dashboard Preview

![image](https://github.com/user-attachments/assets/aede4a19-a44e-4d0a-b352-14de9aa35c62)

---

## 📌 TODOs

- [ ] Add historical data charts
- [ ] Add tooltips/hover effects with ApexChart
- [ ] Export stats as CSV
- [ ] User authentication (optional for multi-user support)

---

## 🤝 Contributing

Contributions are welcome! Please fork this repo and create a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Developed By

**Pranab Acharya**  
[LinkedIn](https://linkedin.com/in/pranab-acharya) • [GitHub](https://github.com/pranab-acharya)

---
