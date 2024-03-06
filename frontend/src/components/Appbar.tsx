import { Avatar } from "./Avatar"

export const Appbar = () => {
    return <div className="border-b flex justify-between items-center px-10 py-4">
        <div className="font-semibold">PenCraft</div>
        <div><Avatar name="Ashraf" size={10} /></div>
    </div>
}