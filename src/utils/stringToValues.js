export default function stringToValues(str) {
    if(str.trim()) {
        const size = parseInt(str).toString();
        const units = str.replace(size, '').trim();

        return {
            size,
            units
        }
    }
}