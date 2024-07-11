import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
    ClerkLoading,
    ClerkLoaded,
    UserButton,
  } from "@clerk/nextjs";
  import { Loader } from "lucide-react";
import { SidebarItem } from "./sidebar-item";

type Props = {
    className?: string;
};

export const Sidebar = ({className}: Props) => {
    return (
        <div className={cn("flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col", className,)}>
           <Link href="/learn">
              <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
              <Image src="/mascot.svg" height={60} width={60} alt="Mascot" />
              <h1 className="text-2xl size-4 font-extrabold text-purple-600 tracking-wide">
              Verbi
              </h1>
            </div>
           </Link>
           <div className="flex flex-col gap-y-2 flex-1">
            <SidebarItem label= "learn" href="/learn" iconSrc="/learn.svg"/>
            <SidebarItem label= "leaderboard" href="/leaderboard" iconSrc="/leaderboard.svg"/>
            <SidebarItem label= "quests" href="/quests" iconSrc="/quests.svg"/>
            <SidebarItem label= "shop" href="/shop" iconSrc="/shop.svg"/>
           </div>
           <div className="p-4">
             <ClerkLoading>
               <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
             </ClerkLoading>
             <ClerkLoaded>
             <UserButton afterSignOutUrl="/" />
             </ClerkLoaded>
           </div>
        </div>
       
    )
}