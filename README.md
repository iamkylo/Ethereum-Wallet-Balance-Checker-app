# 🔍 Ethereum Wallet Balance Checker

A sleek, modern web application that lets users check the balance of any Ethereum wallet using Web3.js and Infura.

## 🚀 Live Demo


> https://ethereum-wallet-balance-checker-app.vercel.app/

---

## 📂 Project Structure

web3App/
├── app.js # Express server setup
├── views/
│ └── index.ejs # Frontend HTML (EJS template)
├── public/
│ ├── styles.css # App styling
│ └── scripts.js # Frontend JavaScript for balance check
├── package.json # Project metadata and dependencies

yaml
Copy
Edit

---

## 🛠️ Tech Stack

- **Node.js** + **Express.js**
- **EJS** (Templating engine)
- **Web3.js v4+**
- **Infura** (Ethereum RPC provider)

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/web3-wallet-checker.git
cd web3-wallet-checker
2. Install Dependencies
bash
Copy
Edit
npm install
3. Add Infura API Key
Open app.js and replace:

js
Copy
Edit
const web3 = new Web3(new Web3.HttpProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'));
Create an account on https://infura.io, generate a project, and get your API key.

4. Run the Application
bash
Copy
Edit
node app.js
Visit http://localhost:3000 in your browser.

✨ Features
🔍 Real-time balance check for any Ethereum wallet

🌐 Connects via Infura (no local node required)

💅 Responsive and modern UI

⚡ Converts Wei to Ether for readability

❌ Handles invalid input gracefully

🧪 Sample Wallets for Testing
Use any of the following valid addresses:

0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe

0x742d35Cc6634C0532925a3b844Bc454e4438f44e

📄 License
This project is licensed under the MIT License.

👨‍💻 Author
Your Name – @iamkylo

Feel free to fork, improve, and share!

yaml
Copy
Edit

---

Let me know if you'd like this tailored for:
- Testnet only (Goerli/Sepolia)
- Metamask integration
- Deployed project (with a live URL)
