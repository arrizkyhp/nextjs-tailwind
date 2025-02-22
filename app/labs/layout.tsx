import {ReactNode} from "react";

const LabLayout = ({children}: {children: ReactNode}) => {
    return (
        <div className="bg-cutting-mat-blue bg-[length:var(--tw-bg-size-cutting-mat-blue)] font-[family-name:var(--font-inter)] h-screen">
            {children}
        </div>
    )
}

            export default LabLayout;
