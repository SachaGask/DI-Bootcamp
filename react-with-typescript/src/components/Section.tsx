import type { ReactNode } from 'react';

type SectionProps = {
    children: ReactNode;
}

const Section = ({ children }: SectionProps): ReactNode => {
    return <>{children}</>;
};

export default Section;