'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
	mode: string
	setMode: (mode: string) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [mode, setMode] = useState('')

	const handlerThemeChange = () => {
		if (mode === 'dark') {
			setMode('light')
			document.documentElement.classList.add('light')
		} else {
			setMode('dark')
			document.documentElement.classList.add('dark')
		}
	}

	useEffect(() => {
		handlerThemeChange()
	}, [mode])

	return (
		<ThemeContext.Provider value={{ mode, setMode }}>
			{children}
		</ThemeContext.Provider>
	)
}

export function useTheme() {
	const context = useContext(ThemeContext)

	if (context === undefined) {
		throw new Error('ошибка')
	}

	return context
}
