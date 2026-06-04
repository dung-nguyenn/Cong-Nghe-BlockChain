<div align="center">

# RICECHAIN WEB3 - NHẬT KÝ CANH TÁC LÚA GẠO

Hệ Thống Quản Lý Dữ Liệu Nông Nghiệp Phi Tập Trung Dựa Trên Blockchain

 <img src="https://raw.githubusercontent.com/anhminhvdvn/CanhBaoDotNhap/main/images/logoDaiNam.png" width="150"> </p> <br>

**TRƯỜNG ĐẠI HỌC ĐẠI NAM**  
**Khoa Công nghệ thông tin**

Sử dụng công nghệ Web3 và Smart Contract để ghi nhận, theo dõi và minh bạch hóa toàn bộ quy trình sản xuất lúa gạo, đảm bảo truy xuất nguồn gốc nông sản an toàn.

🚀 Demo • ✨ Tính Năng • 📦 Cài Đặt • 📖 Tài Liệu • 🤝 Đóng Góp

</div>

## 📋 Mục Lục

- [Giới Thiệu](#-giới-thiệu)
- [Tính Năng](#-tính-năng)
- [Công Nghệ](#️-công-nghệ)
- [Kiến Trúc Hệ Thống](#️-kiến-trúc-hệ-thống)
- [Cài Đặt](#-cài-đặt)
- [Sử Dụng](#-sử-dụng)
- [Screenshots](#-screenshots)
- [Đóng Góp](#️-đóng-góp)
- [License](#-license)

## 🎯 Giới Thiệu
**RiceChain Web3** là một hệ thống nhật ký canh tác hiện đại, giúp nông dân dễ dàng số hóa và lưu trữ toàn bộ quá trình sản xuất lúa gạo trực tiếp lên mạng lưới Blockchain để đảm bảo tính minh bạch và không thể sửa xóa. 

Thông qua giao diện web trực quan kết nối với ví MetaMask, mọi giai đoạn từ gieo mạ, bón phân đến khi thu hoạch đều được ghi lại dưới dạng các giao dịch bảo mật, giúp người dùng dễ dàng truy xuất nguồn gốc sản phẩm và khẳng định giá trị nông sản trên thị trường số.

🌟 **Điểm Đặc Biệt**

- ✅ **Minh bạch tuyệt đối** - Dữ liệu canh tác không thể sửa xóa hay giả mạo.
- ✅ **Truy xuất nguồn gốc** - Mọi quá trình từ gieo mạ đến thu hoạch được lưu trữ vĩnh viễn trên blockchain.
- ✅ **Giao diện thân thiện** - Tích hợp ví MetaMask dễ dàng, giao diện hiện đại (Glassmorphism).
- ✅ **Mô phỏng nội bộ** - Đi kèm module mô phỏng Blockchain bằng JavaScript giúp hiểu rõ nguyên lý hoạt động.

## ✨ Tính Năng
🌾 **1. Quản Lý Nhật Ký Canh Tác**

- Nhập thông tin người nông dân, lô đất canh tác.
- Chọn các giai đoạn canh tác: Gieo mạ, bón phân, tưới tiêu, phun thuốc, thu hoạch...
- Ghi chú chi tiết cho từng giai đoạn.

🦊 **2. Kết Nối Ví Điện Tử**
- Tích hợp đăng nhập và ký giao dịch an toàn qua MetaMask.
- Hiển thị thông tin địa chỉ ví đang kết nối.

⛓️ **3. Tương Tác Smart Contract**

- Gửi dữ liệu trực tiếp lên mạng lưới Blockchain (Ganache/Sepolia).
- Lấy và hiển thị toàn bộ lịch sử canh tác một cách minh bạch (Realtime).

## 🛠️ Công Nghệ
### Tech Stack
| Công Nghệ | Phiên Bản | Mục Đích |
|-----------|-----------|----------|
| [HTML/CSS/JS] | HTML5/CSS3/ES6 | Frontend Framework (Vanilla) |
| [Solidity](https://soliditylang.org/) | ^0.8.0 | Viết Smart Contract |
| [Ethers.js](https://docs.ethers.org/) | 6.7.0 | Giao tiếp giữa Frontend và Smart Contract |
| [Ganache](https://trufflesuite.com/ganache/) | Latest | Môi trường Blockchain Local |
| [MetaMask](https://metamask.io/) | Latest | Ví tiền điện tử (Web3 Provider) |

## 🏗️ Kiến Trúc Hệ Thống

```text
┌─────────────────────────────────────────────────────────────┐
│                    NGƯỜI DÙNG (NÔNG DÂN)                    │
│  ┌───────────────┐                                          │
│  │ Ví MetaMask   │                                          │
│  └───────┬───────┘                                          │
└──────────┼──────────────────────────────────────────────────┘
           │ Ký Giao Dịch
┌──────────▼──────────────────────────────────────────────────┐
│                    GIAO DIỆN WEB (Frontend)                 │
│  ┌────────────────┐  ┌────────────────┐                     │
│  │ Giao diện nhập │  │ Bảng tin       │                     │
│  │ dữ liệu        │  │ Blockchain     │                     │
│  └───────┬────────┘  └────────▲───────┘                     │
└──────────┼────────────────────┼─────────────────────────────┘
           │ (Ethers.js RPC)    │ Lấy Dữ liệu
┌──────────▼────────────────────┼─────────────────────────────┐
│                    MẠNG LƯỚI BLOCKCHAIN                     │
│  ┌─────────────────────────────────────┐                    │
│  │ Smart Contract (RiceFarming.sol)    │                    │
│  │ - Lưu trữ bản ghi                   │                    │
│  │ - Cấp quyền                         │                    │
│  └─────────────────────────────────────┘                    │
└─────────────────────────────────────────────────────────────┘
```

## 📦 Cài Đặt
### Yêu Cầu Hệ Thống
- Tiện ích mở rộng **MetaMask** trên trình duyệt (Chrome/Edge/Brave).
- Node.js (Nếu sử dụng Ganache-CLI) hoặc tải ứng dụng **Ganache UI**.

### Bước 1: Clone Repository
```bash
git clone https://github.com/dung-nguyenn/Cong-Nghe-BlockChain.git
cd Cong-Nghe-BlockChain
```

### Bước 2: Deploy Smart Contract
- Mở [Remix IDE](https://remix.ethereum.org/).
- Upload file `contracts/RiceFarming.sol` và compile.
- Deploy lên môi trường Injected Provider - MetaMask (chỉ định mạng Ganache hoặc Sepolia).
- Lấy **địa chỉ Contract** sau khi deploy thành công.

### Bước 3: Cấu hình Giao diện
- Mở file `js/main.js`.
- Cập nhật biến `CONTRACT_ADDRESS` bằng địa chỉ vừa lấy được ở Bước 2:
```javascript
const CONTRACT_ADDRESS = "0xYourContractAddressHere";
```

## 🚀 Sử Dụng

### 1. Chạy Web Local
- Bạn có thể chạy trực tiếp bằng cách mở file `index.html` trên trình duyệt.
- Hoặc sử dụng file `Chay_Web3.bat` để mở dự án nếu đã cấu hình sẵn.

### 2. Tương Tác
- Nhấn **Kết nối ví** để liên kết với MetaMask.
- Điền thông tin vào form (Tên nông dân, giai đoạn canh tác, chi tiết vật tư, vị trí...).
- Nhấn **Ký & Gửi Giao dịch**.
- Chấp thuận giao dịch trên popup của MetaMask.
- Xem nhật ký mới được thêm vào **Bảng tin Blockchain** ở phía bên phải.

## 📸 Screenshots
*(Bạn có thể thêm hình ảnh giao diện Web vào đây)*

## 🤝 Đóng Góp
Contributions, issues và feature requests đều được chào đón!

1. Fork repository.
2. Tạo branch (`git checkout -b feature/AmazingFeature`).
3. Commit changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to branch (`git push origin feature/AmazingFeature`).
5. Mở Pull Request.

## 📄 License
MIT License - xem file `LICENSE` để biết chi tiết.

## 👨💻 Tác Giả
**Dũng Nguyễn**

- GitHub: [@dung-nguyenn](https://github.com/dung-nguyenn)
- Trường Đại Học Đại Nam

⭐ **Nếu project này hữu ích, hãy cho một star nhé!** ⭐
