// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * RiceChain Smart Contract
 * Quản lý nhật ký canh tác lúa gạo trên Blockchain Ganache
 */
contract RiceFarming {
    struct FarmingLog {
        uint256 id;
        string farmer;
        string stage;
        string notes;
        string location;
        uint256 timestamp;
        address recorder;
    }

    FarmingLog[] public logs;
    
    event LogAdded(uint256 id, string farmer, string stage);

    // Lưu một nhật ký mới vào Blockchain
    function addLog(string memory _farmer, string memory _stage, string memory _notes, string memory _location) public {
        uint256 logId = logs.length;
        logs.push(FarmingLog(
            logId,
            _farmer,
            _stage,
            _notes,
            _location,
            block.timestamp,
            msg.sender
        ));
        emit LogAdded(logId, _farmer, _stage);
    }

    // Lấy toàn bộ danh sách nhật ký
    function getAllLogs() public view returns (FarmingLog[] memory) {
        return logs;
    }

    // Lấy số lượng bản ghi
    function getLogsCount() public view returns (uint256) {
        return logs.length;
    }
}
