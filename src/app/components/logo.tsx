import Image from "next/image";

export default function Logo() {
    return (
        <div >
            <Image className="w-9/12"
                   src="/Project-Komyut-logo.png"
                   width={500}
                   height={500}
                   alt="Project Komyut Logo"
            />
        </div>
    )
}