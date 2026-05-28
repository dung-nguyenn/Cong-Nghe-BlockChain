/**
 * RiceChain Web3 Controller
 * Kết nối với Smart Contract thông qua Ethers.js và MetaMask
 */

// Cấu hình Smart Contract
// SAU KHI DEPLOY TRÊN REMIX, HÃY DÁN ĐỊA CHỈ CONTRACT VÀO ĐÂY
const CONTRACT_ADDRESS = "0xAeFC614c9D2408a0f90EAE5B24b3AEAe0ad48305";

// ABI - Giao diện của Smart Contract (Cần khớp với file Solidity)
const CONTRACT_ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "farmer",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "stage",
				"type": "string"
			}
		],
		"name": "LogAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_farmer",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_stage",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_notes",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			}
		],
		"name": "addLog",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllLogs",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "id",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "farmer",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "stage",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "notes",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "location",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "recorder",
						"type": "address"
					}
				],
				"internalType": "struct RiceFarming.FarmingLog[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getLogsCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "logs",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "farmer",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "stage",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "notes",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "location",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recorder",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let provider;
let signer;
let contract;

document.addEventListener('DOMContentLoaded', () => {
	const btnConnect = document.getElementById('btn-connect');
	const btnSubmit = document.getElementById('btn-submit');
	const form = document.getElementById('farming-form');
	const feed = document.getElementById('blockchain-feed');
	const blockCountEl = document.getElementById('block-count');
	const chainStatusEl = document.getElementById('chain-status');
	const userAddressEl = document.getElementById('user-address');
	const walletInfo = document.getElementById('wallet-info');
	const hintConnect = document.getElementById('hint-connect');

	// 1. Kết nối MetaMask
	btnConnect.addEventListener('click', async () => {
		console.log("Đang kiểm tra MetaMask...");

		// Kiểm tra MetaMask với cơ chế chờ đợi
		const checkMetaMask = async () => {
			if (typeof window.ethereum !== 'undefined') return true;
			await new Promise(resolve => setTimeout(resolve, 1000));
			return typeof window.ethereum !== 'undefined';
		};

		const isMetaMaskInstalled = await checkMetaMask();

		if (isMetaMaskInstalled) {
			console.log("MetaMask đã tìm thấy! Đang yêu cầu tài khoản...");
			try {
				// Kiểm tra xem ethers có load được không (cần internet cho CDN)
				if (typeof ethers === 'undefined') {
					alert("Lỗi: Không tải được thư viện Ethers.js. Hãy kiểm tra kết nối Internet của bạn!");
					return;
				}
				// Yêu cầu kết nối ví
				await window.ethereum.request({ method: 'eth_requestAccounts' });
				provider = new ethers.BrowserProvider(window.ethereum);
				signer = await provider.getSigner();
				const address = await signer.getAddress();

				console.log("--- BẮT ĐẦU KẾT NỐI ---");
				console.log("Địa chỉ ví người dùng:", address);
				console.log("Địa chỉ Contract cấu hình:", CONTRACT_ADDRESS);

				// Khởi tạo Contract instance
				if (CONTRACT_ADDRESS === "YOUR_CONTRACT_ADDRESS_HERE" || CONTRACT_ADDRESS === "") {
					alert("Cảnh báo: Bạn chưa dán địa chỉ Contract vào file main.js!");
					return; // Dừng lại nếu chưa có địa chỉ
				}

				try {
					contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
					console.log("Khởi tạo Contract thành công:", contract);

					// Cập nhật UI
					btnConnect.innerHTML = '<i class="fa-solid fa-check"></i> Đã kết nối';
					btnConnect.style.color = 'var(--primary)';
					userAddressEl.textContent = address;
					walletInfo.style.display = 'block';
					hintConnect.style.display = 'none';
					btnSubmit.disabled = false;

					chainStatusEl.classList.add('active');
					const network = await provider.getNetwork();
					chainStatusEl.querySelector('span').textContent = `Network: ${network.name}`;

					loadLogs();
				} catch (contractError) {
					console.error("Lỗi khi tạo đối tượng Contract:", contractError);
					alert("Lỗi cấu hình Smart Contract. Kiểm tra lại địa chỉ và ABI!");
				}
			} catch (error) {
				console.error("Kết nối thất bại:", error);
				alert("Không thể kết nối ví!");
			}
		} else {
			alert("Vui lòng cài đặt MetaMask!");
		}
	});

	// 2. Gửi dữ liệu lên Blockchain
	form.addEventListener('submit', async (e) => {
		e.preventDefault();
		if (!contract) return alert("Chưa kết nối Smart Contract!");

		const btn = document.getElementById('btn-submit');
		const originalBtnContent = btn.innerHTML;

		const farmer = document.getElementById('farmer-name').value;
		const stage = document.getElementById('farming-stage').value;
		const notes = document.getElementById('farming-notes').value;
		const location = document.getElementById('farming-location').value;

		try {
			btn.disabled = true;
			btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Đang gửi giao dịch...';

			// Gọi hàm addLog trong Smart Contract
			const tx = await contract.addLog(farmer, stage, notes, location);

			console.log("Giao dịch đã gửi:", tx.hash);

			// Chờ giao dịch được xác thực (mined)
			await tx.wait();

			alert("Giao dịch thành công! Dữ liệu đã được ghi vào Ganache.");
			form.reset();
			loadLogs();
		} catch (error) {
			console.error("Lỗi giao dịch:", error);
			alert("Giao dịch bị từ chối hoặc thất bại!");
		} finally {
			btn.disabled = false;
			btn.innerHTML = originalBtnContent;
		}
	});

	// 3. Tải dữ liệu từ Blockchain
	async function loadLogs() {
		if (!contract) return;

		try {
			const logs = await contract.getAllLogs();
			blockCountEl.textContent = logs.length;

			feed.innerHTML = '';
			if (logs.length === 0) {
				feed.innerHTML = '<div style="text-align: center; color: var(--text-muted);">Chưa có dữ liệu nào trên chuỗi.</div>';
				return;
			}

			// Hiển thị từ mới nhất đến cũ nhất
			[...logs].reverse().forEach((log) => {
				const card = document.createElement('div');
				card.className = 'block-card glass';

				// Convert BigInt to Number if needed (Ethers v6 uses BigInt for uint256)
				const timestamp = Number(log.timestamp) * 1000;

				card.innerHTML = `
                    <div class="block-meta">
                        <span>Giao dịch #${log.id}</span>
                        <span><i class="fa-regular fa-clock"></i> ${new Date(timestamp).toLocaleString()}</span>
                    </div>
                    
                    <div class="block-data">
                        <div class="data-item">
                            <span class="data-label">Nông dân:</span>
                            <span style="color: var(--primary); font-weight: 600;">${log.farmer}</span>
                        </div>
                        <div class="data-item">
                            <span class="data-label">Giai đoạn:</span>
                            <span>${translateStage(log.stage)}</span>
                        </div>
                        <div class="data-item">
                            <span class="data-label">Vị trí:</span>
                            <span>${log.location || 'N/A'}</span>
                        </div>
                        <div style="margin-top: 10px; font-size: 0.85rem; color: #ddd; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 5px;">
                            ${log.notes || 'Không có ghi chú.'}
                        </div>
                    </div>

                    <div style="margin-top: 1rem;">
                        <div class="data-label" style="font-size: 0.7rem;">NGƯỜI KÝ (RECORDER):</div>
                        <div class="hash-text" style="font-size: 0.65rem;">${log.recorder}</div>
                    </div>
                `;
				feed.appendChild(card);
			});
		} catch (error) {
			console.error("Lỗi tải dữ liệu:", error);
		}
	}

	function translateStage(stage) {
		const stages = {
			'Sowing': 'Gieo mạ',
			'Fertilizing': 'Bón phân',
			'Pest Control': 'Phun thuốc / Diệt sâu bệnh',
			'Irrigation': 'Tưới tiêu',
			'Harvesting': 'Thu hoạch',
			'Processing': 'Chế biến / Đóng gói'
		};
		return stages[stage] || stage;
	}
});
