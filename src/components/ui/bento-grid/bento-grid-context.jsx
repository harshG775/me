import { createContext, useContext, useState } from "react";

const BentoGridContext = createContext(undefined);

// eslint-disable-next-line react-refresh/only-export-components
export function useBentoGrid() {
    const context = useContext(BentoGridContext);
    if (!context) {
        throw new Error("useBentoGrid must be used within a BentoGridProvider");
    }
    return context;
}

export function BentoGridProvider({
    children,
    initialTemplate = {
        desktop: ["a a b", "c d d", "e f f"],
        tablet: ["a a b", "c d d", "e f f"],
        mobile: ["a", "b", "c", "d", "e", "f"],
    },
}) {
    const [gridTemplate, setGridTemplate] = useState(initialTemplate);

    const updateGridTemplate = (newTemplate) => {
        setGridTemplate(newTemplate);
    };

    const getAreaStyles = (area) => {
        return `grid-area: ${area};`;
    };

    return (
        <BentoGridContext.Provider value={{ gridTemplate, updateGridTemplate, getAreaStyles }}>
            {children}
        </BentoGridContext.Provider>
    );
}
