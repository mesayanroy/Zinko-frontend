"use client"

import { useState } from "react"
import { useWallet } from "./wallet-provider"
import { ChevronDown, Power, Copy, ExternalLink, Check, Wallet, Shield, Zap } from "lucide-react"

export function WalletSection() {
  const { address, isConnected, disconnect, connect, isConnecting, connectingWallet } = useWallet()
  const [isExpanded, setIsExpanded] = useState(false)
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

  const wallets = [
    {
      id: "metamask",
      name: "MetaMask",
      description: "Browser extension wallet",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
          <rect width="40" height="40" rx="10" fill="#F6851B" />
          <path
            d="M30.5 8L21.2 14.9L23 10.7L30.5 8Z"
            fill="#E2761B"
            stroke="#E2761B"
            strokeWidth="0.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 8L18.7 15L17 10.7L9.5 8Z"
            fill="#E4761B"
            stroke="#E4761B"
            strokeWidth="0.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27 24.5L24.5 28.5L30 30L31.5 24.7L27 24.5Z"
            fill="#E4761B"
            stroke="#E4761B"
            strokeWidth="0.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.5 24.7L10 30L15.5 28.5L13 24.5L8.5 24.7Z"
            fill="#E4761B"
            stroke="#E4761B"
            strokeWidth="0.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.2 18.5L14 20.3L19.5 20.5L19.3 14.7L15.2 18.5Z"
            fill="#E4761B"
            stroke="#E4761B"
            strokeWidth="0.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.8 18.5L20.6 14.5L20.5 20.5L26 20.3L24.8 18.5Z"
            fill="#E4761B"
            stroke="#E4761B"
            strokeWidth="0.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.5 28.5L19.2 26.5L16 24.7L15.5 28.5Z"
            fill="#E4761B"
            stroke="#E4761B"
            strokeWidth="0.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.8 26.5L24.5 28.5L24 24.7L20.8 26.5Z"
            fill="#E4761B"
            stroke="#E4761B"
            strokeWidth="0.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      popular: true,
    },
    {
      id: "phantom",
      name: "Phantom",
      description: "Multi-chain wallet",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
          <rect width="40" height="40" rx="10" fill="#AB9FF2" />
          <path
            d="M28.5 20C28.5 14.75 24.25 10.5 19 10.5C13.75 10.5 9.5 14.75 9.5 20C9.5 22.5 10.5 24.75 12.1 26.35C12.1 26.35 12.25 26.5 12.25 26.65C12.25 27.5 11.5 28.25 10.65 28.25C10.4 28.25 10.15 28.15 10 28C9.5 27.65 9 28.15 9.25 28.65C10 30.15 11.65 31 13.4 31C15.9 31 17.9 29 17.9 26.5V26.35C17.9 25.65 18.5 25.05 19.2 25.05C19.9 25.05 20.5 25.65 20.5 26.35V26.5C20.5 29 22.5 31 25 31C26.75 31 28.4 30.15 29.15 28.65C29.4 28.15 28.9 27.65 28.4 28C28.25 28.15 28 28.25 27.75 28.25C26.9 28.25 26.15 27.5 26.15 26.65C26.15 26.5 26.3 26.35 26.3 26.35C27.9 24.75 28.9 22.5 28.9 20H28.5Z"
            fill="white"
          />
          <circle cx="15" cy="19" r="1.5" fill="#AB9FF2" />
          <circle cx="23" cy="19" r="1.5" fill="#AB9FF2" />
        </svg>
      ),
      popular: true,
    },
    {
      id: "coinbase",
      name: "Coinbase",
      description: "Coinbase Wallet",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
          <rect width="40" height="40" rx="10" fill="#0052FF" />
          <rect x="10" y="10" width="20" height="20" rx="10" fill="white" />
          <rect x="15" y="17" width="4" height="6" rx="1" fill="#0052FF" />
          <rect x="21" y="17" width="4" height="6" rx="1" fill="#0052FF" />
        </svg>
      ),
      popular: false,
    },
    {
      id: "walletconnect",
      name: "WalletConnect",
      description: "Scan with mobile",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
          <rect width="40" height="40" rx="10" fill="#3B99FC" />
          <path
            d="M13.5 16.5C17.1 13 23 13 26.5 16.5L27 17C27.2 17.2 27.2 17.5 27 17.7L25.5 19.2C25.4 19.3 25.2 19.3 25.1 19.2L24.4 18.5C22 16.1 18 16.1 15.6 18.5L14.8 19.3C14.7 19.4 14.5 19.4 14.4 19.3L12.9 17.8C12.7 17.6 12.7 17.3 12.9 17.1L13.5 16.5ZM29 18.8L30.3 20.1C30.5 20.3 30.5 20.6 30.3 20.8L24.3 26.8C24.1 27 23.8 27 23.6 26.8L19.5 22.7C19.45 22.65 19.35 22.65 19.3 22.7L15.2 26.8C15 27 14.7 27 14.5 26.8L8.5 20.8C8.3 20.6 8.3 20.3 8.5 20.1L9.8 18.8C10 18.6 10.3 18.6 10.5 18.8L14.6 22.9C14.65 22.95 14.75 22.95 14.8 22.9L18.9 18.8C19.1 18.6 19.4 18.6 19.6 18.8L23.7 22.9C23.75 22.95 23.85 22.95 23.9 22.9L28 18.8C28.2 18.6 28.5 18.6 28.7 18.8L29 18.8Z"
            fill="white"
          />
        </svg>
      ),
      popular: false,
    },
  ]

  const handleConnect = async (walletId: string) => {
    await connect(walletId)
  }

  // Connected state - show compact connected wallet card
  if (isConnected && address) {
    return (
      <div className="absolute right-4 sm:right-6 md:right-8 lg:right-0 top-[70px] sm:top-[80px] md:top-[90px] lg:top-[100px] z-20 px-4 lg:px-0">
        <div className="bg-background border border-border rounded-2xl p-4 shadow-xl backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div>
              <p className="text-muted-foreground text-xs">Connected</p>
              <p className="text-foreground font-mono text-sm">{formatAddress(address)}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={copyAddress}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-secondary border border-border hover:border-primary/30 transition-colors"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-500" />
              ) : (
                <Copy className="w-4 h-4 text-muted-foreground" />
              )}
              <span className="text-primary text-xs">{copied ? "Copied" : "Copy"}</span>
            </button>
            <button
              onClick={() => window.open(`https://etherscan.io/address/${address}`, "_blank")}
              className="flex items-center justify-center px-3 py-2 rounded-lg bg-secondary border border-border hover:border-primary/30 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </button>
            <button
              onClick={disconnect}
              className="flex items-center justify-center px-3 py-2 rounded-lg bg-destructive/10 border border-destructive/20 hover:bg-destructive/20 transition-colors"
            >
              <Power className="w-4 h-4 text-destructive" />
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Disconnected state - show beautiful wallet connection panel
  return (
    <div className="absolute right-4 sm:right-6 md:right-8 lg:right-0 top-[70px] sm:top-[80px] md:top-[90px] lg:top-[100px] z-20 px-4 lg:px-0">
      <div className="bg-background border border-border rounded-2xl shadow-xl backdrop-blur-sm overflow-hidden w-[280px] sm:w-[320px]">
        {/* Header */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-4 hover:bg-secondary/50 transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/10">
              <Wallet className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-foreground font-medium text-sm">Connect Wallet</p>
              <p className="text-muted-foreground text-xs">Secure lending & borrowing</p>
            </div>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>

        {/* Expandable Wallet Options */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t border-border">
            {/* Feature badges */}
            <div className="px-4 py-3 flex gap-2 flex-wrap">
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary border border-border">
                <Shield className="w-3 h-3 text-emerald-500" />
                <span className="text-[10px] text-muted-foreground">ZK Secured</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary border border-border">
                <Zap className="w-3 h-3 text-amber-500" />
                <span className="text-[10px] text-muted-foreground">Flow EVM</span>
              </div>
            </div>

            {/* Wallet list */}
            <div className="px-3 pb-3 space-y-1.5">
              {wallets.map((wallet) => (
                <button
                  key={wallet.id}
                  onClick={() => handleConnect(wallet.id)}
                  disabled={isConnecting}
                  className="w-full group flex items-center gap-3 p-3 rounded-xl bg-secondary border border-border/50 hover:border-primary/30 hover:bg-muted transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex-shrink-0 transform group-hover:scale-110 transition-transform">
                    {wallet.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-foreground text-sm font-medium">{wallet.name}</span>
                      {wallet.popular && (
                        <span className="px-1.5 py-0.5 text-[9px] font-medium bg-primary/10 text-primary rounded-full uppercase tracking-wider">
                          Popular
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-xs">{wallet.description}</p>
                  </div>
                  {isConnecting && connectingWallet === wallet.id ? (
                    <div className="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-muted-foreground -rotate-90 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                  )}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className="px-4 py-3 bg-card border-t border-border">
              <p className="text-muted-foreground/60 text-[10px] text-center">
                By connecting, you agree to our Terms & Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
