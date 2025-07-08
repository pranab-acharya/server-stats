import si from "systeminformation";
import os from "os";

export async function getStats() {
    const cpu = await si.currentLoad();
    const mem = await si.mem();
    const disk = await si.fsSize();
    const net = await si.networkStats();

    return {
        cpuLoad: cpu.currentLoad.toFixed(2),
        memUsedMB: (mem.used / 1024 / 1024).toFixed(2),
        memTotalMB: (mem.total / 1024 / 1024).toFixed(2),
        diskUsed: disk[0].used,
        diskTotal: disk[0].size,
        netRxMB: (net[0].rx_bytes / 1024 / 1024).toFixed(2),
        netTxMB: (net[0].tx_bytes / 1024 / 1024).toFixed(2),
        uptimeSeconds: os.uptime()
    };
}
