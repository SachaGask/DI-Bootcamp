
import type { ReactNode } from 'react';

type HeadingProps = {
    title: string;
    subtitle: string;
};

const Heading = ({title, subtitle} : HeadingProps): ReactNode => {
    return (
    <>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
    </>
    );
};

export default Heading;