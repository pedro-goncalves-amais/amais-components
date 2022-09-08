export function useClasses(classes = []) {
    return classes.filter(Boolean).join(" ");
}
