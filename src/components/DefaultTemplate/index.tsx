import { ReactNode } from "react";
import { Menu } from '../';

interface Props {
    children: ReactNode;
}

const DefaultTemplate = ({ children }: Props) => {
    return (
    <div>
        <Menu />
        <main>{children}</main>    
    </div>
    );
};

export default DefaultTemplate;