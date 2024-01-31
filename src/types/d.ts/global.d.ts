declare module '*.svg';

declare module '*.png';

declare module '*.scss' {
    const styles: Record<string, string>;
    export default styles;
}
