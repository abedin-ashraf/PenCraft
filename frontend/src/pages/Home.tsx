import { AppbarforHome } from "../components/AppBarforHome"
import { Link } from "react-router-dom"


export const Home = () => {
    return <div className="">
        <AppbarforHome />
        <div className="mt-20">
            <div className="text-center">
                <button className="rounded bg-slate-100 px-4 py-1 cursor-text">Welcome to PenCraft</button>
                <div className="mt-4">
                    <div className="text-4xl font-extrabold font-mono">The best stories start here</div>
                </div>
                <div className="text-xl text-slate-500 mt-3">
                    <div>A place where words matter. Read, write, and connect with the</div>
                    <div>stories that matter most to you</div>
                </div>
            </div>
            <div className="flex justify-center">
                <img className="size-2/5" src="../assets/undraw_Mobile_wireframe_re_jxui.png" alt="" />
            </div>
        </div>

        <div className="fixed bottom-3 left-8 right-8">
            <div>
                <div className="flex justify-between items-center">
                    <div>
                        <div className="flex justify-center font-medium text-slate-700">
                            <div className="mr-4">Privacy Policy</div>
                            <div>Terms & Conditions</div>
                        </div>
                    </div>
                    <div className="flex">
                        <Link to={'https://twitter.com/abedin_ashraf07'}>
                            <button type="button" className="flex items-center text-black bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path d="M75.916 54.2L122.542 0h-11.05L71.008 47.06L38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303L89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086l-39.42-56.386h16.972L65.19 53.824l4.954 7.086l41.353 59.15h-16.97L60.782 71.793Z" /></svg>Twitter</button>
                        </Link>
                        <Link to={'https://www.linkedin.com/in/abedin-ashraf/'}>
                            <button type="button" className="flex items-center text-black bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="#fff" rx="60" /><rect width="256" height="256" fill="#0a66c2" rx="60" /><path fill="#fff" d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4M38 59.628c0 11.864 9.767 21.626 21.632 21.626c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627m6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4" /></g></svg>LinkedIn</button>
                        </Link>
                        <Link to={'https://github.com/abedin-ashraf'}>
                            <button type="button" className="flex  items-center text-black bg-slate-200 hover:bg-slate-300 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"><svg className="mr-1" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2" /></svg>GitHub</button>
                        </Link>
                    </div>
                </div>
                <div className="text-center text-slate-400">Copyright @abedin-ashraf</div>
            </div>
        </div>

    </div>
}