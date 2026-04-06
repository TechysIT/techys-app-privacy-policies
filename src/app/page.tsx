import {Tabs} from "@/components/ui/tabs";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import {NormantonMarkdown} from "@/markdowns/normanton";
import {OkraMarkdown} from "@/markdowns/okra";
import {SimvicMarkdown} from "@/markdowns/simvic";
import {SwyftClientMarkdown} from "@/markdowns/swyft-client";

export default async function Home({
                                 searchParams,
                             }: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const search = searchParams?.app
    let index = 0
    const tabs = [
        {
            title: "Swyft Courier Client App",
            value: "swyft-client",
            content: (
                <div
                    className="w-full relative h-full rounded-2xl p-10 font-bold space-y-8 text-white bg-neutral-800 border-2 border-orange-500 overflow-y-auto items-center flex flex-col">
                    <span className="w-full text-center items-center text-3xl">Swyft Courier Client App Privacy Policy</span>
                    <Markdown className="prose prose-invert prose:w-full" remarkPlugins={[remarkGfm]}>{SwyftClientMarkdown}</Markdown>
                </div>
            ),
        },
        {
            title: "Okra - Fine Indian Dining",
            value: "okra",
            content: (
                <div
                    className="w-full relative h-full rounded-2xl p-10 font-bold space-y-8 text-white bg-neutral-800 border-2 border-orange-500 overflow-y-auto items-center flex flex-col">
                    <span className="w-full text-center items-center text-3xl">Okra - Fine Indian Dining App Privacy Policy</span>
                    <Markdown className="prose prose-invert prose:w-full" remarkPlugins={[remarkGfm]}>{OkraMarkdown}</Markdown>
                </div>
            ),
        },
        {
            title: "Normanton",
            value: "normanton",
            content: (
                <div
                    className="w-full relative h-full rounded-2xl p-10 font-bold space-y-8 text-white bg-neutral-800 border-2 border-orange-500 overflow-y-auto items-center flex flex-col">
                    <span className="w-full text-center items-center text-3xl">Normanton Recovery Service App Privacy Policy</span>
                    <Markdown className="prose prose-invert prose:w-full" remarkPlugins={[remarkGfm]}>{NormantonMarkdown}</Markdown>
                </div>
            ),
        },
        {
            title: "Simvic",
            value: "simvic",
            content: (
                <div
                    className="w-full relative h-full rounded-2xl p-10 font-bold space-y-8 text-white bg-neutral-800 border-2 border-orange-500 overflow-y-auto items-center flex flex-col">
                    <span
                        className="w-full text-center items-center text-3xl">Simvic App Privacy Policy</span>
                    <Markdown className="prose prose-invert prose:w-full" remarkPlugins={[remarkGfm]}>{SimvicMarkdown}</Markdown>
                </div>
            ),
        },
        {
            title: "One Dream",
            value: "one-dream",
            content: (
                <div
                    className="w-full relative h-full rounded-2xl p-10 font-bold space-y-8 text-white bg-neutral-800 border-2 border-orange-500 overflow-y-auto items-center flex flex-col">
                    <span
                        className="w-full text-center items-center text-3xl">One Dream App Privacy Policy</span>
                </div>
            ),
        },
    ];
    if (search) {
        const foundIndex = tabs.findIndex((item) => item.value === search)
        if (foundIndex >= 0) {
            index = foundIndex
        }
    }

    return (
        <div className="h-[150vh] [perspective:1000px] relative flex flex-col items-center container mx-auto w-full mb-20 mt-10">
            <Image src={"/logo.png"} alt={"Logo"} height={100} width={100}/>
            <p className="text-center text-4xl sm:text-6xl font-bold text-white mt-4 mb-8">Techy&apos;s App Privacy
                Policies</p>
            <Tabs tabs={tabs} activeTabClassName="bg-[#28282E]" containerClassName="bg-orange-500 text-white" activeIndex={index}/>
        </div>
    );
}
