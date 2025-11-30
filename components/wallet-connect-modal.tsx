"use client"

import { useWallet } from "./wallet-provider"
import { X, ChevronRight } from "lucide-react"

interface WalletConnectModalProps {
  isOpen: boolean
  onClose: () => void
}

export function WalletConnectModal({ isOpen, onClose }: WalletConnectModalProps) {
  const { connect, isConnecting, connectingWallet } = useWallet()

  if (!isOpen) return null

  const wallets = [
    {
      id: "metamask",
      name: "MetaMask",
      description: "Connect using browser wallet",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
          <rect width="40" height="40" rx="8" fill="#F6851B" />
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
      description: "Connect using Phantom wallet",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
          <rect width="40" height="40" rx="8" fill="#AB9FF2" />
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
      name: "Coinbase Wallet",
      description: "Connect using Coinbase wallet",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
          <rect width="40" height="40" rx="8" fill="#0052FF" />
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
      description: "Scan with mobile wallet",
      icon: (
        <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
          <rect width="40" height="40" rx="8" fill="#3B99FC" />
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
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-[420px] mx-4 bg-background border border-border rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div>
            <h2 className="text-foreground text-lg font-semibold font-sans">Connect Wallet</h2>
            <p className="text-muted-foreground text-sm mt-0.5">Select your preferred wallet</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-secondary hover:bg-muted transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Wallet List */}
        <div className="p-4 space-y-2">
          {wallets.map((wallet) => (
            <button
              key={wallet.id}
              onClick={() => handleConnect(wallet.id)}
              disabled={isConnecting}
              className="w-full group flex items-center gap-4 p-4 rounded-xl bg-secondary border border-border/50 hover:border-primary/30 hover:bg-muted transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="flex-shrink-0">{wallet.icon}</div>
              <div className="flex-1 text-left">
                <div className="flex items-center gap-2">
                  <span className="text-foreground font-medium">{wallet.name}</span>
                  {wallet.popular && (
                    <span className="px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mt-0.5">{wallet.description}</p>
              </div>
              {isConnecting && connectingWallet === wallet.id ? (
                <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
              ) : (
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              )}
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-border bg-card">
          <p className="text-muted-foreground/60 text-xs text-center">
            By connecting, you agree to our{" "}
            <a href="#" className="text-primary hover:underline">
              Terms
            </a>{" "}
            and{" "}
            <a href="#" className="text-primary hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
