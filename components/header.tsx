import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs"
import { HeaderLogo } from "./header-logo"
import { Navigation } from "./navigation"
import { Loader2 } from "lucide-react"
import { WelcomeMsg } from "./welcome-msg"
import { Filters } from "./filters"

export const Header = () => {
    return (
        <header className="bg-emerald-500 bg-cover bg-center bg-[url('/logo-latest-10.png')]">
            <div className="w-full backdrop-blur-3xl px-4 py-8 lg:px-14 pb-36">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="w-full flex items-center justify-between mb-14">
                        <div className="flex items-center lg:gap-x-8">
                            <HeaderLogo />
                            <Navigation />
                        </div>
                        <ClerkLoaded >
                            <UserButton 
                                afterSignOutUrl="/" 
                                showName
                                appearance={{ 
                                    elements: { 
                                        avatarBox: 'w-10 h-10',
                                        userButtonOuterIdentifier: 'font-normal text-white text-base capitalize',
                                    }
                                }}
                            />
                        </ClerkLoaded>
                        <ClerkLoading>
                            <Loader2 className="size-8 animate-spin text-emerald-800" />
                        </ClerkLoading>
                    </div>
                    <WelcomeMsg />
                    <Filters />
                </div>
            </div>
        </header>
    )
}