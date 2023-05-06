import { extendTheme } from '@mui/joy/styles';

export default function _theme() {
    extendTheme({
        fontFamily: {
            display: "'Inter', var(--joy-fontFamily-fallback)",
            body: "'Inter', var(--joy-fontFamily-fallback)",
        },
    });

}