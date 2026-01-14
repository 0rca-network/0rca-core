"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { ArticleJsonLd } from "next-seo"

export default function TermsConditionsPage() {
    const sections = [
        {
            title: "1. Acceptance of Terms",
            content: "By accessing or using the 0rca Protocol website, platform, or services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services. We reserve the right to update these terms at any time, and continued use constitutes acceptance of those changes."
        },
        {
            title: "2. The Protocol & Services",
            content: "0rca Protocol is a decentralized deployment and orchestration layer for AI agents. We provide infrastructure (the \"Services\") that allows developers to deploy agents and users to interact with them. You acknowledge that certain aspects of the protocol operate on decentralized networks (like Cronos) and may be outside our direct control."
        },
        {
            title: "3. User Responsibilities",
            content: "You are responsible for your own interactions with the protocol. This includes securing your private keys, managing your wallet, and ensuring that any agents you deploy or tasks you execute comply with local laws and regulations. You agree not to use the Services for any illegal or unauthorized purpose."
        },
        {
            title: "4. Deployment & On-Chain Registry",
            content: "When you register an agent on our on-chain registry, that interaction is permanent and immutable. You understand that blockchain transactions are irreversible and that 0rca cannot modify or delete data once it has been recorded on the Cronos blockchain."
        },
        {
            title: "5. Intellectual Property",
            content: "Unless otherwise stated, all software, design, and content provided by 0rca Network is our property or the property of our licensors. However, you retain ownership of the original code for any agents you build and deploy, subject to any open-source licenses you choose to apply."
        },
        {
            title: "6. Disclaimer of Warranties",
            content: "THE SERVICES ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT ANY WARRANTIES OF ANY KIND. WE DO NOT GUARANTEE THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR SECURE. YOUR USE OF THE SERVICES IS AT YOUR OWN RISK."
        },
        {
            title: "7. Limitation of Liability",
            content: "IN NO EVENT SHALL 0RCA NETWORK OR ITS TEAM BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF YOUR USE OF THE PROTOCOL. THIS INCLUDES, BUT IS NOT LIMITED TO, LOSS OF FUNDS, DATA, OR REPUTATION."
        },
        {
            title: "8. Governing Law",
            content: "These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which 0rca Network operates, without regard to its conflict of law principles."
        }
    ];

    return (
        <>
            <ArticleJsonLd
                type="Article"
                headline="Terms & Conditions - 0rca Network"
                url="https://0rca.network/terms-conditions"
                datePublished="2025-01-01T08:00:00+00:00"
                dateModified={new Date().toISOString()}
                author={{
                    "@type": "Organization",
                    name: "0rca Network",
                    url: "https://0rca.network"
                }}
                image="https://0rca.network/0rca.png"
                publisher={{
                    "@type": "Organization",
                    name: "0rca Network",
                    logo: "https://0rca.network/0rca.png"
                }}
                description="Review the terms and conditions for using 0rca Protocol. Important information regarding decentralized AI orchestration, blockchain interactions, and user responsibilities."
                isAccessibleForFree={true}
            />
            <Header />
            <main className="relative bg-[#0D0D0D] min-h-screen pt-32 pb-20 px-4">
                <div className="container max-w-4xl mx-auto">
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-sentient text-white mb-4">Terms & Conditions</h1>
                        <p className="text-[#63f2d2] font-mono mb-12">Last Updated: January 2025</p>
                    </Reveal>

                    <div className="space-y-12">
                        {sections.map((section, index) => (
                            <Reveal key={index}>
                                <div className="bg-[#1A1A1A]/40 border border-[#63f2d2]/10 rounded-xl p-8 hover:border-[#63f2d2]/20 transition-all duration-300">
                                    <h2 className="text-xl font-sentient text-[#BEF264] mb-4">{section.title}</h2>
                                    <p className="text-neutral-400 font-mono text-sm md:text-base leading-relaxed">
                                        {section.content}
                                    </p>
                                </div>
                            </Reveal>
                        ))}
                    </div>

                    <Reveal>
                        <div className="mt-16 p-8 border border-[#63f2d2]/20 rounded-xl bg-black/50 text-center">
                            <p className="text-neutral-300 font-mono text-sm">
                                If you have any questions about these terms, please contact us at{" "}
                                <a href="mailto:zero80932@gmail.com" className="text-[#63f2d2] hover:underline">
                                    zero80932@gmail.com
                                </a>
                            </p>
                        </div>
                    </Reveal>
                </div>
            </main>
            <Footer />
        </>
    )
}
