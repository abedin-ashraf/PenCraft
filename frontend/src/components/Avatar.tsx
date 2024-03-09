export const Avatar = ({ name, size }: { name: string, size: number }) => {
    return <div className={`inline-flex items-center justify-center w-${size || 6} h-${size || 6} overflow-hidden bg-green-700 rounded-full`}>
        <span className="font-xs font-extralight text-gray-600 dark:text-gray-300">{name.charAt(0)}</span>
    </div>
}