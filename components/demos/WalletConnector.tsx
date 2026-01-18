"use client";

import { useState } from "react";
import { Wallet, CheckCircle, XCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { Badge } from "../ui/Badge";

export function WalletConnector() {
  const [connected, setConnected] = useState(false);
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<string>("");

  const connectWallet = async () => {
    try {
      setError("");
      // Simulate wallet connection
      // In a real implementation, you would use ethers.js or viem here
      const mockAddress = "0x" + Array.from({ length: 40 }, () =>
        Math.floor(Math.random() * 16).toString(16)
      ).join("");

      setTimeout(() => {
        setAddress(mockAddress);
        setConnected(true);
      }, 1000);
    } catch (err) {
      setError("Failed to connect wallet. Please install a Web3 wallet extension.");
      setConnected(false);
    }
  };

  const disconnectWallet = () => {
    setConnected(false);
    setAddress("");
    setError("");
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wallet className="h-5 w-5" />
          Web3 Wallet Connector
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!connected ? (
          <>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Connect your Web3 wallet to interact with decentralized applications.
            </p>
            <Button onClick={connectWallet} className="w-full">
              Connect Wallet
            </Button>
            {error && (
              <div className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                <XCircle className="h-4 w-4" />
                <span>{error}</span>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
              <CheckCircle className="h-4 w-4" />
              <span>Wallet Connected</span>
            </div>
            <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-lg">
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-1">Address</p>
              <p className="font-mono text-sm break-all">{address}</p>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary">Network: Ethereum</Badge>
              <Badge variant="secondary">Chain ID: 1</Badge>
            </div>
            <Button variant="outline" onClick={disconnectWallet} className="w-full">
              Disconnect
            </Button>
            <p className="text-xs text-zinc-500 dark:text-zinc-500 text-center">
              This is a demo. In production, this would connect to MetaMask, WalletConnect, or other Web3 wallets.
            </p>
          </>
        )}
      </CardContent>
    </Card>
  );
}
