"use client"

import Link from "next/link"
import { useState } from "react"
import { Globe } from "./Icons"

const LanguageSwitch = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en")

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "en" ? "pt" : "en")
  }
  return (
    <div onClick={toggleLanguage} className="cursor-pointer flex">
      <Link href={`/${currentLanguage === "en" ? "pt" : "en"}`}>
        {currentLanguage === "en" ? "PT-BR" : "ENG"}
      </Link>
    </div>
  )
}

export default LanguageSwitch
