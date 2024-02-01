export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block mb-1 font-medium text-sm text-gray-700 dark:text-gray-300 ` + className}>
            {value ? value : children}
        </label>
    );
}
