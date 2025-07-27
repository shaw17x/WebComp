import React, { useState, useEffect, useRef } from "react"
import { createPortal } from "react-dom"
import { addPropertyControls, ControlType } from "framer"

interface Props {
    showPlaceholder?: boolean
    placeholderText?: string
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
    style?: React.CSSProperties
}

export default function ProfileDropdown(props: Props) {
    const {
        showPlaceholder = false,
        placeholderText = "Profile Dropdown (Login to see)",
        position = "top-right",
        style = {}
    } = props
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userEmail, setUserEmail] = useState("")
    const [isOpen, setIsOpen] = useState(false)
    const [buttonRect, setButtonRect] = useState<DOMRect | null>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const checkAuth = () => {
            // Check multiple possible storage keys that your login/signup might use
            const userStr = localStorage.getItem("supabase_user")
            const sessionStr = localStorage.getItem("supabase_session") || localStorage.getItem("steley_session")
            const tokenStr = localStorage.getItem("supabase.auth.token")

            console.log('🔍 ProfileDropdown checking auth...')
            console.log('👤 User data:', userStr ? 'FOUND' : 'NOT FOUND')
            console.log('🔐 Session data:', sessionStr ? 'FOUND' : 'NOT FOUND')
            console.log('🎫 Token data:', tokenStr ? 'FOUND' : 'NOT FOUND')

            if (userStr) {
                try {
                    const user = JSON.parse(userStr)
                    console.log('✅ User parsed successfully:', user.email)
                    setUserEmail(user.email || "")
                    setIsLoggedIn(true)
                } catch (e) {
                    console.error('❌ Failed to parse user data:', e)
                    setIsLoggedIn(false)
                    setUserEmail("")
                }
            } else if (sessionStr) {
                try {
                    const session = JSON.parse(sessionStr)
                    console.log('🔍 Session structure:', session)
                    
                    // Handle multiple session formats
                    let userEmail = null
                    
                    // Format 1: Supabase format (session.user.email)
                    if (session.user && session.user.email) {
                        userEmail = session.user.email
                        console.log('✅ User found in Supabase session format:', userEmail)
                    }
                    // Format 2: Your login format (session.email directly) 
                    else if (session.email && !session.user) {
                        userEmail = session.email
                        console.log('✅ User found in login session format:', userEmail)
                    }
                    
                    if (userEmail) {
                        setUserEmail(userEmail)
                        setIsLoggedIn(true)
                    } else {
                        console.log('❌ No user email found in session data')
                        setIsLoggedIn(false)
                        setUserEmail("")
                    }
                } catch (e) {
                    console.error('❌ Failed to parse session data:', e)
                    setIsLoggedIn(false)
                    setUserEmail("")
                }
            } else if (tokenStr) {
                try {
                    const tokenData = JSON.parse(tokenStr)
                    if (tokenData.user && tokenData.user.email) {
                        console.log('✅ User found in token:', tokenData.user.email)
                        setUserEmail(tokenData.user.email)
                        setIsLoggedIn(true)
                    } else {
                        console.log('❌ No user in token data')
                        setIsLoggedIn(false)
                        setUserEmail("")
                    }
                } catch (e) {
                    console.error('❌ Failed to parse token data:', e)
                    setIsLoggedIn(false)
                    setUserEmail("")
                }
            } else {
                console.log('❌ No auth data found')
                setIsLoggedIn(false)
                setUserEmail("")
            }
        }

        // Initial check
        checkAuth()
        
        // Listen for auth state changes (dispatched by your login/signup)
        const handleAuthStateChange = (event: any) => {
            console.log('🔄 Auth state change detected:', event.detail)
            if (event.detail && event.detail.user) {
                setUserEmail(event.detail.user.email || "")
                setIsLoggedIn(true)
                console.log('✅ ProfileDropdown updated from auth event')
            } else {
                setIsLoggedIn(false)
                setUserEmail("")
                console.log('❌ ProfileDropdown cleared from auth event')
            }
        }

        const handleUserLoggedIn = (event: any) => {
            console.log('👋 User logged in event:', event.detail)
            if (event.detail && event.detail.user) {
                setUserEmail(event.detail.user.email || "")
                setIsLoggedIn(true)
                console.log('✅ ProfileDropdown updated from login event')
            }
        }

        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === 'supabase_user' || event.key === 'supabase_session' || event.key === 'steley_session') {
                console.log('💾 Storage change detected for auth data')
                checkAuth()
            }
        }

        // Add event listeners
        window.addEventListener('authStateChanged', handleAuthStateChange)
        window.addEventListener('userLoggedIn', handleUserLoggedIn)
        window.addEventListener('storage', handleStorageChange)
        
        // Backup polling (reduced frequency)
        const interval = setInterval(checkAuth, 5000)
        
        return () => {
            window.removeEventListener('authStateChanged', handleAuthStateChange)
            window.removeEventListener('userLoggedIn', handleUserLoggedIn)
            window.removeEventListener('storage', handleStorageChange)
            clearInterval(interval)
        }
    }, [])

    const updateButtonPosition = () => {
        if (buttonRef.current) {
            setButtonRect(buttonRef.current.getBoundingClientRect())
        }
    }

    const handleToggleDropdown = (e: React.MouseEvent) => {
        e.stopPropagation()
        updateButtonPosition()
        setIsOpen(!isOpen)
    }

    const handleLogout = () => {
        console.log('🚪 Logging out...')
        
        // Clear all possible auth storage keys
        localStorage.removeItem("supabase_token")
        localStorage.removeItem("supabase_user")
        localStorage.removeItem("supabase_session")
        localStorage.removeItem("steley_session")
        localStorage.removeItem("supabase.auth.token")
        
        // Clear component state
        setIsLoggedIn(false)
        setUserEmail("")
        setIsOpen(false)
        
        // Dispatch logout event
        window.dispatchEvent(new CustomEvent('authStateChanged', {
            detail: { event: 'SIGNED_OUT', session: null, user: null }
        }))
        
        console.log('✅ Logout complete, redirecting...')
        window.location.href = "/"
    }

    const getInitials = (email: string) => {
        return email.split("@")[0].substring(0, 2).toUpperCase()
    }

    useEffect(() => {
        const handleScroll = () => {
            if (isOpen) {
                updateButtonPosition()
            }
        }

        const handleResize = () => {
            if (isOpen) {
                updateButtonPosition()
            }
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            window.addEventListener("scroll", handleScroll, true)
            window.addEventListener("resize", handleResize)
            document.addEventListener("click", handleClickOutside)
        }

        return () => {
            window.removeEventListener("scroll", handleScroll, true)
            window.removeEventListener("resize", handleResize)
            document.removeEventListener("click", handleClickOutside)
        }
    }, [isOpen])

    // Show debug info in console
    useEffect(() => {
        console.log('🎯 ProfileDropdown state:', { isLoggedIn, userEmail })
    }, [isLoggedIn, userEmail])

    // Show placeholder in Framer editor when user is not logged in
    if (!isLoggedIn) {
        console.log('👻 ProfileDropdown hidden - user not logged in')
        
        // Show placeholder for Framer positioning
        if (showPlaceholder) {
            return (
                <div
                    style={{
                        ...style,
                        position: "relative",
                        display: "inline-flex",
                        alignItems: "center",
                        background: "rgba(255, 255, 255, 0.1)",
                        border: "2px dashed rgba(255, 255, 255, 0.3)",
                        borderRadius: "8px",
                        padding: "8px 12px",
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: "12px",
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        minWidth: "140px",
                        textAlign: "center",
                        cursor: "default"
                    }}
                >
                    {placeholderText}
                </div>
            )
        }
        
        return null
    }

    console.log('👤 ProfileDropdown visible - user:', userEmail)

    // Gray/silver styling matching badge design
    const sharedStyle = {
        background: "linear-gradient(135deg, rgba(100,116,139,0.9) 0%, rgba(148,163,184,0.8) 50%, rgba(203,213,225,0.9) 100%)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(12px)",
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    }

    // Menu items with gray/silver theme
    const menuItemStyle = {
        display: "flex",
        alignItems: "center",
        width: "100%",
        padding: "12px 16px",
        background: "rgba(255, 255, 255, 0.1)",
        border: "none",
        color: "#1e293b",
        textAlign: "left" as const,
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "500" as const,
        textDecoration: "none",
        transition: "all 0.15s ease",
        boxSizing: "border-box" as const,
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
    }

    const DropdownPortal = () => {
        if (!isOpen || !buttonRect) return null

        return createPortal(
            <>
                <style>{`
                    @keyframes dropdownSlide {
                        from {
                            opacity: 0;
                            transform: translateY(-10px) scale(0.95);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0) scale(1);
                        }
                    }
                    
                    .program-menu-item {
                        transition: all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    }
                    
                    .program-menu-item:hover {
                        background: rgba(255, 255, 255, 0.2) !important;
                        border-color: rgba(255, 255, 255, 0.4) !important;
                        color: #0f172a !important;
                        transform: translateY(-1px) !important;
                    }
                    
                    .program-menu-item.logout:hover {
                        background: rgba(239, 68, 68, 0.2) !important;
                        border-color: rgba(239, 68, 68, 0.4) !important;
                        color: #dc2626 !important;
                    }
                `}</style>

                <div
                    style={{
                        position: "fixed",
                        top: `${buttonRect.bottom + 1}px`,
                        left: `${buttonRect.left}px`,
                        width: `${Math.max(buttonRect.width, 200)}px`,
                        ...sharedStyle,
                        borderRadius: "0 12px 12px 12px",
                        borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                        borderTopLeftRadius: "0",
                        padding: "0",
                        zIndex: 2147483647,
                        boxShadow: "0 1px 3px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.4)",
                        animation:
                            "dropdownSlide 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards",
                        transformOrigin: "top left",
                        overflow: "hidden",
                        pointerEvents: "auto",
                        boxSizing: "border-box",
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* User Info Header - Gray/Silver Style */}
                    <div
                        style={{
                            padding: "20px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                            background: "rgba(255, 255, 255, 0.15)",
                        }}
                    >
                        <div
                            style={{
                                color: "#1e293b",
                                fontWeight: "700",
                                fontSize: "15px",
                                marginBottom: "6px",
                                textAlign: "left",
                                letterSpacing: "-0.01em",
                            }}
                        >
                            {userEmail.split("@")[0]}
                        </div>
                        <div
                            style={{
                                color: "rgba(30, 41, 59, 0.7)",
                                fontSize: "13px",
                                textAlign: "left",
                                fontWeight: "400",
                            }}
                        >
                            {userEmail}
                        </div>
                    </div>

                    {/* Account Dashboard Link - Program Style */}
                    <a
                        href="/subscription"
                        className="program-menu-item"
                        style={menuItemStyle}
                    >
                        Account Dashboard
                    </a>

                    {/* Sign Out Button - Gray/Silver Style */}
                    <button
                        className="program-menu-item logout"
                        style={{
                            ...menuItemStyle,
                            color: "rgba(30, 41, 59, 0.8)",
                            borderBottom: "none",
                        }}
                        onClick={handleLogout}
                    >
                        Sign Out
                    </button>
                </div>
            </>,
            document.body
        )
    }

    // Apply positioning styles based on position prop
    const getPositionStyles = () => {
        const baseStyles = {
            position: "relative",
            display: "inline-flex", 
            alignItems: "center",
            ...style
        }
        
        // Add position-specific styles if needed
        switch (position) {
            case "top-right":
                return { ...baseStyles, marginLeft: "auto" }
            case "top-left":
                return { ...baseStyles, marginRight: "auto" }
            case "bottom-right":
                return { ...baseStyles, marginLeft: "auto" }
            case "bottom-left":
                return { ...baseStyles, marginRight: "auto" }
            default:
                return baseStyles
        }
    }

    return (
        <>
            <div style={getPositionStyles()}>
                <button
                    ref={buttonRef}
                    style={{
                        ...sharedStyle,
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        borderRadius: isOpen ? "12px 12px 0 0" : "12px",
                        padding: "10px 16px",
                        cursor: "pointer",
                        transition: "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        color: "#1e293b",
                        borderBottomColor: isOpen
                            ? "rgba(255, 255, 255, 0.4)"
                            : "rgba(255, 255, 255, 0.3)",
                        boxShadow: isOpen
                            ? "0 -1px 4px rgba(0, 0, 0, 0.06)"
                            : "0 1px 3px rgba(0, 0, 0, 0.04)",
                        boxSizing: "border-box",
                        minWidth: "150px",
                        fontWeight: "500",
                    }}
                    onClick={handleToggleDropdown}
                >
                    <div
                        style={{
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            background:
                                "linear-gradient(135deg, rgba(71,85,105,1), rgba(100,116,139,0.9))",
                            border: "2px solid rgba(255, 255, 255, 0.3)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "13px",
                            fontWeight: "700",
                            color: "#fff",
                            flexShrink: 0,
                            letterSpacing: "-0.5px",
                        }}
                    >
                        {getInitials(userEmail)}
                    </div>
                    <span
                        style={{
                            fontSize: "15px",
                            fontWeight: "500",
                            flex: 1,
                            textAlign: "left",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            letterSpacing: "-0.01em",
                        }}
                    >
                        {userEmail.split("@")[0]}
                    </span>
                    <span
                        style={{
                            fontSize: "11px",
                            opacity: 0.6,
                            transform: isOpen
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            transition:
                                "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                            flexShrink: 0,
                        }}
                    >
                        ▼
                    </span>
                </button>
            </div>

            <DropdownPortal />
        </>
    )
}

// Property controls for Framer
addPropertyControls(ProfileDropdown, {
    showPlaceholder: {
        type: ControlType.Boolean,
        title: "Show Placeholder",
        description: "Show placeholder when user is not logged in (for positioning in Framer)",
        defaultValue: true,
    },
    placeholderText: {
        type: ControlType.String,
        title: "Placeholder Text",
        description: "Text to show in placeholder",
        defaultValue: "Profile Dropdown (Login to see)",
        hidden: (props) => !props.showPlaceholder,
    },
    position: {
        type: ControlType.Enum,
        title: "Position",
        description: "How to position the dropdown",
        defaultValue: "top-right",
        options: ["top-right", "top-left", "bottom-right", "bottom-left"],
        optionTitles: ["Top Right", "Top Left", "Bottom Right", "Bottom Left"],
    },
}) 
