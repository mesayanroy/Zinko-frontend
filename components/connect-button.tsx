"use client"

import { useState } from "react"
import { useWallet } from "./wallet-provider"
import { WalletConnectModal } from "./wallet-connect-modal"
import { ChevronDown, Power, Copy, ExternalLink, Check } from "lucide-react"

// Keeping it for backward compatibility but it's no longer used in the navbar
export function ConnectButton() {
  const { address, isConnected, disconnect } = useWallet()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  const copyAddress = async () => {
    if (address) {
      await navigator.clipboard.writeText(address)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const openExplorer = () => {
    if (address) {
      window.open(`https://etherscan.io/address/${address}`, "_blank")
    }
  }

  if (isConnected && address) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 px-3 py-1.5 bg-secondary border border-border rounded-full hover:border-primary/30 transition-all"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-primary text-sm font-medium font-mono">{formatAddress(address)}</span>
          <ChevronDown
            className={`w-4 h-4 text-muted-foreground transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} />
            <div className="absolute right-0 top-full mt-2 w-56 bg-background border border-border rounded-xl shadow-xl overflow-hidden z-50">
              <div className="p-3 border-b border-border">
                <p className="text-muted-foreground text-xs mb-1">Connected</p>
                <p className="text-foreground text-sm font-mono">{formatAddress(address)}</p>
              </div>
              <div className="p-2">
                <button
                  onClick={copyAddress}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary transition-colors"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                  <span className="text-primary text-sm">{copied ? "Copied!" : "Copy Address"}</span>
                </button>
                <button
                  onClick={openExplorer}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary transition-colors"
                >
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  <span className="text-primary text-sm">View on Explorer</span>
                </button>
                <button
                  onClick={() => {
                    disconnect()
                    setIsDropdownOpen(false)
                  }}
                  className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-secondary transition-colors"
                >
                  <Power className="w-4 h-4 text-destructive" />
                  <span className="text-destructive text-sm">Disconnect</span>
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    )
  }

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-1.5 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium rounded-full transition-colors shadow-[0px_0px_0px_2px_hsl(var(--primary)/0.15)]"
      >
        Connect
      </button>
      <WalletConnectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
