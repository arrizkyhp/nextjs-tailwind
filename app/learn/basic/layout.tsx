export default function BasicLearnLayout({children,}:
    Readonly<{ children: React.ReactNode;}>) {
    return (
        <div className="flex flex-col w-full items-center p-4">
            {children}
        </div>
    );
}
