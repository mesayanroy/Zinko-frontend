"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, useCallback } from "react"

interface WalletContextType {
  address: string | null
  isConnected: boolean
  isConnecting: boolean
  connectingWallet: string | null
  connect: (walletType: string) => Promise<void>
  disconnect: () => void
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [address, setAddress] = useState<string | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectingWallet, setConnectingWallet] = useState<string | null>(null)

  useEffect(() => {
    const checkConnection = async () => {
      if (typeof window !== "undefined" && (window as any).ethereum) {
        try {
          const accounts = await (window as any).ethereum.request({
            method: "eth_accounts",
          })
          if (accounts.length > 0) {
            setAddress(accounts[0])
            setIsConnected(true)
          }
        } catch (error) {
          console.error("Error checking wallet connection:", error)
        }
      }
    }
    checkConnection()

    // Listen for account changes
    if (typeof window !== "undefined" && (window as any).ethereum) {
      ;(window as any).ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          setAddress(accounts[0])
          setIsConnected(true)
        } else {
          setAddress(null)
          setIsConnected(false)
        }
      })
    }
  }, [])

  const connect = useCallback(async (walletType: string) => {
    setIsConnecting(true)
    setConnectingWallet(walletType)

    try {
      let provider: any = null

      if (walletType === "metamask") {
        provider = (window as any).ethereum
        if (!provider?.isMetaMask) {
          window.open("https://metamask.io/download/", "_blank")
          setIsConnecting(false)
          setConnectingWallet(null)
          return
        }
      } else if (walletType === "phantom") {
        provider = (window as any).phantom?.ethereum || (window as any).ethereum
        if (!(window as any).phantom) {
          window.open("https://phantom.app/download", "_blank")
          setIsConnecting(false)
          setConnectingWallet(null)
          return
        }
      } else if (walletType === "coinbase") {
        provider = (window as any).coinbaseWalletExtension || (window as any).ethereum
        if (!(window as any).coinbaseWalletExtension && !(window as any).ethereum?.isCoinbaseWallet) {
          window.open("https://www.coinbase.com/wallet/downloads", "_blank")
          setIsConnecting(false)
          setConnectingWallet(null)
          return
        }
      } else if (walletType === "walletconnect") {
        provider = (window as any).ethereum
      }

      if (!provider) {
        window.open("https://metamask.io/download/", "_blank")
        setIsConnecting(false)
        setConnectingWallet(null)
        return
      }

      const accounts = await provider.request({
        method: "eth_requestAccounts",
      })

      if (accounts.length > 0) {
        setAddress(accounts[0])
        setIsConnected(true)
      }
    } catch (error: any) {
      if (error.code !== 4001) {
        console.error("Error connecting wallet:", error)
      }
    } finally {
      setIsConnecting(false)
      setConnectingWallet(null)
    }
  }, [])

  const disconnect = useCallback(() => {
    setAddress(null)
    setIsConnected(false)
  }, [])

  return (
    <WalletContext.Provider value={{ address, isConnected, isConnecting, connectingWallet, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  const context = useContext(WalletContext)
  if (!context) {
    throw new Error("useWallet must be used within WalletProvider")
  }
  return context
}
