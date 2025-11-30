"use client"

import type React from "react"

import { useState, useEffect } from "react"
import SmartSimpleBrilliant from "../components/smart-simple-brilliant"
import YourWorkInSync from "../components/your-work-in-sync"
import EffortlessIntegration from "../components/effortless-integration-updated"
import NumbersThatSpeak from "../components/numbers-that-speak"
import DocumentationSection from "../components/documentation-section"
import TestimonialsSection from "../components/testimonials-section"
import FAQSection from "../components/faq-section"
import PricingSection from "../components/pricing-section"
import CTASection from "../components/cta-section"
import FooterSection from "../components/footer-section"
import { WalletSection } from "../components/wallet-section"

// Reusable Badge Component
function Badge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="px-[14px] py-[6px] bg-[#1a1a1a] shadow-[0px_0px_0px_4px_rgba(135,120,100,0.08)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(135,120,100,0.15)] shadow-xs">
      <div className="w-[14px] h-[14px] relative overflow-hidden flex items-center justify-center">{icon}</div>
      <div className="text-center flex justify-center flex-col text-[#d4c5b9] text-xs font-medium leading-3 font-sans">
        {text}
      </div>
    </div>
  )
}

export default function LandingPage() {
  const [activeCard, setActiveCard] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 2
        if (newProgress >= 100) {
          setActiveCard((current) => (current + 1) % 3)
          return 0
        }
        return newProgress
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [])

  const handleCardClick = (index: number) => {
    setActiveCard(index)
    setProgress(0)
  }

  const getDashboardContent = () => {
    switch (activeCard) {
      case 0:
        return <div className="text-[#8b7d75] text-sm">Secure Lending with Zero Knowledge Proofs</div>
      case 1:
        return <div className="text-[#8b7d75] text-sm">Real-time Portfolio Analytics</div>
      case 2:
        return <div className="text-[#8b7d75] text-sm">Privacy-Preserving Transactions</div>
      default:
        return <div className="text-[#8b7d75] text-sm">Secure Lending with Zero Knowledge Proofs</div>
    }
  }

  return (
    <div className="w-full min-h-screen relative bg-[#0f0f0f] overflow-x-hidden flex flex-col justify-start items-center">
      <div className="relative flex flex-col justify-start items-center w-full">
        {/* Main container with proper margins */}
        <div className="w-full max-w-none px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] relative flex flex-col justify-start items-start min-h-screen">
          {/* Left vertical line */}
          <div className="w-[1px] h-full absolute left-4 sm:left-6 md:left-8 lg:left-0 top-0 bg-[rgba(135,120,100,0.15)] shadow-[1px_0px_0px_rgba(15,15,15,0.5)] z-0"></div>

          {/* Right vertical line */}
          <div className="w-[1px] h-full absolute right-4 sm:right-6 md:right-8 lg:right-0 top-0 bg-[rgba(135,120,100,0.15)] shadow-[1px_0px_0px_rgba(15,15,15,0.5)] z-0"></div>

          <div className="self-stretch pt-[9px] overflow-hidden border-b border-[rgba(135,120,100,0.12)] flex flex-col justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-[66px] relative z-10">
            {/* Navigation */}
            <div className="w-full h-12 sm:h-14 md:h-16 lg:h-[84px] absolute left-0 top-0 flex justify-center items-center z-20 px-6 sm:px-8 md:px-12 lg:px-0">
              <div className="w-full h-0 absolute left-0 top-6 sm:top-7 md:top-8 lg:top-[42px] border-t border-[rgba(135,120,100,0.12)] shadow-[0px_1px_0px_rgba(15,15,15,0.5)]"></div>

              <div className="w-full max-w-[calc(100%-32px)] sm:max-w-[calc(100%-48px)] md:max-w-[calc(100%-64px)] lg:max-w-[500px] lg:w-[500px] h-10 sm:h-11 md:h-12 py-1.5 sm:py-2 px-4 sm:px-5 md:px-6 bg-[#1a1a1a] backdrop-blur-sm shadow-[0px_0px_0px_2px_rgba(135,120,100,0.1)] overflow-hidden rounded-[50px] flex justify-between items-center relative z-30">
                <div className="flex justify-center items-center">
                  <div className="flex justify-start items-center">
                    <div className="flex flex-col justify-center text-[#d4c5b9] text-sm sm:text-base font-medium leading-5 italic text-left md:text-2xl font-mono text-primary">
                      {"Zinko"}
                    </div>
                  </div>
                  <div className="pl-4 sm:pl-5 md:pl-6 lg:pl-8 flex justify-start items-start flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                    <div className="flex justify-start items-center">
                      <div className="flex flex-col justify-center text-[rgba(212,197,185,0.70)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#d4c5b9] transition-colors cursor-pointer">
                        Lend
                      </div>
                    </div>
                    <div className="flex justify-start items-center">
                      <div className="flex flex-col justify-center text-[rgba(212,197,185,0.70)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#d4c5b9] transition-colors cursor-pointer">
                        Borrow
                      </div>
                    </div>
                    <div className="flex justify-start items-center">
                      <div className="flex flex-col justify-center text-[rgba(212,197,185,0.70)] text-xs md:text-[13px] font-medium leading-[14px] font-sans hover:text-[#d4c5b9] transition-colors cursor-pointer">
                        Docs
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wallet Section */}
            <WalletSection />

            {/* Hero Section */}
            <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center px-2 sm:px-4 md:px-8 lg:px-0 w-full sm:pl-0 sm:pr-0 pl-0 pr-0">
              <div className="w-full max-w-[937px] lg:w-[937px] flex flex-col justify-center items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                <div className="mb-4 sm:mb-6 md:mb-8 flex justify-center w-full">
                  <img
                    src="/images/design-mode/ghostlend%20logo.png"
                    alt="Ghostlend Logo"
                    className="w-20 sm:w-24 h-20 sm:h-24 object-contain drop-shadow-lg md:w-[123px] md:h-[125px]"
                  />
                </div>

                <div className="self-stretch rounded-[3px] flex flex-col justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-center">
                  <div className="w-full max-w-[748.71px] lg:w-[748.71px] text-center flex justify-center flex-col text-[#d4c5b9] text-[24px] xs:text-[28px] sm:text-[36px] md:text-[52px] lg:text-[80px] font-normal leading-[1.1] sm:leading-[1.15] md:leading-[1.2] lg:leading-24 font-serif px-2 sm:px-4 md:px-0">
                    Secure Lending
                    <br />
                    with Zero Knowledge
                  </div>
                  <div className="w-full max-w-[506.08px] lg:w-[506.08px] text-center flex justify-center flex-col text-[rgba(212,197,185,0.70)] sm:text-lg md:text-xl leading-[1.4] sm:leading-[1.45] md:leading-[1.5] lg:leading-7 font-sans px-2 sm:px-4 md:px-0 lg:text-lg font-medium text-sm">
                    Borrow and lend with complete privacy using advanced
                    <br className="hidden sm:block" />
                    Zero Knowledge protocols on Flow EVM.
                  </div>
                </div>
              </div>

              <div className="w-full max-w-[497px] lg:w-[497px] flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                <div className="backdrop-blur-[8.25px] flex justify-start items-center gap-4">
                  <div className="h-10 sm:h-11 md:h-12 px-6 sm:px-8 md:px-10 lg:px-12 py-2 sm:py-[6px] relative bg-[#d4c5b9] shadow-[0px_0px_0px_2.5px_rgba(212,197,185,0.15)_inset] overflow-hidden rounded-full flex justify-center items-center">
                    <div className="w-20 sm:w-24 md:w-28 lg:w-44 h-[41px] absolute left-0 top-[-0.5px] bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0.10)] mix-blend-multiply"></div>
                    <div className="flex flex-col justify-center text-[#0f0f0f] text-sm sm:text-base md:text-[15px] font-medium leading-5 font-sans">
                      Launch App
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
                <img
                  src="/mask-group-pattern.svg"
                  alt=""
                  className="w-[936px] sm:w-[1404px] md:w-[2106px] lg:w-[2808px] h-auto opacity-10 sm:opacity-15 md:opacity-20 mix-blend-multiply"
                  style={{
                    filter: "hue-rotate(45deg) saturate(0.5) brightness(0.8)",
                  }}
                />
              </div>

              <div className="w-full max-w-[960px] lg:w-[960px] pt-2 sm:pt-4 pb-6 sm:pb-8 md:pb-10 px-2 sm:px-4 md:px-6 lg:px-11 flex flex-col justify-center items-center gap-2 relative z-5 my-8 sm:my-12 md:my-16 lg:my-16 mb-0 lg:pb-0">
                <div className="w-full max-w-[960px] lg:w-[960px] h-[200px] sm:h-[280px] md:h-[450px] lg:h-[695.55px] bg-[#1a1a1a] shadow-[0px_0px_0px_0.9056603908538818px_rgba(212,197,185,0.1)] overflow-hidden rounded-[6px] sm:rounded-[8px] lg:rounded-[9.06px] flex flex-col justify-start items-start">
                  {/* Dashboard Content */}
                  <div className="self-stretch flex-1 flex justify-start items-start">
                    {/* Main Content */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="relative w-full h-full overflow-hidden">
                        {/* Product Image 1 */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            activeCard === 0 ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                          }`}
                        >
                          <img
                            src="/images/design-mode/dsadsadsa.jpg.jpeg"
                            alt="Lending Dashboard"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Image 2 */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            activeCard === 1 ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                          }`}
                        >
                          <img
                            src="/images/design-mode/v0_image-2.jpg"
                            alt="Analytics Dashboard"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Product Image 3 */}
                        <div
                          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                            activeCard === 2 ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm"
                          }`}
                        >
                          <img
                            src="/images/design-mode/v0_image.jpg"
                            alt="Data Visualization Dashboard"
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="self-stretch border-t border-[#2a2a2a] border-b border-[#2a2a2a] flex justify-center items-start">
                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  {/* Left decorative pattern */}
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(135,120,100,0.08)] outline-offset-[-0.25px] bg-destructive"
                      ></div>
                    ))}
                  </div>
                </div>

                <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
                  {/* Feature Cards */}
                  <FeatureCard
                    title="Secure Lending"
                    description="Lend your assets with complete privacy using Zero Knowledge proofs."
                    isActive={activeCard === 0}
                    progress={activeCard === 0 ? progress : 0}
                    onClick={() => handleCardClick(0)}
                  />
                  <FeatureCard
                    title="Private Borrowing"
                    description="Borrow without revealing your identity or collateral details."
                    isActive={activeCard === 1}
                    progress={activeCard === 1 ? progress : 0}
                    onClick={() => handleCardClick(1)}
                  />
                  <FeatureCard
                    title="Transparent Rates"
                    description="Fair, algorithmic interest rates determined by market dynamics."
                    isActive={activeCard === 2}
                    progress={activeCard === 2 ? progress : 0}
                    onClick={() => handleCardClick(2)}
                  />
                </div>

                <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                  {/* Right decorative pattern */}
                  <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                    {Array.from({ length: 50 }).map((_, i) => (
                      <div
                        key={i}
                        className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(135,120,100,0.08)] outline-offset-[-0.25px] bg-destructive"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Social Proof Section */}
              <div className="w-full border-b border-[rgba(135,120,100,0.12)] flex flex-col justify-center items-center">
                <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(135,120,100,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(15,15,15,0.3)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="3" width="4" height="6" stroke="#d4c5b9" strokeWidth="1" fill="none" />
                          <rect x="7" y="1" width="4" height="8" stroke="#d4c5b9" strokeWidth="1" fill="none" />
                          <rect x="2" y="4" width="1" height="1" fill="#d4c5b9" />
                          <rect x="3.5" y="4" width="1" height="1" fill="#d4c5b9" />
                          <rect x="2" y="5.5" width="1" height="1" fill="#d4c5b9" />
                          <rect x="3.5" y="5.5" width="1" height="1" fill="#d4c5b9" />
                          <rect x="8" y="2" width="1" height="1" fill="#d4c5b9" />
                          <rect x="9.5" y="2" width="1" height="1" fill="#d4c5b9" />
                          <rect x="8" y="3.5" width="1" height="1" fill="#d4c5b9" />
                          <rect x="9.5" y="3.5" width="1" height="1" fill="#d4c5b9" />
                          <rect x="8" y="5" width="1" height="1" fill="#d4c5b9" />
                          <rect x="9.5" y="5" width="1" height="1" fill="#d4c5b9" />
                        </svg>
                      }
                      text="Trusted by Builders"
                    />
                    <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-serif tracking-wide italic">
                      Privacy meets performance
                    </div>
                    <div className="self-stretch text-center text-[#a89f97] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      Built on Flow EVM with enterprise-grade security
                      <br className="hidden sm:block" />
                      and Zero Knowledge protocol verification.
                    </div>
                  </div>
                </div>

                {/* Logo Grid */}
                <div className="self-stretch border-[rgba(135,120,100,0.12)] flex justify-center items-start border-t border-b-0">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Left decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(135,120,100,0.08)] outline-offset-[-0.25px] bg-destructive"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-0 border-l border-r border-[rgba(135,120,100,0.12)]">
                    {/* Logo Grid */}
                    {Array.from({ length: 8 }).map((_, index) => {
                      const isMobileFirstColumn = index % 2 === 0
                      const isMobileLastColumn = index % 2 === 1
                      const isDesktopFirstColumn = index % 4 === 0
                      const isDesktopLastColumn = index % 4 === 3
                      const isMobileBottomRow = index >= 6
                      const isDesktopTopRow = index < 4
                      const isDesktopBottomRow = index >= 4

                      return (
                        <div
                          key={index}
                          className={`
                            h-24 xs:h-28 sm:h-32 md:h-36 lg:h-40 flex justify-center items-center gap-1 xs:gap-2 sm:gap-3
                            border-b border-[rgba(135,120,100,0.1)]
                            ${index < 6 ? "sm:border-b-[0.5px]" : "sm:border-b"}
                            ${index >= 6 ? "border-b" : ""}
                            ${isMobileFirstColumn ? "border-r-[0.5px]" : ""}
                            sm:border-r-[0.5px] sm:border-l-0
                            ${isDesktopFirstColumn ? "md:border-l" : "md:border-l-[0.5px]"}
                            ${isDesktopLastColumn ? "md:border-r" : "md:border-r-[0.5px]"}
                            ${isDesktopTopRow ? "md:border-b-[0.5px]" : ""}
                            ${isDesktopBottomRow ? "md:border-t-[0.5px] md:border-b" : ""}
                            border-[rgba(135,120,100,0.12)]
                          `}
                        >
                          <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 relative shadow-[0px_-4px_8px_rgba(212,197,185,0.1)_inset] overflow-hidden rounded-full">
                            <img src="/horizon-icon.svg" alt="Partner" className="w-full h-full object-contain" />
                          </div>
                          <div className="text-center flex justify-center flex-col text-[#d4c5b9] text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-tight md:leading-9 font-sans">
                            Flow
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Right decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 50 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(135,120,100,0.08)] outline-offset-[-0.25px] bg-destructive"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bento Grid Section */}
              <div className="w-full border-b border-[rgba(135,120,100,0.12)] flex flex-col justify-center items-center">
                {/* Header Section */}
                <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(135,120,100,0.12)] flex justify-center items-center gap-6">
                  <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-[0px_2px_4px_rgba(15,15,15,0.3)] overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4 shadow-none">
                    <Badge
                      icon={
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="1" y="1" width="4" height="4" stroke="#d4c5b9" strokeWidth="1" fill="none" />
                          <rect x="7" y="1" width="4" height="4" stroke="#d4c5b9" strokeWidth="1" fill="none" />
                          <rect x="1" y="7" width="4" height="4" stroke="#d4c5b9" strokeWidth="1" fill="none" />
                          <rect x="7" y="7" width="4" height="4" stroke="#d4c5b9" strokeWidth="1" fill="none" />
                        </svg>
                      }
                      text="Core Features"
                    />
                    <div className="w-full max-w-[598.06px] lg:w-[598.06px] text-center flex justify-center flex-col text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] font-sans tracking-tight">
                      Privacy-first architecture
                    </div>
                    <div className="self-stretch text-center text-[#a89f97] text-sm sm:text-base font-normal leading-6 sm:leading-7 font-sans">
                      Advanced cryptography ensures your financial data
                      <br />
                      remains completely private and secure.
                    </div>
                  </div>
                </div>

                {/* Bento Grid Content */}
                <div className="self-stretch flex justify-center items-start">
                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Left decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 200 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(135,120,100,0.08)] outline-offset-[-0.25px] bg-zinc-950"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(135,120,100,0.12)]">
                    {/* Top Left */}
                    <div className="border-b border-r-0 md:border-r border-[rgba(135,120,100,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 text-primary bg-red-950">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-white text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Zero Knowledge Proofs
                        </h3>
                        <p className="text-[#a89f97] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Verify transactions without revealing sensitive information.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
                        <SmartSimpleBrilliant
                          width="100%"
                          height="100%"
                          theme="dark"
                          className="scale-50 sm:scale-65 md:scale-75 lg:scale-90"
                        />
                      </div>
                    </div>

                    {/* Top Right */}
                    <div className="border-b border-[rgba(135,120,100,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-white font-semibold leading-tight font-sans text-lg sm:text-xl">
                          Flow EVM Integration
                        </h3>
                        <p className="text-[#a89f97] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Built on Flow blockchain for scalability and security.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden text-right items-center justify-center">
                        <YourWorkInSync
                          width="400"
                          height="250"
                          theme="dark"
                          className="scale-60 sm:scale-75 md:scale-90"
                        />
                      </div>
                    </div>

                    {/* Bottom Left */}
                    <div className="border-r-0 md:border-r border-[rgba(135,120,100,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-transparent">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-white text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Smart Contracts
                        </h3>
                        <p className="text-[#a89f97] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Audited contracts ensure safe and transparent operations.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden justify-center items-center relative bg-transparent">
                        <div className="w-full h-full flex items-center justify-center bg-transparent">
                          <EffortlessIntegration width={400} height={250} className="max-w-full max-h-full" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Bottom Right */}
                    <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 bg-orange-950">
                      <div className="flex flex-col gap-2">
                        <h3 className="text-white text-lg sm:text-xl font-semibold leading-tight font-sans">
                          Real-time Analytics
                        </h3>
                        <p className="text-[#a89f97] text-sm md:text-base font-normal leading-relaxed font-sans">
                          Monitor your portfolio with comprehensive insights.
                        </p>
                      </div>
                      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex overflow-hidden items-center justify-center relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <NumbersThatSpeak
                            width="100%"
                            height="100%"
                            theme="dark"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0f0f0f] to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                  </div>

                  <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
                    {/* Right decorative pattern */}
                    <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
                      {Array.from({ length: 200 }).map((_, i) => (
                        <div
                          key={i}
                          className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(135,120,100,0.08)] outline-offset-[-0.25px]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Documentation Section */}
              <DocumentationSection />

              {/* Testimonials Section */}
              <TestimonialsSection />

              {/* Pricing Section */}
              <PricingSection />

              {/* FAQ Section */}
              <FAQSection />

              {/* CTA Section */}
              <CTASection />

              {/* Footer Section */}
              <FooterSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// FeatureCard component
function FeatureCard({
  title,
  description,
  isActive,
  progress,
  onClick,
}: {
  title: string
  description: string
  isActive: boolean
  progress: number
  onClick: () => void
}) {
  return (
    <div
      className={`w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 last:border-b-0 ${
        isActive
          ? "bg-[#1a1a1a] shadow-[0px_0px_0px_0.75px_#2a2a2a_inset]"
          : "border-l-0 border-r-0 md:border border-[#2a2a2a]/80"
      }`}
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute top-0 left-0 w-full h-0.5 bg-[rgba(135,120,100,0.1)]">
          <div
            className="h-full bg-[#d4c5b9] transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      <div className="self-stretch flex justify-center flex-col text-[#d4c5b9] text-sm md:text-sm font-semibold leading-6 md:leading-6 font-sans">
        {title}
      </div>
      <div className="self-stretch text-[#8b7d75] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px] font-sans">
        {description}
      </div>
    </div>
  )
}
