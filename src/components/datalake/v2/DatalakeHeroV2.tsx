"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const cloudProviders = [
  { name: "AWS S3", icon: "/images/community/partners/amazon-s3.svg" },
  { name: "Google Cloud", icon: "/images/community/partners/google-cloud.svg" },
  { name: "Azure", icon: "/images/community/partners/azure.svg" },
];

const specs = [
  { value: "2.4M+", label: "Assets indexed", mono: true },
  { value: "847 GB", label: "Total storage", mono: true },
  { value: "<12ms", label: "Query latency", mono: true },
  { value: "99.9%", label: "Sync uptime", mono: true },
];

export default function DatalakeHeroV2() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative pt-32 pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Top bar — status line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-between mb-12 pb-4 border-b border-[var(--border)]"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--picsellia-blue)] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--picsellia-blue)]" />
            </span>
            <span className="text-xs font-mono text-[var(--tertiary-label)]">
              DATALAKE_STATUS: CONNECTED
            </span>
          </div>
          <div className="flex items-center gap-4">
            {cloudProviders.map((p) => (
              <div key={p.name} className="flex items-center gap-1.5">
                <Image src={p.icon} alt={p.name} width={14} height={14} />
                <span className="text-[10px] font-mono text-[var(--tertiary-label)] hidden sm:inline">
                  {p.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08]">
            All your visual data.
            <br />
            <span className="text-[var(--picsellia-blue)]">One place.</span>
          </h1>
        </motion.div>

        {/* Subheadline + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <p className="text-lg text-[var(--secondary-label)] leading-relaxed max-w-lg">
            Aggregate, organize, and explore billions of images and videos from
            any source. One unified repository for all your computer vision
            data.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <Link
              href="/demo"
              className="btn-primary px-7 py-3.5 text-[15px] group"
            >
              See It In Action
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
            <Link
              href="https://documentation.picsellia.com/docs/datalake-3"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-7 py-3.5 text-[15px]"
            >
              Documentation
            </Link>
          </div>
        </motion.div>

        {/* Specs row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 border border-[var(--border)] rounded-xl overflow-hidden mb-16"
        >
          {specs.map((s, i) => (
            <div
              key={s.label}
              className={`p-5 ${i < specs.length - 1 ? "border-r border-[var(--border)]" : ""} ${i < 2 ? "border-b md:border-b-0 border-[var(--border)]" : ""}`}
            >
              <div className="text-2xl md:text-3xl font-bold text-[var(--label)] font-mono tracking-tight">
                {s.value}
              </div>
              <div className="text-xs text-[var(--tertiary-label)] mt-1 font-mono uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-mono text-[var(--tertiary-label)] uppercase tracking-wider">
              fig.01 — Datalake Overview
            </span>
            <span className="text-[10px] font-mono text-[var(--tertiary-label)]">
              1920 &times; 1080
            </span>
          </div>
          <div className="rounded-xl overflow-hidden border border-[var(--border)]">
            <video
              ref={videoRef}
              src="/videos/datalake.mov"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto block"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--background)] to-transparent rounded-b-xl" />
        </motion.div>
      </div>
    </section>
  );
}
