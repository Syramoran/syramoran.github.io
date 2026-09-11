"use client"

import { useEffect, useState } from "react"
import { Instagram, ImageIcon, Play } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

type Stat = { label: { es: string; en: string }; value: string }

type SocialAccount = {
  name: string
  handle: string
  url: string
  avatar: string
  bio?: { es: string; en: string }
  stats: Stat[]
  mediaBase: string
  posts: string[]
}

/*
 * ─────────────────────────────────────────────────────────────
 *  CÓMO CARGAR EL CONTENIDO DE CADA CUENTA
 * ─────────────────────────────────────────────────────────────
 *  1. Revisá / corregí "handle", "url" y las "stats" (números reales).
 *  2. Poné la foto de perfil en:  public/mkt/<carpeta>/avatar.jpg
 *  3. Poné los 3 posteos en:      public/mkt/<carpeta>/1.jpg ... 3.jpg
 *     - Para un video usá la extensión .mp4 y cambialo en "posts"
 *       (ej: posts: ["1.jpg", "2.mp4", "3.jpg", ...]).
 *  Mientras falten archivos se muestra un recuadro punteado.
 */
const accounts: SocialAccount[] = [
  {
    name: "Tecnoagro",
    handle: "@tecnoagro",
    url: "https://instagram.com/tecnoagro",
    avatar: "/mkt/tecnoagro/avatar.jpg",
    bio: {
      es: "Contenido y comunicación digital para el agro",
      en: "Content and digital communication for the agriculture sector",
    },
    stats: [
      { label: { es: "Posteos", en: "Posts" }, value: "40" },
      { label: { es: "Seguidores", en: "Followers" }, value: "+142%" },
      { label: { es: "Interac.", en: "Engagement" }, value: "+22%" },
    ],
    mediaBase: "/mkt/tecnoagro",
    posts: ["1.mp4", "2.png", "3.png"],
  },
  {
    name: "Bajo Cero Refrigeración",
    handle: "@bajocero.ref",
    url: "https://instagram.com/bajocero.ref",
    avatar: "/mkt/bajocero/avatar.jpg",
    bio: {
      es: "Campaña publicitaria y gestión de redes sociales",
      en: "Advertising campaign and social media management",
    },
    stats: [
      { label: { es: "Posteos", en: "Posts" }, value: "49" },
      { label: { es: "Seguidores", en: "Followers" }, value: "+127%" },
      { label: { es: "Views", en: "Views" }, value: "14,5k" },
    ],
    mediaBase: "/mkt/bajocero",
    posts: ["1.png", "2.png", "3.mp4"],
  },
  {
    name: "CowiX",
    handle: "@cowix.ok",
    url: "https://instagram.com/cowix.ok",
    avatar: "/mkt/cowix/avatar.jpg",
    bio: {
      es: "Estrategia de contenidos y gestión de comunidad · MOII Agency",
      en: "Content strategy and community management · MOII Agency",
    },
    stats: [
      { label: { es: "Posteos", en: "Posts" }, value: "350" },
      { label: { es: "Seguidores", en: "Followers" }, value: "+138%" },
      { label: { es: "Alcance", en: "Reach" }, value: "+143%" },
    ],
    mediaBase: "/mkt/cowix",
    posts: ["video.mp4", "2.png", "video2.mp4"],
  },
  {
    name: "Centro Quiropráctico M. Hundt",
    handle: "@centroquiropracticohundt",
    url: "https://instagram.com/centroquiropracticohundt",
    avatar: "/mkt/cqmh/avatar.jpg",
    bio: {
      es: "Edición de contenidos y gestión de redes · MOII Agency",
      en: "Content editing and social media management · MOII Agency",
    },
    stats: [
      { label: { es: "Posteos", en: "Posts" }, value: "320" },
      { label: { es: "Seguidores", en: "Followers" }, value: "+115%" },
      { label: { es: "Views", en: "Views" }, value: "15,6k" },
    ],
    mediaBase: "/mkt/cqmh",
    posts: ["1.png", "2.png", "3.mp4"],
  },


  {
    name: "UCA · Ingreso Paraná",
    handle: "@ucaingresoparana",
    url: "https://instagram.com/ucaingresoparana",
    avatar: "/mkt/uca-ingreso/avatar.jpg",
    bio: {
      es: "Difusión de carreras y campaña de ingreso · UCA Paraná MOII Agency",
      en: "Program outreach and enrollment campaign · UCA Paraná MOII Agency",
    },
    stats: [
      { label: { es: "Posteos", en: "Posts" }, value: "52" },
      { label: { es: "Seguidores", en: "Followers" }, value: "+108%" },
      { label: { es: "Alcance", en: "Reach" }, value: "+30%" },
    ],
    mediaBase: "/mkt/uca-ingreso",
    posts: ["1.png", "2.png", "3.mp4"],
  },
  {
    name: "Colegio de Veterinarios de Entre Ríos",
    handle: "@colegioveterinarios.entrerios",
    url: "https://instagram.com/colegioveterinarios.entrerios",
    avatar: "/mkt/colegio-veterinarios/avatar.jpg",
    bio: {
      es: "Comunicación institucional y contenidos para colegiados · MOII Agency",
      en: "Institutional communication and content for members · MOII Agency",
    },
    stats: [
      { label: { es: "Posteos", en: "Posts" }, value: "45" },
      { label: { es: "Seguidores", en: "Followers" }, value: "+134%" },
      { label: { es: "Interac.", en: "Engagement" }, value: "+18%" },
    ],
    mediaBase: "/mkt/colegio-veterinarios",
    posts: ["1.png", "2.png", "3.png"],
  },
]

const copy = {
  es: { follow: "Seguir", mediaPlaceholder: "Foto / video" },
  en: { follow: "Follow", mediaPlaceholder: "Photo / video" },
}

function useMediaExists(src: string, enabled = true) {
  const [ok, setOk] = useState(false)
  useEffect(() => {
    if (!enabled) return
    const img = new window.Image()
    img.onload = () => setOk(true)
    img.onerror = () => setOk(false)
    img.src = src
  }, [src, enabled])
  return ok
}

function Avatar({ src, name }: { src: string; name: string }) {
  const ok = useMediaExists(src)
  const initials = name
    .replace(/[^a-zA-ZÀ-ÿ ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((s) => s[0])
    .join("")
    .toUpperCase()

  return (
    <div className="w-14 h-14 shrink-0 rounded-full overflow-hidden ring-2 ring-[var(--primary)]/40 bg-[var(--primary)]/10 flex items-center justify-center">
      {ok ? (
        <img src={src} alt={name} className="w-full h-full object-cover" />
      ) : (
        <span className="text-[var(--primary)] font-bold text-sm">{initials}</span>
      )}
    </div>
  )
}

function PostTile({ base, file, placeholder }: { base: string; file: string; placeholder: string }) {
  const isVideo = /\.(mp4|webm|mov)$/i.test(file)
  const src = file ? `${base}/${file}` : ""
  const imgOk = useMediaExists(src, Boolean(src) && !isVideo)
  const [videoOk, setVideoOk] = useState(true)

  const hasMedia = Boolean(src) && (isVideo ? videoOk : imgOk)

  return (
    <div className="group/tile relative aspect-square overflow-hidden rounded-sm bg-[var(--muted)]">
      {hasMedia ? (
        isVideo ? (
          <video
            src={src}
            muted
            loop
            playsInline
            autoPlay
            preload="metadata"
            onError={() => setVideoOk(false)}
            className="w-full h-full object-cover rounded-sm"
          />
        ) : (
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover/tile:scale-105"
          />
        )
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-1 border border-dashed border-[var(--border)] rounded-sm text-[var(--muted-foreground)]/50">
          <ImageIcon size={18} />
          <span className="text-[9px] uppercase tracking-wider">{placeholder}</span>
        </div>
      )}

      {isVideo && hasMedia && (
        <span className="absolute top-1.5 right-1.5 text-white drop-shadow-md">
          <Play size={16} fill="currentColor" />
        </span>
      )}
      <span className="absolute inset-0 bg-[var(--primary)]/0 group-hover/tile:bg-[var(--primary)]/10 transition-colors rounded-sm pointer-events-none" />
    </div>
  )
}

function AccountCard({ account, lang, t }: { account: SocialAccount; lang: "es" | "en"; t: (typeof copy)["es"] }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[var(--primary)]/10 transition-shadow">
      {/* Encabezado tipo perfil */}
      <div className="flex items-center gap-3 p-4">
        <Avatar src={account.avatar} name={account.name} />
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-sm text-[var(--foreground)] truncate">{account.name}</p>
          <p className="text-xs text-[var(--muted-foreground)] truncate">{account.handle}</p>
        </div>
        <a
          href={account.url}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center gap-1.5 bg-[var(--primary)] text-white text-xs font-bold px-3 py-1.5 rounded-lg hover:opacity-90 transition-opacity"
        >
          <Instagram size={13} />
          {t.follow}
        </a>
      </div>

      {/* Datos estadísticos */}
      <div className="flex border-y border-[var(--border)]">
        {account.stats.map((s) => (
          <div key={s.label.es} className="flex-1 text-center py-3 px-1">
            <p className="font-bold text-sm text-[var(--foreground)]">{s.value}</p>
            <p className="text-[10px] uppercase tracking-wider text-[var(--muted-foreground)]">{s.label[lang]}</p>
          </div>
        ))}
      </div>

      {account.bio && (
        <p className="px-4 py-2.5 text-xs text-[var(--muted-foreground)] leading-relaxed">{account.bio[lang]}</p>
      )}

      {/* 1 fila x 3 columnas de posteos */}
      <div className="grid grid-cols-3 gap-2 p-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <PostTile key={i} base={account.mediaBase} file={account.posts[i] ?? ""} placeholder={t.mediaPlaceholder} />
        ))}
      </div>
    </div>
  )
}

export default function MarketingFeed() {
  const { lang } = useLanguage()
  const t = copy[lang]

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {accounts.map((account) => (
        <AccountCard key={account.handle} account={account} lang={lang} t={t} />
      ))}
    </div>
  )
}
